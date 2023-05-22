from flask import Flask, request, send_from_directory
from flask_mail import Mail,Message
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import os
from langchain.vectorstores import Pinecone
from langchain.embeddings.openai import OpenAIEmbeddings
import pinecone
from gptchat import get_chain

import gspread
from datetime import datetime

credentials = {
  "type": "service_account",
  "project_id": "resolute-planet-303211",
  "private_key_id": os.environ.get('GOOGLE_PRIVATE_KEY_ID'),
  "private_key": os.environ.get('GOOGLE_PRIVATE_KEY').replace('\\n', '\n'),
  "client_email": "chatbot@resolute-planet-303211.iam.gserviceaccount.com",
  "client_id": "106186810120306116112",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/chatbot%40resolute-planet-303211.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
client = gspread.service_account_from_dict(credentials,scope)
sheet = client.open("Chatbot Data").sheet1   

pinecone.init(api_key=os.environ.get('PINECONE_API_KEY'), environment=os.environ.get('PINECONE_ENVIRONMENT'))
embeddings = OpenAIEmbeddings()
vectorstore = Pinecone.from_existing_index(index_name=os.environ.get('PINECONE_INDEX_NAME'), embedding=embeddings, namespace=os.environ.get('PINECONE_NAMESPACE'))

app = Flask(__name__,static_url_path='', static_folder='build')
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://",
)

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config["MAIL_DEFAULT_SENDER"]= os.environ.get('USERNAME')
app.config['MAIL_USERNAME'] = os.environ.get('USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('PASSWORD')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/input',methods=["POST"])
@limiter.limit("6/minute", override_defaults=False)
def get_input():
    qa_chain = get_chain(vectorstore)
    data=request.get_json()
    if len(data['question']) > 500:
        return 'Question too long', 413
    
    chat_history = []
    i = 0
    while i < len(data['chat_history']):
        userMessage = data['chat_history'][i][1]
        i+=1
        botMessage = ""
        while i < len(data['chat_history']) and data['chat_history'][i][0] == 'bot':
            botMessage += data['chat_history'][i][1]+" "
            i+=1
        chat_history.append((userMessage,botMessage))
    result = qa_chain({"question": data['question'], "chat_history": chat_history})
    logToSheets = [datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),request.remote_addr,request.host,data['question'],result['answer']]
    sheet.insert_row(logToSheets)
    return {'message':result['answer']}
    

@app.route('/email',methods=["POST"])
def receive_email():
    try:
        email=request.get_json()
        header = "website"+" % "+email["name"]+" % "+email["email"""]
        msg = Message(subject=header,recipients=["colin.ho99@gmail.com"],body=email["message"])
        mail.send(msg)
        return {'message':True}
    except:
        return {'message':False}
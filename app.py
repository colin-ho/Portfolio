from flask import Flask, request, send_from_directory
from flask_mail import Mail,Message
import os
from langchain.vectorstores import Pinecone
from langchain.embeddings.openai import OpenAIEmbeddings
import pinecone
from gptchat import get_chain

pinecone.init(api_key=os.environ.get('PINECONE_API_KEY'), environment=os.environ.get('PINECONE_ENVIRONMENT'))
embeddings = OpenAIEmbeddings()
vectorstore = Pinecone.from_existing_index(index_name=os.environ.get('PINECONE_INDEX_NAME'), embedding=embeddings, namespace="pdf-test")

app = Flask(__name__,static_url_path='', static_folder='build')

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
def get_input():
    qa_chain = get_chain(vectorstore)
    data=request.get_json()
    chat_history = []
    for i in range(2,len(data['chat_history']),2):
        chat_history.append((data['chat_history'][i][1],data['chat_history'][i+1][1]))
    result = qa_chain({"question": data['question'], "chat_history": chat_history})
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
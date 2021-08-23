from flask import Flask, request, send_from_directory
from chatbot import chat
from flask_mail import Mail,Message
import os

app = Flask(__name__,static_url_path='', static_folder='build')

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config["MAIL_DEFAULT_SENDER"]= os.environ.get('USERNAME')
app.config['MAIL_USERNAME'] = os.environ.get('USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('PASSWORD')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

s = [['bot','Hello! This chatbot is programmed to answer professional questions about me.'],['bot',"Select an option below, or type in your question."]]

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/message')
def get_message():
    return {'message':s}

@app.route('/input',methods=["POST"])
def get_input():
    message=request.get_json()
    data,tag=chat(message)
    response = ['bot',data]
    if tag == 'about':
        follow = ['bot','Ask again for different answers!']
        return {'message':[response,follow],'tag':tag}
    elif tag == 'skills':
        follow = ['bot','Would you like to see more?']
        return {'message':[response,follow],'tag':tag}
    elif tag =='projects':
        follow = ['bot','Would you like to see my projects?']
        return {'message':[response,follow],'tag':tag}
    elif tag =='education' or tag =='experience':
        follow = ['bot','Would you like to see my resume?']
        return {'message':[response,follow],'tag':tag}
    elif tag =='contact':
        follow = ['bot','Feel free to send me an email!']
        return {'message':[response,follow],'tag':tag}
    else:
        return {'message':response,'tag':tag}
    

@app.route('/email',methods=["POST"])
def receive_email():
    try:
        email=request.get_json()
        header = "website"+" % "+email["name"]+" % "+email["email"""]
        msg = Message(subject=header,recipients=["colin.ho99@gmail.com"],body=email["message"])
        mail.send(msg)
        return True
    except:
        return False
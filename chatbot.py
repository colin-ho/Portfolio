import random
import pandas as pd
import joblib
import json
import re
import string

from nltk.stem import WordNetLemmatizer

from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences

lemmatizer = WordNetLemmatizer()
data = json.loads(open('intents.json').read())

tester = load_model('model-v1.h5')
tokenizer_t = joblib.load('tokenizer_t.pkl')
vocab = joblib.load('vocab.pkl')
mapper = joblib.load('mapper.pkl')

def get_text(message):
    input_text  = []
    input_text.append(message)
    df_input = pd.DataFrame(input_text,columns=['question'])
    return df_input

def tokenizer(entry):
    tokens = entry.split()
    re_punc = re.compile('[%s]' % re.escape(string.punctuation))
    tokens = [re_punc.sub('', w) for w in tokens]
    tokens = [word for word in tokens if word.isalpha()]
    tokens = [lemmatizer.lemmatize(w.lower()) for w in tokens]
    tokens = [word.lower() for word in tokens if len(word) > 1]
    return tokens

def remove_stop_words_for_input(tokenizer,df,feature):
    doc_without_stopwords = []
    entry = df[feature][0]
    tokens = tokenizer(entry)
    doc_without_stopwords.append(' '.join(tokens))
    df[feature] = doc_without_stopwords
    return df

def encode_input_text(tokenizer_t,df,feature):
    t = tokenizer_t
    entry = entry = [df[feature][0]]
    encoded = t.texts_to_sequences(entry)
    padded = pad_sequences(encoded, maxlen=8, padding='post')
    return padded

def get_pred(model,encoded_input):
    pred = model.predict(encoded_input)
    pred_dict=[]
    for key in mapper.keys():
        if pred[0][mapper[key]]>0.4:
            pred_dict.append([key,pred[0][mapper[key]]])
    pred_dict.sort(key=lambda x: x[1], reverse=True)
    return pred_dict

def get_response(intents_list, intents_json,message):
    if not intents_list:
        return "Sorry, I cannot understand you",'confused'
    tag = intents_list[0][0]
    if tag == "confused":
        return "Sorry, I cannot understand you",'confused'
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tag']==tag:
            if i['tag']=="media":
                if "github" in message:
                    result = i['responses'][0]
                    return result,tag
                elif "linked" in message:
                    result = i['responses'][1]
                    return result,tag
            result = random.choice(i['responses'])
            break
    
    return result,tag

def chat(message):
    df_input = get_text(message)
    df_input = remove_stop_words_for_input(tokenizer,df_input,'question')
    encoded_input = encode_input_text(tokenizer_t,df_input,'question')
    intents_list = get_pred(tester,encoded_input)
    response,tag = get_response(intents_list,data,message)
    return response,tag
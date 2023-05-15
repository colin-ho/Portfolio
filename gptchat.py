from langchain.prompts.prompt import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.chains import LLMChain
from langchain.chains.question_answering import load_qa_chain
from langchain.chains.conversational_retrieval.prompts import CONDENSE_QUESTION_PROMPT

template = """You are a helpful AI chatbot programmed to answer questions about Colin Ho. Use the following pieces of context to answer the question at the end.
Make sure your answer is only one sentence long.
If you don't know the answer, just say you don't know. DO NOT try to make up an answer.
If the question is not related to Colin Ho, politely respond that you are tuned to only answer questions that are related to Colin Ho.

{context}

Question: {question}
Helpful answer in markdown:"""
QA_PROMPT = PromptTemplate(template=template, input_variables=["question", "context"])


def get_chain(vectorstore):
    llm = ChatOpenAI(temperature=0.5,model_name='gpt-4')
    doc_chain = load_qa_chain(llm=llm, chain_type="stuff", prompt=QA_PROMPT)
    question_generator = LLMChain(llm=llm, prompt=CONDENSE_QUESTION_PROMPT)
    qa_chain = ConversationalRetrievalChain(
        retriever=vectorstore.as_retriever(),
        combine_docs_chain=doc_chain,
        question_generator=question_generator,
    )
    return qa_chain
from flask import Flask, request
from openai import OpenAI
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

VERSION = "v0.0.1"

OPENAI_API_KEY = "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"
OPENAI_ORGANIZATION = "org-ueNQYAHbimuOpo0ExcQpveTB"


def conversation(message):
    
    client = OpenAI(api_key=OPENAI_API_KEY,
                    organization=OPENAI_ORGANIZATION)

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": "Você é um bot de saúde mental."},
                  {"role": "user", "content": message}])

    return completion.choices[0].message.content

@app.route('/chat', methods=['POST'])
def get_chat_conversation():
    """
    Requisição: {"message": "Olá, chatbot!"}
    :return: {"chatbot_message": "Olá, usuário!"}
    """
    request_data = request.get_json()
    # request_data = request.data.decode("UTF-8")
    try:
        message = request_data['message']
        return {"chatbot_message": conversation(str(message))}
    except Exception as error:
        print(error)
        return {"error": "Mensagem não encontrada! Certifique-se de que esteja utilizando o campo "
                                    "'message'"}


@app.route('/version', methods=['GET'])
def version():
    return {"version": VERSION}
@app.route('/', methods=['GET'])
def home():
    return "Olá mundo"


if __name__ == '__main__':
    app.run(debug=True)

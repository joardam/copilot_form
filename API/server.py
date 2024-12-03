import sys
import os
import json

import openai

from flask import Flask, request, jsonify
from flask_cors import CORS
from backend import openai_connection  # Importa o script de conexão com a OpenAI

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from your React app

@app.route('/api/extracted-data', methods=['POST'])
def receive_extracted_data():
    try:
        # Receber os dados do front-end
         # Receber os dados do front-end
        data = request.json
        
        # Formatar os dados recebidos para exibição
        def format_data(data, prefix=""):
            formatted = ""
            if isinstance(data, dict):
                for key, value in data.items():
                    if isinstance(value, dict):
                        formatted += format_data(value, prefix=f"{prefix}{key}.")
                    else:
                        formatted += f"{prefix}{key}: {value}\n"
            return formatted

        
        # Adicionar os dados do paciente à conversa
        openai_connection.messages.append({"role": "user", "content": format_data(data)})
        
        # Obter resposta da IA
        completion = openai.chat.completions.create(
            model="gpt-4",
            messages=openai_connection.messages,
        )
        
        # Obter e imprimir a resposta
        response = completion.choices[0].message.content
        # print("\nResposta da IA:")
        # print(response)
        
        
        
        # Retornar a resposta da IA para o front-end (opcional)
        return jsonify({
            "status": "success", 
            "message": "Dados recebidos com sucesso", 
            "ai_response": response
        }), 200
    
    except Exception as e:
        print(f"Erro ao processar dados: {e}")
        return jsonify({"status": "error", "message": str(e)}), 400

if __name__ == '__main__':
    print("Servidor iniciado. Aguardando conexões...")
    app.run(host='0.0.0.0', port=3001, debug=True)
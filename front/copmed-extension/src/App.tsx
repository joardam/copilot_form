import {useState } from 'react';
import './App.css';
import Chat from './modules/Chat/chat';


function App() {
 

  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Como posso ajudar?", sender: "bot", timestamp: new Date().toLocaleTimeString() },
  ]);

  

  
  


  const sendExtractedDataToServer = async (extractedData : any) => {
    try {
      const response = await fetch('http://localhost:3001/api/extracted-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(extractedData)
      });

      if (response.ok) {
        console.log('Dados extraídos enviados com sucesso');
        
        // Aguarda a conversão da resposta para JSON
        const dados = await response.json(); 
        return dados;

      } else {
        console.log('Erro ao enviar dados extraídos');
      }
      
    } catch (error) {
      console.error('Erro ao enviar dados extraídos:', error);
    }
  }
  
  const handleExtractData = async () => {
    try {
      const combinedData = null;

      
  
      // Send the combined data to the server
      const dados = await sendExtractedDataToServer(combinedData);
      console.log('Dados:', dados);
      
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: dados.ai_response, //dados
          sender: "bot",
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages((prev: any) => [...prev, botResponse]);
      }, 1000);



    } catch (error) {
      console.error('Erro ao extrair dados:', error);
    }
  };


  return (
    <>
      <Chat messages={messages} setMessages={setMessages} />
      <div className="card">
        <button onClick={handleExtractData}>
          Extrair Dados
        </button>

      </div>
    </>
  );
}

export default App;
import { useState } from 'react';
import './App.css';
import Chat from './modules/Chat/chat';



function App() {
  const [anamneseData, setAnamneseData] = useState('');


  
  const [exameFData, setExameFData] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Como posso ajudar?", sender: "bot", timestamp: new Date().toLocaleTimeString() },
  ]);



  const sendExtractedDataToServer = async (extractedData: any) => {
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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      margin: '0 auto',
      height: '100vh',
      gap: '500px'
    }}>
      <div style={{
         display: 'flex',
         flexDirection: 'row', // Corrigido o uso de 'flex-row'
         width: '90%',
         margin: '0 auto',
         gap: '400px',
         alignItems: 'flex-start', // Garante que os itens fiquem no topo
        

      }}>

        <div style={{
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0px',
          flexBasis: '0%', 
          flexShrink: 0, 
          alignItems: 'flex-start', 
          flexGrow: 0, // Impede que cresça
          minHeight: '200px', // Define um tamanho mínimo
          
        }}>
          <label style={{ display: 'inline-block' , textAlign: 'left' ,width: '100%' ,
            whiteSpace: 'nowrap' }} >Anamnese</label>
            <textarea
            placeholder="Digite a Anamnese"
            value={anamneseData}
            onChange={(e) => setAnamneseData(e.target.value)}
            style={{
              width: '300%', height: '200px', boxSizing: 'border-box',
              resize: 'none',
            }}
            />

          
          <label style={{ display: 'inline-block' , textAlign: 'left' ,width: '100%' ,
            whiteSpace: 'nowrap' }}>Detalhes do Exame Físico</label>
          <textarea
            placeholder="Digite o exame físico"
            value={exameFData}
            onChange={(e) => setExameFData(e.target.value)}
            style={{
              width: '300%', height: '200px', boxSizing: 'border-box',
              resize: 'none',
            }}
            
          />
           
          
         
        </div>
        

        <div >
          <label>Peso</label>
          <input type="text" placeholder="" />

          <label>Altura</label>
          <input type="text" placeholder="" />

          <label>Temperatura</label>
          <input type="text" placeholder="" />

          <label>Frequência Respiratória</label>
          <input type="text" placeholder="" />

          <label>Frequência Cardíaca</label>
          <input type="text" placeholder="" />

          <label>PA Sistólica</label>
          <input type="text" placeholder="" />

          <label>PA Diastólica</label>
          <input type="text" placeholder="" />

        </div>





        <div>
        </div>




      </div>


      <div style={{ flexBasis: '45%', flexShrink: 0 }}>
        <Chat messages={messages} setMessages={setMessages} />
        <button onClick={handleExtractData} style={{ marginTop: '10px' }}>
          Extrair Dados
        </button>
      </div>
    </div>
  );




}

export default App;
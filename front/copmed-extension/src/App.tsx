import { useState } from 'react';
import './App.css';
import Chat from './modules/Chat/chat';



function App() {
  const [anamneseData, setAnamneseData] = useState('');



  const [exameFData, setExameFData] = useState('');
  const [conclusaoData, setConclusaoData] = useState('');
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

    <div>

      <div
        style={{
          width: '50%',        // Define a largura como 50% da tela
          height: '100vh',     // Garante que ocupe 100% da altura da tela
          position: 'absolute', // Faz com que a div ocupe a metade esquerda da tela
          left: 0,
          padding: '20px',
          boxSizing: 'border-box', // Garante que o padding não afete a largura
          top: 50,
          overflow: 'hidden',
          display: 'flex',


        }}
      >
        <div>
          
        <div
          style={{
            width: '50%',          
            position: 'relative',

          }}>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
              flexBasis: '0%',
              flexShrink: 0,
              alignItems: 'flex-start',
              flexGrow: 0, // Impede que cresça
              minHeight: '0',
            }}
          >
            <label>Nome: </label>
            <input type="text" placeholder=""
              style={{
                width: '80%',
                boxSizing: 'border-box',
                marginTop: '0px',
                marginBottom: '',
                position: 'relative',
              }} />

            <label>Data: </label>
            <input type="text" placeholder=""
              style={{
                width: '80%',
                boxSizing: 'border-box',
                marginTop: '0px',
                marginBottom: '30px',
                position: 'relative',
              }} />
          </div>

          <label
            style={{
              display: 'inline-block',
              textAlign: 'left',
              width: '100%',
            }}
          >
            Anamnese

          </label>
          <textarea
            placeholder="Digite a Anamnese"
            value={anamneseData}
            onChange={(e) => setAnamneseData(e.target.value)}
            style={{
              width: '100%',
              height: '100px',
              boxSizing: 'border-box', // Garante que o padding não afete a largura
              resize: 'none',
              left: 0,
            }}
          />

          <label style={{
            display: 'inline-block', textAlign: 'left', width: '100%',
            whiteSpace: 'nowrap'
          }}>Detalhes do Exame Físico</label>
          <textarea
            placeholder="Digite o exame físico"
            value={exameFData}
            onChange={(e) => setExameFData(e.target.value)}
            style={{
              width: '100%', height: '100px', boxSizing: 'border-box',
              resize: 'none',
            }}

          />
        </div>


        <div
          style={{
            width: '50%',
            position: 'absolute',
            right: -50,              // Posiciona a div à direita
            top: 0,                // Garante que o conteúdo comece do topo
            padding: '20px',
            boxSizing: 'border-box', // Garante que o padding não afete a largura
            overflow: 'hidden',
          }}
        >

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
              flexBasis: '0%',
              flexShrink: 0,
              alignItems: 'flex-start',
              flexGrow: 0, // Impede que cresça
              minHeight: '200px', // Define um tamanho mínimo
            }}
          >
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
        </div>


        <div style={{
          
          position : 'relative',
          width: '100%',
          margin: '0 auto',
          top: 20,
          
          
        }}>
          <label style={
            {
              textAlign: 'left', width: '100%',
              height: '100vh',

            }}>Conclusão Diagnóstica</label>
          <textarea
            placeholder="Digite a conclusão"
            value={conclusaoData}
            onChange={(e) => setConclusaoData(e.target.value)}
            style={{
              width: '150%', height: '100px', boxSizing: 'border-box',
              resize: 'none',

            }}

          />
        </div>
        </div>
      </div>


      <div
        style={{
          width: '50%',          // Define a largura como 50% da tela
          height: '100vh',       // Garante que ocupe 100% da altura da tela
          position: 'absolute',  // Faz com que a div ocupe a metade direita da tela
          right: 30,              // Posiciona a div à direita
          top: 20,                // Garante que o conteúdo comece do topo
          padding: '20px',
          boxSizing: 'border-box', // Garante que o padding não afete a largura
          overflow: 'hidden',     // Impede que o conteúdo ultrapasse os limites da div
        }}
      >
        <div>
          <Chat messages={messages} setMessages={setMessages} />
          <button onClick={handleExtractData} style={{ marginTop: '10px' }}>
            Extrair Dados
          </button>
        </div>
      </div>


      


    </div>

  );




}

export default App;
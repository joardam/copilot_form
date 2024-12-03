import { useState } from 'react';
import './App.css';
import Form from './pages/Form/Form';
import Ods from './pages/Ods';
import Consultas from './pages/Consultas';

function App() {
  const [currentButton, setCurrentButton] = useState(0);

  const handleChangeButton = async (index: number) => {
    // Se já estamos na página atual, não faz nada
    if (index === currentButton) return;

    // Se estamos na página "Nova Consulta" e tentamos sair
    if (currentButton === 0) {
      const confirmChange = window.confirm(
        "Você tem certeza de que deseja sair da página 'Nova Consulta'? Alterações não salvas serão perdidas."
      );

      // Se o usuário não confirma, sai da função
      if (!confirmChange) return;
    }

    // Atualiza o botão atual
    setCurrentButton(index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <div
          style={{
            gap: '15px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button onClick={() => handleChangeButton(0)}>Nova Consulta</button>
          <button onClick={() => handleChangeButton(1)}>Consultas</button>
          <button onClick={() => handleChangeButton(2)}>ODS</button>
        </div>

        <div>
          {currentButton === 0 && <Form />}
          {currentButton === 2 && <Ods/>}
          {currentButton === 1 && <Consultas/>}

        </div>
      </div>
    </div>
  );
}

export default App;

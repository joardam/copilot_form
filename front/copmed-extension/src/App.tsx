import './App.css';
import Form from './pages/Form/Form';


function App() {
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
        <button>Nova Consulta</button>
        <button>Consultas</button>
        <button>ODS</button>
        </div>

        <div>
        <Form />
        </div>
      </div>
    </div>
  );
}


export default App;
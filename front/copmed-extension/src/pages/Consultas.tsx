import React from 'react';

const Consultas: React.FC = () => {
    // Lista de itens
    const consultas = [
        "Consulta 1",
        "Consulta 2",
        "Consulta 3",
        "Consulta 4",
    ];

    // Função chamada ao clicar em um botão
    const handleClick = (consulta: string) => {
        alert(`Você clicou em: ${consulta}`);
    };

    return (
        <div>
            <h1>Consultas Page</h1>
            <div>
                {consultas.map((consulta, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(consulta)}
                        style={{
                            margin: '10px 0',
                            padding: '10px 15px',
                            backgroundColor: '#007BFF',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            width: '100%', // Faz os botões ocuparem toda a largura disponível
                            textAlign: 'left', // Alinha o texto à esquerda (opcional)
                        }}
                    >
                        {consulta}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Consultas;

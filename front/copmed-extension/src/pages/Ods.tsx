import React from 'react';

const Ods: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '0 auto', maxWidth: '900px', padding: '20px', color: '#333' }}>
            <header style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ color: '#2c3e50' }}>Objetivos de Desenvolvimento Sustentável (ODS)</h1>
                <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>
                    Entenda os desafios e metas para transformar nosso mundo.
                </p>
            </header>

            <section style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#27ae60', borderBottom: '2px solid #27ae60', paddingBottom: '5px' }}>O que são as ODS?</h2>
                <p style={{ color: '#7f8c8d' }}>
                    Os 17 Objetivos de Desenvolvimento Sustentável (ODS) foram estabelecidos pela Organização das Nações Unidas (ONU) em 2015 e compõem 
                    uma agenda mundial para a construção e implementação de políticas públicas que visam guiar a humanidade até 2030 em como enfrentar desafios 
                    sociais, econômicos e ambientais.
                </p>
                <p style={{ color: '#7f8c8d' }}>
                    A agenda contempla um plano de ação internacional para o alcance dos 17 ODS, desdobrados em 169 metas, que abordam diversos temas fundamentais 
                    para o desenvolvimento humano, em cinco perspectivas: pessoas, planeta, prosperidade, parceria e paz.
                </p>
            </section>

            <section style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#3498db', borderBottom: '2px solid #3498db', paddingBottom: '5px' }}>Sobre a ODS 3</h2>
                <p style={{ color: '#7f8c8d' }}>
                    Nessa Agenda, o ODS 3 (Saúde e Bem Estar) tem como foco Saúde de Qualidade, visando “assegurar uma vida saudável e promover o bem-estar 
                    para todos, em todas as idades”. Segundo a Organização Mundial da Saúde (OMS), saúde é definida como um estado de completo bem-estar físico, 
                    mental e social e não somente ausência de afecções e enfermidades.
                </p>
                <p style={{ color: '#7f8c8d' }}>
                    Foram previstas nove metas para o ODS 3, baseadas na redução da mortalidade materna, no fim das mortes infantis evitáveis, no combate às epidemias, 
                    e no necessário acesso aos sistemas de saúde.
                </p>
            </section>

            <section style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#e67e22', borderBottom: '2px solid #e67e22', paddingBottom: '5px' }}>ODS 3 no contexto brasileiro</h2>
                <p style={{ color: '#7f8c8d' }}>
                    O Brasil enfrenta desafios como desigualdade no acesso aos serviços de saúde, infraestrutura limitada em regiões específicas e altos índices de 
                    violência urbana. Embora o Sistema Único de Saúde (SUS) seja universal, ele frequentemente é sobrecarregado e sofre de desigualdades regionais.
                </p>
                <p style={{ color: '#7f8c8d' }}>
                    Questões como saneamento básico, saúde mental, e a nutrição também são prioritárias. Políticas públicas sólidas e coordenadas são essenciais para 
                    o cumprimento das metas desse ODS.
                </p>
            </section>

            <section>
                <h2 style={{ color: '#c0392b', borderBottom: '2px solid #c0392b', paddingBottom: '5px' }}>Erros de diagnóstico</h2>
                <p style={{ color: '#7f8c8d' }}>
                    Falhas no diagnóstico são a principal causa de prejuízos a pacientes no mundo todo, representando 16% dos danos evitáveis, segundo a OMS. No Brasil, 
                    erros médicos causam cerca de 55 mil mortes por ano, com destaque para incidentes relacionados a diagnóstico, medicação equivocada e problemas de 
                    comunicação entre equipes médicas.
                </p>
                <p style={{ color: '#7f8c8d' }}>
                    A inteligência artificial (IA) tem demonstrado potencial para mitigar esses erros. Tecnologias avançadas, como GPT-4, mostram precisão diagnóstica 
                    superior em muitos casos, podendo oferecer segundas opiniões e reduzir significativamente eventos adversos.
                </p>
            </section>

            <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px 0', backgroundColor: '#ecf0f1', color: '#7f8c8d', borderTop: '1px solid #bdc3c7' }}>
                <p>
                    &copy; 2024 - Informações baseadas na agenda da ONU e em estudos nacionais. Promovendo consciência para um futuro sustentável.
                </p>
            </footer>
        </div>
    );
};

export default Ods;

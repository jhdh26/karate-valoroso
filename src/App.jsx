import './App.css'

import { Header } from './components/Header'
import { Card } from './components/Card';

import { MdSchool } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { SiValorant } from "react-icons/si";
import { GiChampions } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import fluyr from './assets/fluyr.png'

function App() {

  return (
    <div className="main-app">
      <div className="top-page">
        <Header />
        <div className="first-card">
          <div className="left-first-card">
            <div className="left-card">
              <h1 style={{ color: '#fff', fontSize: '60px', lineHeight: '1', paddingTop: '20px' }}>SUA <span style={{ color: '#EF5D60', fontSize: '60px' }}>GAMEPLAY</span></h1>
              <h1 style={{ color: '#fff', fontSize: '45px', lineHeight: '1' }}>PODE MELHORAR</h1>
              <h1 style={{ color: '#EF5D60', fontSize: '80px', lineHeight: '1' }}>RELAXA!</h1>
              <p style={{ color: '#fff', fontSize: '20px', paddingTop: '40px', margin: '30px' }}>Atraves de treinamentos personalizados, acompanhamento individual de performance e criação de uma comunidade focada no aprendizado, o KARATÊ VALOROSO oferece o suporte que você precisa para evoluir.
              </p>
            </div>
          </div>
          <div className="right-first-card">

          </div>
        </div>
      </div>
      <div className="second-container">
        <h1 style={{ color: '#EF5D60', fontSize: '35px' }}>O CAMINHO ATÉ O TOPO DO VALORANT EXIGE MUITA RESILIÊNCIA E DISCIPLINA.</h1>
        <h1 style={{ color: '#fff', fontSize: '20px' }}>O QUE É O <span style={{ color: '#f2ad3d', fontSize: '40px' }}>KARATE VALOROSO?</span></h1>
        <h1 style={{ color: '#fff', fontSize: '25px' }}>VEJA ABAIXO ALGUNS RESULTADOS:</h1>
        <div className="card-second-container">
          <h1 style={{ color: '#F2AD3D', fontSize: '30px' }}>PRINT 1</h1>
          <h1 style={{ color: '#F2AD3D', fontSize: '30px' }}>PRINT 2</h1>
          <h1 style={{ color: '#F2AD3D', fontSize: '30px' }}>PRINT 3</h1>
        </div>
      </div>
      <div className="thirdy-container">
        <h1 style={{ color: '#fff', fontSize: '20px' }}>Ao fazer parte do <span style={{ color: '#f2ad3d', fontSize: '40px' }}>KARATÊ VALOROSO BOOTCAMP</span>, você terá:</h1>
        <div className="top-thirdy-container-cards">
          <div className="thirdy-container-cards">
            <Card
              icon={<MdSchool style={{ fontSize: '70px', color: '#EF5D60' }} />}
              h1='AULAS SEMANAIS com o SENSEI VALOROSO'
              styleH1={{ color: '#fff', fontSize: '18px', textTransform: 'uppercase', paddingTop: '10px' }}
              p=''
              styleP={{ color: '#fff', fontSize: '14px', paddingTop: '10px' }}
            />
            <Card
              icon={<ImBooks style={{ fontSize: '70px', color: '#EF5D60' }} />}
              h1='ACESSO ANUAL AS AULAS GRAVADAS'
              styleH1={{ color: '#fff', fontSize: '18px', textTransform: 'uppercase', paddingTop: '10px' }}
              p='Todo o conteudo será gravado, será adicionado constantemente conforme os novos patches'
              styleP={{ color: '#fff', fontSize: '14px', paddingTop: '10px' }}
            />
            <Card
              icon={<SiValorant style={{ fontSize: '70px', color: '#EF5D60' }} />}
              h1='FUNÇÕES'
              styleH1={{ color: '#fff', fontSize: '18px', textTransform: 'uppercase', maxLenght: '10', paddingTop: '10px' }}
              p='Aprendizado rotativo de TODAS as FUNÇÕES dos agentes de VALORANT'
              styleP={{ color: '#fff', fontSize: '14px', paddingTop: '10px' }}
            />
          </div>
        </div>
        <div className="bottom-thirdy-container-cards">
          <div className="thirdy-container-cards">
            <Card
              icon={<GiChampions style={{ fontSize: '70px', color: '#EF5D60' }} />}
              h1='CAMPEONATO EXCLUSIVO'
              styleH1={{ color: '#fff', fontSize: '18px', textTransform: 'uppercase', paddingTop: '10px' }}
              p='Campeonato EXCLUSIVO para todos os SEITOS VALOROSOS com direito a transmissão'
              styleP={{ color: '#fff', fontSize: '14px', paddingTop: '10px' }}
            />
            <Card
              icon={<FaDiscord style={{ fontSize: '70px', color: '#EF5D60' }} />}
              h1='Discord'
              styleH1={{ color: '#fff', fontSize: '18px', textTransform: 'uppercase', paddingTop: '10px' }}
              p='DISCORD EXCLUSIVO do KARATÊ VALOROSO, com oportunidade de acompanhar todas as interações e eventos para os SEITOS VALOROSOS'
              styleP={{ color: '#fff', fontSize: '14px', paddingTop: '10px' }}
            />
            <Card
              icon={<FaWhatsapp style={{ fontSize: '70px', color: '#EF5D60' }} />}
              h1='grupo whatsapp'
              styleH1={{ color: '#fff', fontSize: '18px', textTransform: 'uppercase', paddingTop: '10px' }}
              p='Grupo de WhatsApp EXCLUSIVO com os SEITOS VALOROSOS da sua Turma'
              styleP={{ color: '#fff', fontSize: '14px', paddingTop: '10px' }}
            />
          </div>
        </div>
        <button
          style={{
            width: '30vw', height: '8vh', fontSize: '24px', textTransform: 'uppercase',
            borderRadius: '8px', border: '1px solid rgb(128, 0 , 0)', backgroundColor: '#EF5D60', cursor: 'pointer', marginTop: '30px'
          }}>Inscreva-se no <span>KARATE VALOROSO</span></button>
      </div>
      <div className="quarter-container">
        <h1 style={{ color: '#fff', fontSize: '30px' }}>Conheça seu <span style={{ color: '#f2ad3d', fontSize: '40px' }}>SENSEI</span></h1>
        <div className="quarter-container-cards">
          <div className="left-quarter-container">
            <img src={fluyr} alt="" />
          </div>
          <div className="right-quarter-container">
            <h1 style={{color:'#ef5d60', fontSize:'40px'}}>FLUYR</h1>
            <p style={{color:'#fff', paddingTop:'30px'}}>Fluyr é o nome de usuário de Vinícius Menegatti, um jogador de esports brasileiro que atuou tanto em Counter-Strike: Global Offensive (CS
) quanto em Valorant. Ele tem uma carreira focada principalmente em Valorant, onde já fez parte de várias equipes e tem se destacado em torneios de nível nacional, como a CBVL (Campeonato Brasileiro de Valorant), além de outras competições regionais​
Antes de sua transição para Valorant, Fluyr também teve uma participação relevante no cenário competitivo de CS, jogando em times como Scroll Lock e DELIRAWOW​
.Atualmente, ele segue como coach, atualmente sendo parte do time Legacy​
</p>
          </div>
        </div>
      </div>
      <div className="fifth-container">
        
      </div>
    </div>
  )
}

export default App

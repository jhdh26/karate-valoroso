import './App.css'

import { Header } from './components/Header'

import fluyr from './assets/fluyr.png'

function App() {

  return (
    <div className="main-app">
      <div className="top-page">
        <Header />
        <div className="first-card">
          <div className="left-first-card">
            <div className="left-card">
              <h1 style={{ color: '#fff', fontSize: '60px', lineHeight: '1', paddingTop: '20px' }}>SUA <span style={{ color: 'red', fontSize: '60px' }}>GAMEPLAY</span></h1>
              <h1 style={{ color: '#fff', fontSize: '45px', lineHeight: '1' }}>PODE MELHORAR</h1>
              <h1 style={{ color: 'red', fontSize: '80px', lineHeight: '1' }}>RELAXA!</h1>
              <p style={{ color: '#fff', fontSize: '20px', paddingTop: '40px', margin: '30px' }}>Atraves de treinamentos personalizados, acompanhamento individual de performance e criação de uma comunidade focada no aprendizado, o KARATÊ VALOROSO oferece o suporte que você precisa para evoluir.
              </p>
            </div>
          </div>
          <div className="right-first-card">

          </div>
        </div>
      </div>
      <div className="second-container">
        <h1 style={{ color: 'red', fontSize: '35px' }}>O CAMINHO ATÉ O TOPO DO VALORANT EXIGE MUITA RESILIÊNCIA E DISCIPLINA.</h1>
        <h1 style={{ color: '#fff', fontSize: '20px' }}>O QUE É O <span style={{ color: '#f2ad3d', fontSize: '40px' }}>KARATE VALOROSO?</span></h1>
        <h1 style={{ color: '#fff', fontSize: '25px' }}>VEJA ABAIXO ALGUNS RESULTADOS:</h1>
        <div className="card-second-container">
          <h1 style={{ color: '#F2AD3D', fontSize: '30px' }}>PRINT 1</h1>
          <h1 style={{ color: '#F2AD3D', fontSize: '30px' }}>PRINT 2</h1>
          <h1 style={{ color: '#F2AD3D', fontSize: '30px' }}>PRINT 3</h1>
        </div>
      </div>
      <div className="thirdy-container">

      </div>
    </div>
  )
}

export default App

import './Header.css'

import logo from '../../assets/logo.png'

export const Header = () => {
    return (
        <div className="main-header">
            <div className="header">
                <img src={logo} alt="logo" />
                <div className="header-buttons">
                    <h1 style={{ fontSize: '20px', cursor: 'pointer' }}>Home</h1>
                    <h1 style={{ fontSize: '20px', cursor: 'pointer' }}>Aprendizados</h1>
                    <h1 style={{ fontSize: '20px', cursor: 'pointer' }}>Planos</h1>
                    <button
                        style={{ width: '10vw', height: '5vh', fontSize: '16px', textTransform: 'uppercase', borderRadius: '8px', border: '1px solid rgb(128, 0 , 0)', backgroundColor: '#EF5D60', cursor: 'pointer' }}>
                        Quero Evoluir
                    </button>
                </div>
            </div>
        </div>
    )
}
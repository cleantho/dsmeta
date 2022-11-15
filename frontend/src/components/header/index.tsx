import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMETA IMAGEM" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por Cleantho</p>
                </div>
            </header>
        </>
    )
}

export default Header
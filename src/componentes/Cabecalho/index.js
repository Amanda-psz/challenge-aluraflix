import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './logo.png';
import CabecalhoLink1 from '../CabecalhoLink1';
import CabecalhoLink2 from '../CabecalhoLink2';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do AluraFlix" className={styles.logoCabecalho}></img>
            </Link>
            <nav>
                <div>
                    <CabecalhoLink1 url="./">
                        HOME
                    </CabecalhoLink1>
                </div>
                <div>
                    <CabecalhoLink2 url="./novovideo">
                        NOVO VÍDEO
                    </CabecalhoLink2>
                </div>
            </nav>
        </header>
    )
}

export default Cabecalho;
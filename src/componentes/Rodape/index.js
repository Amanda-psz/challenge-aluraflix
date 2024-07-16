import styles from './Rodape.module.css';
import logoRodape from './logo-rodape.png';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img src={logoRodape} alt="Logo do AluraFlix" className={styles.logoRodape}/>
        </footer>
    )
}

export default Rodape;
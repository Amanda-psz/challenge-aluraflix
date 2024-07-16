import styles from './Card.module.css';
import iconeDeletar from './icone-excluir.png';
import iconeEditar from './icone-editar.png';

function Card({id, titulo, capa}) {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <div className={styles.containerIcones}>
                <div>
                    <img src={iconeDeletar} alt="Deletar vídeo" className={styles.deletar}/>
                    <h3>DELETAR</h3>
                </div>
                <div>
                    <img src={iconeEditar} alt="Editar vídeo" className={styles.editar}/>
                    <h3>EDITAR</h3>
                </div>
            </div>
        </div>
    )
}

export default Card;
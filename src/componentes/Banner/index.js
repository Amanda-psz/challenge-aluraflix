import styles from './Banner.module.css';

function Banner() {
    return (
        <div className={styles.bannerFundo}>
            <div className={styles.bannerCentral}>
                <div>
                    <h1 className={styles.trilhaDestaque}>FRONT-END</h1>
                    <h2 className={styles.titulodestaque}>SEO com React</h2>
                    <p className={styles.descricaoDestaque}>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!</p>
                </div>
                <div>
                    <video></video>
                </div>
            </div>
        </div>
    )
}

export default Banner;
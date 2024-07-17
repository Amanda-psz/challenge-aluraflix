import React from 'react';
import styled from'styled-components';
import Menu from './components/Menu';
import dadosIniciais from './dados/conteudo.json'
import BannerPrincipal from './components/BannerPrincipal';
import Carousel from './components/Carousel';
import Rodape from './components/Rodape';

const AppContainer = styled.div`
    background: var(--cinza-escuro);
    padding-top: 94px;

    @media (max-width: 780px) {
        padding-top: 40px;
    }
`;

function App() {
    return (
        <AppContainer>
            <Menu />

            <BannerPrincipal 
            videoTitulo={dadosIniciais.categorias[0].videos[0].titulo}
            url={dadosIniciais.categorias[0].videos.url}
            videoDescricao={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa nesse episódio!"}
            />

            <Carousel
            ignoreFirstVideo
            categoria={dadosIniciais.categorias[0]}
            />

            <Carousel
            categoria={dadosIniciais.categorias[1]}
            />

            <Carousel
            categoria={dadosIniciais.categorias[2]}
            />

            <Carousel
            categoria={dadosIniciais.categorias[3]}
            />

            <Carousel
            categoria={dadosIniciais.categorias[4]}
            />

            <Carousel
            categoria={dadosIniciais.categorias[5]}
            />

            <Rodape />
        </AppContainer>
    )
}

export default App;
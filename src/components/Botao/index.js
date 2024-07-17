import styled from "styled-components";

const Botao = styled.button`
    color: var(--branco);
    border: 1px solid var(--branco);
    border-radius: 4px;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    transition: opacity .2s;

    &:hover,
    &:focus {
       opacity: .5;
    }

    @media (max-width: 780px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        background-color: var(--azul);
        color: var(--branco);
        outline: 0;
        border: 0;
        border-radius: 0;
    }
`;

export default Botao;
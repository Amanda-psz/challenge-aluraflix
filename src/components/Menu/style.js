import styled from 'styled-components';

export const LogoImage = styled.img`
    max-width: 160spx;

    @media (max-width: 780px) {
        max-width: 104px;
    }
`;

export const MenuContainer = styled.nav` 
    width: 100%;
    height: 94px;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5px;
    padding-right: 5px;
    background-color: var(--preto);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--azul);

    @media (max-width: 780px) {
        height: 40px;
        justify-content: center;
    }
`;
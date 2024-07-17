import styled from 'styled-components';

export const RodapeBase = styled.footer`
    background-color: var(--preto);
    border-top: 2px solid var(--azul);
    padding: 32px 16px;
    text-align: center;

    @media (max-width: 780px) {
        margin: 50px;
    }
`;
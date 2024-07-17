import styled from 'styled-components';

export const BannerPrincipalContainer = styled.section`
    height: 80vh;
    color: var(--branco);
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;

    @media (max-width: 780px) {
        height: auto;
        min-height: 50vh;
    }
`;

export const ContainerAreaContainer = styled.section`
    margin-left: 5%;
    margin-right: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 780px) {
        padding-top: 100px;
        flex-direction: column;
    }
`;

ContainerAreaContainer.Item = styled.div`
    width: 50%;
    margin-bottom: 50px;

    @media (max-width: 780px) {
        width: 100%;
    }
`;

ContainerAreaContainer.Title = styled.h2`
    font-size: 40px;
    font-weight: 300;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 32px;

    @media (max-width: 780px) {
        font-size: 32px;
        text-align: center;
    }
`;

ContainerAreaContainer.Description = styled.p`
    @media (max-width: 780px) {
        display: none;
    }
`;

export const WatchButton = styled.button`
    padding: 16px 24px;
    margin-left: auto;
    margin-right: auto;
    display: none;
    font-weight: bold;
    outline: none;
    border: 0;
    border-radius: 4px;
    color: var(--preto);
    background-color: var(--branco);
    font-size: 16px;
    cursor: pointer;

    @media (max-width: 780px) {
        display: block;
    }
`;
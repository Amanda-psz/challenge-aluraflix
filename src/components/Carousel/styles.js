import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
    color: var(--branco);
    min-height: 197px;
    margin-left: 5%;
    margin-bottom: 16px;
`;

export const Title = styled.h3`
    display: inline-block;
    font-size: 35px;
    font-weight: normal;
    line-height: 1;
    padding: 20px;
    margin-bottom: 16px;
    border-radius: 4px;

    @media (max-width) {
        font-size: 18px;
        padding: 10px;
    }
`;

export const ExtraLink = styled.a`
    margin-left: 16px;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }

    @media (max-width: 780px) {
        display: block;
        margin-bottom: 16px;
        margin-left: 0;
    }
`;

export const VideoCardList = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
    overflow-x: auto;

    li {
        margin-right: 16px;
    }
`;


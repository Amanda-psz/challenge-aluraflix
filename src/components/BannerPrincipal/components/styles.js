import styled from 'styled-components';

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 56.25%;

    @media (max-width: 780px) {
        display: none;
    }
`;

export const ResponsiveIframe = styled.iframe`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;
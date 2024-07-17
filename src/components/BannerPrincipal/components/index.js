import React from "react";
import { VideoContainer, ResponsiveIframe } from './styles';

function YouTubeIframeResponsive({ youtubeID }) {
    return (
        <VideoContainer>
            <ResponsiveIframe
                title="Titulo do Iframe"
                src={`https://www.youtube.com/embed/${youtubeID}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            />
        </VideoContainer>
    );
}

export default YouTubeIframeResponsive;
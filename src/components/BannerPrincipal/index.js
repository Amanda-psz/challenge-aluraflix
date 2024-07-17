import React from "react";
import { BannerPrincipalContainer, ContainerAreaContainer, WatchButton } from "./componentes/styles";

function getYouTubeId(youTubeID) {
    return youtubeURL
    .replace(
        /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11}).*/,
        '$1'
    )
}

export  default function BannerPrincipal({
    videoTitle,
    videoDescription,
    url,
}) {
    const youTubeID = getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`

    return (
        <BannerPrincipalContainer backgroundImage={bgUrl}>
            <ContainerAreaContainer>
                <ContainerAreaContainer.Item>
                    <ContainerAreaContainer.Title>
                        {videoTitle}
                    </ContainerAreaContainer.Title>

                    <ContainerAreaContainer.Description>
                        {videoDescription}
                    </ContainerAreaContainer.Description>
                </ContainerAreaContainer.Item>

                <ContainerAreaContainer.Item>
                    <VideoIframeResponsive
                        youtubeID={youTubeID}
                    />
                    <WatchButton>
                        Assistir
                    </WatchButton>
                </ContainerAreaContainer.Item>
            </ContainerAreaContainer>
        </BannerPrincipalContainer>
    );
}

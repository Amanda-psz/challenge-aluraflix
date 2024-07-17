import React from "react";
import { VideoCardContainer } from '././styles';

function getYouTubeId(youtubeURL) {
    return youtubeURL
    .replace(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11}).*/,
        '$1')
}

function VideoCard ({ videoTitle, videoURL, categoryColor }) {
    const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/maxresdefault.jpg`
    return (
        <VideoCardContainer
            url={image}
            href={videoURL}
            target="_blank"
            style={{ borderColor: categoryColor || 'red' }}
            title={videoTitle}
        />
    );
}

export default VideoCard;
import React from 'react';

const videoDetail = ({videos}) =>{
    if(!videos){
        return(
            <div> Loading .. </div>
        );
    }
    const videoID = videos.id.videoId;
    const url = 'https://www.youtube.com/embed/'+videoID;
    return(
        <div className = "video-detail col-md-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src = {url}></iframe>
            </div>
            <div className = "details">
                <div className = "video-title">{videos.snippet.title}</div>
                <div className = "channel-name">{videos.snippet.channelTitle}</div>
                <div className = "published-at">{videos.snippet.publishedAt}</div>
                <div className = "video-description">{videos.snippet.description}</div>
            </div>
        </div>
    );
}

export default videoDetail;
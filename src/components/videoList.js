import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props) => {

    const videoItems = props.videos.map((videos) =>{
        return(
            <VideoItem 
            onVideoSelect = {props.onVideoSelect}
            key = {videos.etag} 
            videos = {videos}/>
        );
    });

    return(
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
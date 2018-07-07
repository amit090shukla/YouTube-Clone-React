import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import _ from 'lodash';




class App  extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null 
        }
        this.videoSearch('windows 10 concept UI');
        
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term},(videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render(){
        const videoSearch = _.debounce((term) =>{this.videoSearch(term)}, 300);
        return(
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail videos = {this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos = {this.state.videos}/>
            </div>
        );
    }
    
}

ReactDOM.render(<App />, document.querySelector('.container'));

// API KEY : AIzaSyAkbBME8aWvHzyAjF8UuMbzpBCK71ZpzXc

import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

import YTSearch from 'youtube-api-search'
import { API_KEY } from '../config.json'

import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
      term: ''
    }

    this.videoSearch('surfboards') // to initialize

  }

  videoSearch(term) {
    YTSearch(
      {key: API_KEY, term: term},
      (videos) => {
        this.setState({
          videos:videos,
          selectedVideo: videos[0]
        })
      }
    )
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'))

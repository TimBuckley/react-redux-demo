import React from 'react'
import ReactDOM from 'react-dom'

import YTSearch from 'youtube-api-search'

import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

// const API_KEY = process.env.YOUTUBE_API_KEY

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
      term: ''
    }

    YTSearch(
      {key: API_KEY, term: 'surfboards'},
      (videos) => {
        this.setState({
          videos:videos,
          selectedVideo: videos[0]
        })
      }
    )
  }

  render() {
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'))

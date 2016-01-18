import React from 'react'

import VideoListItem from './video-list-item'

const VideoList = (props) => {
  const videoItems = props.videos.map((v) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={v.etag}
        video={v}/>
    )
  })
  const onVideoSelect = props.onVideoSelect
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList
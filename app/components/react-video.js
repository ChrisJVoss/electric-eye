import React from 'react'

export default class WebCam extends React.Component {
  media() {
    navigator.mediaDevices.getUserMedia({
    video: {
      width: 1280,
      height: 720
    },
    audio: false
    })
    .then(function(stream) {
      const video = document.getElementById('video')
      video.src = window.URL.createObjectURL(stream)
      video.play()
    }).catch(function(err) {
      console.log(err)
    })
  }
  render() {
    return (
      <video className="video" id="video">
        {
          this.media()
        }
      </video>
    )
  }
}

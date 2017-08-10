import React from 'react'

export default class WebCam extends React.Component {
  media() {
    navigator.mediaDevices.getUserMedia({
    video: true,
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
      <video id="video" width="600" height="450">
        {
          this.media()
        }
      </video>
    )
  }
}

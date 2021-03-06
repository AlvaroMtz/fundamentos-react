import React, { Component } from 'react';

class Video extends Component {
    togglePlay(){
        if(this.props.pause){
            this.video.play()
        } else {
            this.video.pause()
        }

    }
    componentWillReceiveProps(nextProps){
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay();
        }
    }
    setRef = element =>{
        this.video = element;
    }
    render(){
        const {
            handleLoadedMetadata,
            handleTimeUpdate
        } = this.props;
        return (
        <video 
            autoPlay={this.props.autoplay}
            src={this.props.src} 
            ref = {this.setRef}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
        />
        )
    }
}

export default Video;
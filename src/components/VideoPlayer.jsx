import React, { useState } from 'react'
import { useRef } from 'react';
import videoPlayer from '../assets/videos/Maps101-landing-page-Video.mp4'

import playButton from '../assets/image/ic-play.svg'
import pauseButton from '../assets/image/ic_pause.svg'
import speaker from '../assets/image/icon-speaker.svg'

function VideoPlayer() {
    const [isPlay, setIsPlay] = useState(false)
    const videoRef = useRef(null);
    const handlePlay = () => {
        setIsPlay(!isPlay)
        { isPlay ? videoRef.current.pause() : videoRef.current.play() }
    }

    const newFunc = () => {
        return (
            <>
                <img src={playButton} />
            </>
        )
        console.log("play")

    }

    const newFuncPlay = () => {
        return (
            <>
                <img src={pauseButton} />
            </>
        )
        console.log("pause")

    }


    // const handlePausePlay = () => {
    //     console.log("hugyf")
    // }

    return (
        <div style={{ marginTop: '100px' }}>
            {/* <div>
                <button onClick={handlePlay}> Play </button>
                <br /> <br />
                <button onClick={handlePause}> pause </button>
            </div> */}
            <video onClick={handlePlay} width='520px' height='240px' ref={videoRef}
            >
                <source src={videoPlayer} />
            </video>
            <div>  { isPlay ? newFunc() : newFuncPlay() }</div>
            {/* <img src={pauseButton} /> */}
            {/* <div style={{ width: '520px', height: '240px', background: 'red' }}>
                hello
            </div> */}
        </div>
    )
}

export default VideoPlayer

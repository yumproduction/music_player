import React, { useRef } from 'react';
import Slider from "react-slick";
import './../../scss/components/slider.scss'
import classes from './../../scss/components/albums.module.scss';
import Music from './Music';
import { useState } from 'react';
import Listening from './Listening';

const Albums = (props) => {

    const audio = useRef('audio_tag');

    let [listening, setListening] = useState(false);
    let [duration, setDuration] = useState(0);
    let [curr, setCurr] = useState(0);


    const toggle = () => {
        setDuration(audio.current.duration)
        if (audio.current.paused) {
            audio.current.play();
        } else {
            audio.current.pause();
        }
    }
    const handleProgress = (e) => {
        let compute = (e.target.value * duration) / 100;
        setCurr(compute);
        audio.current.currentTime = compute
    }
    let checkScreen = () => {
        let slide;
        window.innerWidth <= 540 ? slide = true : slide = false
        window.addEventListener('resize', () => {
            window.innerWidth <= 540 ? slide = true : slide = false
        })
        return slide;
    }

    let albums = props.music.albums.map((a, index) => <div key={`${a}_${index}`} className='slider_item'>
        <img src={a.img} alt="" />
        <img src={a.img} className='backPhoto' alt="" />
    </div>)
    return <div>
        {props.listeningPage &&
            <div className={classes.listeningMusic}>
                <Listening audio={audio}
                    curr={curr}
                    handleProgress={handleProgress}
                    setCurr={setCurr}
                    duration={duration}
                    setDuration={setDuration}
                    toggle={toggle}
                    setListening={setListening}
                    onMusicClick={props.onMusicClick}
                    listening={listening}
                    albumMusic={props.music.music[props.state.activeSlide2]}
                    currentSlide={props.state.activeSlide2}
                    music={props.listeningMusic}
                    onListeningClick={props.onListeningClick}
                    listeningPage={props.listeningPage} />
            </div>
        }
        <audio onCanPlay={(e) => setDuration(e.target.duration)}
            onTimeUpdate={e => setCurr(e.target.currentTime)}
            ref={audio}
            src={props.listeningMusic != null && props.listeningMusic.audio}
            type='audio/mpeg'></audio>

        <div className={props.listeningPage.toString()}>
            <div className={"container " + classes.header}>
                <div></div>
                <h1>Albums</h1>
                <p>{props.state.activeSlide2 + 1}/{props.music.albums.length}</p>
            </div>

            <Slider {...props.settings(checkScreen())}>
                {albums}
            </Slider>

            <Music toggle={toggle}
                setListening={setListening}
                listening={listening}
                onButtonClick={props.onButtonClick}
                onMusicClick={props.onMusicClick}
                onListeningClick={props.onListeningClick}
                listeningPage={props.listeningPage}
                currentSlide={props.state.activeSlide2}
                listeningMusic={props.listeningMusic}
                listeningMode={props.listeningMode}
                music={props.music.music[props.state.activeSlide2]}
                album={props.music.albums[props.state.activeSlide2]} />

        </div>
    </div>



}

export default Albums;
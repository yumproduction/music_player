import React from 'react';
import './../../scss/components/slider.scss'
import SimpleBar from 'simplebar-react';
import cn from 'classnames'

import 'simplebar/src/simplebar.css';
import classes from './../../scss/components/albums.module.scss';
import Button from '../Common/Button';


const Music = (props) => {


    let music = props.music.map((m, index) => <div key={`${m}_${index}`} className={cn({
        [classes.listening]: props.currentSlide === props.listeningMusic.albumID && m.name === props.listeningMusic.name
    },
        classes.music)}>
        <div className={classes.img}
            onClick={() => {
                m.name !== props.listeningMusic.name && props.setListening(false);
                props.onMusicClick(m.img, m.name, m.singer, m.audio, true, props.currentSlide, m.id);
                props.onListeningClick();
            }}>
            <img src={m.img} alt="" />
        </div>
        <div className={classes.song}>
            <div onClick={() => {
                m.name !== props.listeningMusic.name && props.setListening(false);
                props.onMusicClick(m.img, m.name, m.singer, m.audio, true, props.currentSlide, m.id);
                props.onListeningClick()
            }}>
                <h2>{m.name}</h2>
                <p>{m.singer}</p>
            </div>

            {props.currentSlide === props.listeningMusic.albumID && m.name === props.listeningMusic.name && <div className={classes.play} >
                <div onClick={() => { props.setListening(!props.listening); props.toggle() }}><Button listeningMode={props.listening} /></div></div>}
        </div>
    </div>)
    return <div className={'container ' + classes.musics}>
        <div className={classes.all_mus}>
            <div className={classes.header_mus}>
                <h2>{props.album.name}</h2>
                <p>{props.album.amount} songs in album</p>
            </div>
            <div className={classes.audio}>
                <SimpleBar className={classes.scrorrbar}>
                    {music}
                </SimpleBar>
            </div>
        </div>
    </div>


}

export default Music;
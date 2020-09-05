import React from 'react';

import classes from './../../scss/components/listening.module.scss'

import prev from './../../assets/images/ic-previous.svg'
import next from './../../assets/images/ic-next.svg'
import Button from './../Common/Button'

const Listening = (props) => {
    return <div className={classes.music}>
        <div className={classes.back}>
            <img src={props.music.img} alt="" />
        </div>
        <div className={"container " + classes.player}>
            <div className={classes.head} onClick={() => props.onListeningClick()}>
                <pre><code>&lt;</code></pre>
            </div>
        </div>
        <div className={classes.main}>
            <div className={classes.svg}>
                <svg viewBox="-10,-10,320,320">
                    <defs>
                        <filter id="blur5"><feGaussianBlur in="SourceGraphic" stdDeviation="6" /></filter>
                        <filter id="blur4"><feGaussianBlur in="SourceGraphic" stdDeviation="4" /></filter>
                        <filter id="blur3"><feGaussianBlur in="SourceGraphic" stdDeviation="3" /></filter>
                        <filter id="blur2"><feGaussianBlur in="SourceGraphic" stdDeviation="2" /></filter>
                        <filter id="blur1"><feGaussianBlur in="SourceGraphic" stdDeviation="1" /></filter>

                        <mask id="mask50"><rect x="50" y="50" width="200" height="200" fill="white" /></mask>
                        <image id="img" width="300" height="300"
                            xlinkHref={props.music.img} />
                    </defs>


                    <use xlinkHref="#img" filter="url(#blur5)" />
                    <use xlinkHref="#img" mask="url(#mask10)" filter="url(#blur4)" />
                    <use xlinkHref="#img" mask="url(#mask20)" filter="url(#blur3)" />
                    <use xlinkHref="#img" mask="url(#mask30)" filter="url(#blur2)" />
                    <use xlinkHref="#img" mask="url(#mask40)" filter="url(#blur1)" />
                    <use xlinkHref="#img" mask="url(#mask50)" />
                </svg>
            </div>

        </div>


        <div className={classes.player}>
            <div className={classes.blur}></div>
            <div className={"container " + classes.play}>
                <h2>{props.music.name}</h2>
                <p>{props.music.singer}</p>
                <div className={classes.audio}>
                    <input onChange={props.handleProgress}
                        value={((props.curr * 100) / props.duration).toString()}
                        type="range" className='e-range' />
                </div>
                <div className={classes.buttons}>
                    <button onClick={() => {props.albumMusic[props.music.id-2] != null && props.setListening(false);
                       props.albumMusic[props.music.id - 2] != null &&  props.onMusicClick(props.albumMusic[props.music.id - 2].img, props.albumMusic[props.music.id - 2].name, props.albumMusic[props.music.id - 2].singer, props.albumMusic[props.music.id - 2].audio, true, props.currentSlide, props.albumMusic[props.music.id - 2].id)
                    }}>
                        <img className={classes.prev} src={prev} alt="" />
                    </button>
                    <div onClick={() => { props.setListening(!props.listening); props.toggle() }}
                        className={classes.playB} >
                        <Button listeningMode={props.listening} />
                    </div>
                    <button onClick={() => {props.albumMusic[props.music.id] != null && props.setListening(false);
                        props.albumMusic[props.music.id] != null && props.onMusicClick(props.albumMusic[props.music.id].img, props.albumMusic[props.music.id].name, props.albumMusic[props.music.id].singer, props.albumMusic[props.music.id].audio, true, props.currentSlide, props.albumMusic[props.music.id].id)
                    }}>
                        <img className={classes.next} src={next} alt="" />
                    </button>
                </div>
            </div>

        </div>
    </div>



}

export default Listening;
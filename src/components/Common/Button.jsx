import React from 'react';

import stop from './../../assets/images/stop-button.svg'
import play from './../../assets/images/play-button.svg'



const Button = (props) => {
    return <div className='buttons'>
        <button>
            <img src={props.listeningMode === true ? stop : play} alt="" />
        </button>
    </div>
}

export default Button;
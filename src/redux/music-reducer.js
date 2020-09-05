import first from './../assets/images/first.jpg'
import second from './../assets/images/second.jpg'
import third from './../assets/images/third.jpg'
import forth from './../assets/images/forth.jpg'
import fifth from './../assets/images/fifth.jpg'

import Mad_Love from './../assets/music/Mad_Love.mp3'
import Starting_Again from './../assets/music/Starting_Again.mp3'
import Sweetener from './../assets/music/Sweetener.mp3'
import Youngblood from './../assets/music/Youngblood.mp3'
import Golden_Hour from './../assets/music/Golden_Hour.mp3'


let initialState = {
    albums: [
        {
            id: 1,
            img: first,
            name: 'Mad Love',
            amount: 5
        },
        {
            id: 2,
            img: second,
            name: 'Mabel',
            amount: 1
        },
        {
            id: 3,
            img: third,
            name: '5SOS',
            amount: 3
        },
        {
            id: 4,
            img: forth,
            name: 'Solastalgia',
            amount: 4
        },
        {
            id: 5,
            img: fifth,
            name: 'Sweetener',
            amount: 2
        }
    ],
    music: [
        [
            {
                id: 1,
                img: first,
                name: 'Mad Love',
                singer: 'Mabel',
                audio: Mad_Love
            },
            {
                id: 2,
                img: second,
                name: 'Sweetener',
                singer: 'Ariana Grande',
                audio: Sweetener
            },
            {
                id: 3,
                img: third,
                name: 'Starting Again',
                singer: 'Missy Higgins',
                audio: Starting_Again
            },
            {
                id: 4,
                img: forth,
                name: 'Youngblood',
                singer: '5 Seconds of Summer',
                audio: Youngblood
            },
            {
                id: 5,
                img: fifth,
                name: 'Golden Hour',
                singer: 'Kacey Musgraves',
                audio: Golden_Hour
            }
        ],
        [
            {
                id: 1,
                img: first,
                name: 'Mad Love',
                singer: 'Mabel',
                audio: Mad_Love
            }
        ],
        [
            {
                id: 1,
                img: third,
                name: 'Starting Again',
                singer: 'Missy Higgins',
                audio: Starting_Again
            },
            {
                id: 2,
                img: forth,
                name: 'Youngblood',
                singer: '5 Seconds of Summer',
                audio: Youngblood
            },
            {
                id: 3,
                img: fifth,
                name: 'Golden Hour',
                singer: 'Kacey Musgraves',
                audio: Golden_Hour
            }
        ],
        [
            {
                id: 1,
                img: first,
                name: 'Mad Love',
                singer: 'Mabel',
                audio: Mad_Love
            },
            {
                id: 2,
                img: second,
                name: 'Sweetener',
                singer: 'Ariana Grande',
                audio: Sweetener
            },
            {
                id: 3,
                img: third,
                name: 'Starting Again',
                singer: 'Missy Higgins',
                audio: Starting_Again
            },
            {
                id: 4,
                img: forth,
                name: 'Youngblood',
                singer: '5 Seconds of Summer',
                audio: Youngblood
            }
        ],
        [
            {
                id: 1,
                img: first,
                name: 'Mad Love',
                singer: 'Mabel',
                audio: Mad_Love
            },
            {
                id: 2,
                img: second,
                name: 'Sweetener',
                singer: 'Ariana Grande',
                audio: Sweetener
            }
        ],
    ]
}

const musicReducer = (state = initialState, action) => {
    return state;
}


export default musicReducer;
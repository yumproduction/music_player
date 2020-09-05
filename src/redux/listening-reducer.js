// import first from './../assets/images/first.jpg'

// import Mad_Love from './../assets/music/Mad_Love.mp3'

const SET_LISTENING_MUSIC = 'music-palyer/listening/SET_LISTENING_MUSIC';
const SET_LISTENING_PAGE = 'music-palyer/listening/SET_LISTENING_PAGE';


let initialState = {
    music: {
        img: null,
        audio: null,
        name: null,
        singer: null,
        albumID: 0
    },
    listeningPage: false
}

const listeningReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LISTENING_MUSIC:
            return {
                music: {
                    img: action.img,
                    audio: action.audio,
                    name: action.name,
                    singer: action.singer,
                    albumID: action.albumID,
                    id: action.id
                },
                listeningMode: state.listeningMode,
                listeningPage: state.listeningPage

            }
        case SET_LISTENING_PAGE:
            return {
                ...state,
                listeningPage: !state.listeningPage
            }
        default:
            return state
    }
}

export const setListeningMusic = (img, name, singer, audio, listening, albumID, id) =>
    ({ type: SET_LISTENING_MUSIC, img, name, singer, audio, listening, albumID, id });//AC -> Action Creator
export const setListeningPage = () => ({ type: SET_LISTENING_PAGE });


export default listeningReducer;
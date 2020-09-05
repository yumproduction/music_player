import React from 'react';
import Albums from './Albums';
import { connect } from 'react-redux';
import { setListeningMusic, setListeningPage } from '../../redux/listening-reducer';

class AlbumsCotainer extends React.Component {
    state = {
        activeSlide: this.props.listeningMusic.albumID,
        activeSlide2: this.props.listeningMusic.albumID
    };

    onMusicClick = (img, name, singer, audio, listening, albumID, id) => {

        this.props.setListeningMusic(img, name, singer, audio, listening, albumID, id)
    }

    onListeningClick = () => {
        this.props.setListeningPage();

    }



    checkClass(e) {
        // check if e.target class has this.myClass
        if (e.currentTarget.classList.contains(' slick-center ')) {
            alert(true)
        }
        alert(false)
    }
    render() {
        let sliderSettings = (width) => {
            let settingsMob = {
                centerMode: true,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                beforeChange: (next) =>
                    this.setState({ activeSlide: next }),
                afterChange: current => this.setState({ activeSlide2: current })
            };
            let settingsScreen = {
                centerMode: true,
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                beforeChange: (next) =>
                    this.setState({ activeSlide: next }),
                afterChange: current => this.setState({ activeSlide2: current })
            };
            if (width) return settingsMob

            return settingsScreen
        }
        return this.props != null && <Albums onListeningClick={this.onListeningClick}
            listeningMusic={this.props.listeningMusic}
            listeningPage={this.props.listeningPage}
            onMusicClick={this.onMusicClick}
            state={this.state}
            checkClass={this.checkClass}
            music={this.props.music}
            settings={sliderSettings} />
    }
}

let mapStateToProps = (state) => ({
    music: state.music,
    listeningMusic: state.listening.music,
    listeningPage: state.listening.listeningPage
})


export default connect(mapStateToProps, { setListeningMusic, setListeningPage })(AlbumsCotainer);
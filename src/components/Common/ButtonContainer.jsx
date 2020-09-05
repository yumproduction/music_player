import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { setListeningMode } from '../../redux/listening-reducer';

class ButtonContainer extends React.Component {
    onButtonClick = () =>{
        this.props.setListeningMode();
    }
    render() {
        return <Button onButtonClick = {this.onButtonClick} listeningMode = {this.props.listeningMode}/>
    }
}

let mapStateToProps = (state) => {
    return {
        listeningMode: state.listening.listeningMode
    }
}

export default connect(mapStateToProps, {setListeningMode})(ButtonContainer);
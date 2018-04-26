import React, { Component } from 'react';
import square from '../assets/AnimationData/squares';
import AnimateTimer from '../Helper/AnimateTimer';
import PlayerActions from '../actions/PlayerActions';

import '../css/main.css';

export default class Player extends Component {
    componentDidMount() {
        window.addEventListener('keydown', (event) => {
            this.props.movementFunc(event.key);
            this.updateSprite();
        });
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', (event) => {
            this.props.movementFunc(event.key);
        });
    }

    updateSprite = () => {
        AnimateTimer.checkAnimate(() => {
            PlayerActions.animatePlayer();
        });
    }

    render() {
        const style = {   top: this.props.y, 
            left: this.props.x, 
            backgroundImage: square.backgroundImage, 
            width: square.width, 
            height: square.height, 
            backgroundPositionX: (square.width * (this.props.frame - 1)), 
            backgroundPositionY: 0};

        return (
            <div className="player" style={style}/>
        );
    }
}
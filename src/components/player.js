import React, { Component } from 'react';
import Assets from '../assets/AnimationData';
import AnimateTimer from '../Helper/AnimateTimer';
import PlayerActions from '../actions/PlayerActions';

import '../css/main.css';

export default class Player extends Component {
    listener;
    componentDidMount() {
        this.listener = window.addEventListener('keydown', (event) => {
            this.props.movementFunc(event.key);
            this.updateSprite();
        });
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.listener);
    }

    updateSprite = () => {
        AnimateTimer.checkAnimate(() => {
            PlayerActions.animatePlayer(this.props.name);
        }, 500);
    }

    calculateSprite = (sprite) => {
        const result = {};
        
        result.y = sprite.startingPoint.top;
        result.x = sprite.startingPoint.left - (sprite.width * (this.props.frame - 1));
        return result; 
    }

    render() {
        const playerSprite = Assets[this.props.name][this.props.direction];
        const spritePos = this.calculateSprite(playerSprite);
        const style = {   top: this.props.y, 
            left: this.props.x, 
            backgroundImage: playerSprite.backgroundImage, 
            width: playerSprite.width, 
            height: playerSprite.height, 
            backgroundPositionX: spritePos.x, 
            backgroundPositionY: spritePos.y};

        return (
            <div className="player" style={style}/>
        );
    }
}
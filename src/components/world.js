import React, { Component } from 'react';
import Player from './Player';
import PlayerStore from '../stores/PlayerStore';
import PlayerActions from '../actions/PlayerActions';
import {Container} from 'flux/utils';

import '../css/main.css'

class World extends Component {
    static getStores() {
        return [PlayerStore];
    }

    static calculateState(prevState) {
        return {
            ...PlayerStore.getState(),
        };
    }
    
    playerMove = (key) => {
        switch(key){
            case 'w': 
                PlayerActions.move('up');
                break;
            case 'a':
                PlayerActions.move('left');
                break;
            case 's':
                PlayerActions.move('down');
                break;
            case 'd':
                PlayerActions.move('right');
                break;
            default:
                break;
        }
    }

    start = () => {
        this.props.startBattle();
    }

    render() {
        return (
            <div className="world">
                <Player x={this.state.spritePosition.left} 
                        y={this.state.spritePosition.top} 
                        movementFunc={this.playerMove} 
                        frame={this.state.frame} 
                        name={'nyaru'} 
                        direction={this.state.spriteDirection}/>
                <button className="start" onClick={this.start}>Battle</button>
            </div>
        );
    }
}

export default Container.create(World);
import React, { Component } from 'react';
import Player from './player';

import '../css/main.css'

export default class World extends Component {
    constructor() {
        super()

        this.state = {
            player: {
                x: 0,
                y: 0,
            },
        };
    }
    
    playerMove = (key) => {
        switch(key){
            case 'w': 
                this.setState({...this.state, player: {...this.state.player, y: this.state.player.y - 5}});
                break;
            case 'a':
                this.setState({...this.state, player: {...this.state.player, x: this.state.player.x - 5}});
                break;
            case 's':
                this.setState({...this.state, player: {...this.state.player, y: this.state.player.y + 5}});
                break;
            case 'd':
                this.setState({...this.state, player: {...this.state.player, x: this.state.player.x + 5}});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="world">
                <Player x={this.state.player.x} y={this.state.player.y} movementFunc={this.playerMove} />
            </div>
        );
    }
}
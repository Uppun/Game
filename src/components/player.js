import React, { Component } from 'react';

import '../css/main.css';

export default class Player extends Component {

    componentDidMount() {
        window.addEventListener('keydown', (event) => {
            this.props.movementFunc(event.key);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', (event) => {
            this.props.movementFunc(event.key);
        });
    }

    render() {
        return (
            <div className="player" style={{top: this.props.y, left: this.props.x}}/>
        );
    }
}
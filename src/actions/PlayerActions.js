import ActionTypes from './ActionTypes';
import Dispatcher from '../Dispatcher';

export default {
    move(direction) {
        Dispatcher.dispatch({
            type: ActionTypes.MOVE,
            direction,
        })
    },

    animatePlayer(name) {
        Dispatcher.dispatch({
            type: ActionTypes.ANIMATEP,
            name,
        })
    }
}
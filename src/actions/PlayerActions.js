import ActionTypes from './ActionTypes';
import Dispatcher from '../Dispatcher';

export default {
    move(direction) {
        Dispatcher.dispatch({
            type: ActionTypes.MOVE,
            direction,
        })
    },

    animatePlayer() {
        Dispatcher.dispatch({
            type: ActionTypes.ANIMATEP,
        })
    }
}
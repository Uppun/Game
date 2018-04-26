import {ReduceStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import ActionTypes from '../actions/ActionTypes';
import Sprites from '../assets/AnimationData';

class PlayerStore extends ReduceStore {
    constructor() {
        super(Dispatcher)
    }

    getInitialState() {
        return {spritePosition: {top: 0, left: 0}, frame: 1};
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.MOVE: {
                switch (action.direction) {
                    case 'left': {
                        return {...state, spritePosition: {top: state.spritePosition.top, left: state.spritePosition.left - 5}};
                    }
                    case 'right': {
                        return {...state, spritePosition: {top: state.spritePosition.top, left: state.spritePosition.left + 5}};
                    }
                    case 'up': {
                        return {...state, spritePosition: {top: state.spritePosition.top - 5, left: state.spritePosition.left}};
                    }
                    case 'down': {
                        return {...state, spritePosition: {top: state.spritePosition.top + 5, left: state.spritePosition.left}};
                    }
                    default: {
                        break;
                    }
                }
                break; 
            }
            case ActionTypes.ANIMATEP: {
                if(state.frame === Sprites.squares.frames) {
                    return {...state, frame: 1};
                }

                return {...state, frame: state.frame + 1};
            }
            
            default: {
                break;
            }
        }
    }
}

export default new PlayerStore();
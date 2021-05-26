import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
    isLoading: false,
    errMess: null,
    promos: []
}, action) => {
          switch(action.type) {
                case ActionTypes.ADD_PROPMOS:
                    return {...state, isLoading: false, errMess: null, promos: action.payload};
                    
                case ActionTypes.PROMOS_LOADINFG:
                    return {...state, isLoading: true, errMess: null, promos: []}
    
                case ActionTypes.PROPMOS_FAILED:
                    return {...state, isLoading: false, errMess: action.payload, promos: []};
                
                default:
                    return state;
          }
};
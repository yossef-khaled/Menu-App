import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
       errMess: null,
       comments: []
    }, action) => {
          switch(action.type) {
                case ActionTypes.ADD_COMMENT:
                    var comment = action.payLoad;
                    comment.id = state.length;
                    comment.date = new Date().toISOString();
                    console.log(`The recently added comment is : ${comment.rating} ${comment.author} ${comment.comment}`);
                    return state.comments.concat(comment);

                case ActionTypes.ADD_COMMENTS:
                    return {...state, errmess: null, comments: action.payLoad};


                case ActionTypes.COMMENTS_FAILED:
                    return {...state, errmess: action.payLoad, comments: []};
                
                default:
                    return state;
          }
};
import { COMMENTS } from '../Shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
          switch(action.type) {
                case ActionTypes.ADD_COMMENT:
                    var comment = action.payLoad;
                    comment.id = state.length;
                    comment.date = new Date().toISOString();
                    console.log(`The recently added comment is : ${comment.rating} ${comment.author} ${comment.comment}`);
                    return state.concat(comment);

                default:
                    return state;
          }
};
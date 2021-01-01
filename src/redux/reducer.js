import { DISHES } from '../Shared/dishes';
import { COMMENTS } from '../Shared/comments';
import { LEADERS } from '../Shared/leaders';
import { PROMOTIONS } from '../Shared/promotions';

export const initialState = {
      dishes : DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      selectedDish: null
}

export const Reducer = (state = initialState, action) => {
          return state;
}
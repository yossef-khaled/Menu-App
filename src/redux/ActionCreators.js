import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../Shared/baseUrl';
import { actionTypes } from 'react-redux-form';

export const addComment = (dishId, rating, author, comment) => ({
    type : ActionTypes.ADD_COMMENT,
    payLoad : {
        dishId : dishId,
        rating : rating,
        author : author,
        comment : comment
    } 
});

export const fetchDishes = () => async (dispatch) => { 
    dispatch(dishesLoading(true));

    return fetch(`${baseUrl}dishes`)
    .then((responce) => responce.json())
    .then((data) => dispatch(addDishes(data), console.log(`At the ACTION dishes are ${JSON.stringify(data)}`)))
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes 
});


export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payLoad: comments
});

export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const fetchPromos = () => async (dispatch) => {
    dispatch(promosLoading())
    
    return fetch(`${baseUrl}promotions`)
    .then((responce) => responce.json())
    .then((data) => dispatch(addPromos(data), console.log(`at the ACTION Promos are : ${JSON.stringify(data)}`)))
};


export const fetchComments = () => async (dispatch) => {
    const responce = await fetch(`${baseUrl}comments`);
    const data = await responce.json();
    return dispatch(addComments(data));
};

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROPMOS,
    payload: promos
});

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errMess) => ({
    type: ActionTypes.PROPMOS_FAILED,
    payload: errMess
});
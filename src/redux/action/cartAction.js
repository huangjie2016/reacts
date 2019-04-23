const ADD_CART = 'ADD_CART';
const UPDATE_CART = 'UPDATE_CART';
const DELETE_CART = 'DELETE_CART';

export const addCart = (name, num, weight, id) => {
    return {
        type: ADD_CART,
        payload: {name, num, weight, id}
    }
};

export const updateCart = (name, num, weight, id) => {
    return {
        type: UPDATE_CART,
        payload: {name, num, weight, id}
    }
};

export const deleteCart = (id) => {
    return {
        type: DELETE_CART,
        payload: {id}
    }
};


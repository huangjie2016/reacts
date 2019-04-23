const initState ={
    cart: []
};

export default function(state=initState, action) {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case 'UPDATE_CART':
            return {
                ...state,
                cart: state.cart.map(el => el.id === action.payload.id ? action.payload : el)
            };
        case 'DELETE_CART':
            return {
                ...state,
                cart: state.cart.filter(el => el.id !== action.payload.id)
            };
        default:
            return state;
    }
}
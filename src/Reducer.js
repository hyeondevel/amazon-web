export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>  (basket?.reduce((previous, item) => item.price + previous, 0));

// Product.js 의 dispatch가 action이다
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
            };

        default:
            return state;
    }
}

export default reducer;
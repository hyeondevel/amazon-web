export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) =>  (basket?.reduce((previous, item) => item.price + previous, 0));

// Product.js 의 dispatch가 action이다
const reducer = (state, action) => {

    console.log(action);
    console.log(state);

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) =>
                basketItem.id === action.id
            )
            // findIndex의 한계점 : 가장 먼저 발견한 것만 return
            // redux를 이용하여 해결가능
            let newBasket = [...state.basket];

            if(index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(`(id: ${action.id})가 존재하지 않습니다.`)
            }

            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;
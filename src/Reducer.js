export const initialState = {
    basket: [],
    subtotal: 0
};

// Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                subtotal: state.subtotal + action.item.price
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((item) => item.id === action.item.id);
            let newBasket = [...state.basket];
            let newSubtotal = state.subtotal;
            if (index >= 0) {
                newBasket.splice(index, 1);
                newSubtotal -= action.item.price
            }
            return {
                ...state,
                basket: newBasket,
                Subtotal: newSubtotal
            }
        default: 
            return;
    }

};

export default reducer;
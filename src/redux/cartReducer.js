const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // Get the item's data from the products array
            const item = state.synths.find(synth => synth.id === action.payload.id)
            // Check if item is in cart already
            const inCart = state.cart.find((item) => 
                item.id === action.payload.id ? true : false
            )
            return {
                ...state,
                cart: inCart 
                    ? state.cart.map((item) => 
                        item.id === action.payload.id 
                            ? {...item, qty: item.qty + 1} 
                            : item
                        ) 
                    : [...state.cart, {...item, qty: 1}]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case "ADJUST_QTY":
            return {
                ...state,
                cart: state.cart.map((item) => 
                    item.id === action.payload.id 
                    ? {...item, qty: action.payload.qty} 
                    : item
                )
            }
        default:
            return state
    }
}

export default cartReducer
// reducers should be side-effect free, their one job is to return a hash (redux design pattern)

const initialLoginForm = {
    username: "",
    password: "",
    passConf: ""
}

const initialState = {
    id: null,
    username: null,
    signup: false,
    loginForm: initialLoginForm,
    cart: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_SIGNUP":
            return {...state, signup: !state.signup}
        case "LOGIN_FORM_CHANGE":
            return {...state, loginForm: {
                ...state.loginForm,
                // if the payload's name is "username", this will update the
                // username key in the loginForm in state with the new payload value
                [action.payload.name]: action.payload.value
            }}
        case "SET_USER":
            // overwrites initialState id and username
            return {...state, ...action.payload.user}
        case "LOGOUT":
            return {...state, id: null, username: null, loginForm: initialLoginForm}
        case "ADD_TO_CART":
            // Get the item's data from the synths array
            const item = action.payload.synths.find((synth) => synth.id === action.payload.id)
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

export default userReducer
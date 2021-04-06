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
                [action.payload.name]: action.payload.value
            }}
        case "SET_USER":
            return {...state, ...action.payload.user}
        case "LOGOUT":
            return {...state, id: null, username: null, loginForm: initialLoginForm}
        case "ADD_TO_CART":
            const item = action.payload.synths.find((synth) => synth.id === action.payload.id)
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
        default: 
            return state
    }
}

export default userReducer
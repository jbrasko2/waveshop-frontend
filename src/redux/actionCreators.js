const API = "http://localhost:7000"

// thunk allows us to return a function that takes in the argument of dispatch, instead of plain object representing the action
export const getSynths = () => {
    return dispatch => {
        fetch(API + "/synths")
        .then(res => res.json())
        .then(synthData => dispatch({
            type: "GET_SYNTHS",
            payload: synthData
        }))
    }
}

export const setSelectedSynth = id => {
    return dispatch => {
        fetch(API + "/synths/" + id)
        .then(res => res.json())
        .then(synthData => dispatch({
            type: "SET_SELECTED_SYNTH",
            payload: synthData
        }))
    }
}

export const unsetSynth = () => ({type: "UNSET_SYNTH"})

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const handleLoginFormChange = event => ({
    type: "LOGIN_FORM_CHANGE",
    // e.g. 
    // payload: {name: "username", value: "B"}
    // payload: {name: "username", value: "BA"}
    // payload: {name: "username", value: "BAT"}
    // passing to userReducer
    payload: {name: event.target.name, value: event.target.value}
})

export const sendSignup = (userData) => {
    return dispatch => {
        fetch(API + "/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.token = res.token
            dispatch({
            type: "SET_USER",
            payload: {user: res.user}
        })
    })
    }
}

export const sendLogin = (userData) => {
    return dispatch => {
        fetch(API + "/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.token = res.token
            dispatch({
            type: "SET_USER",
            payload: {user: res.user}
        })
    })
    }
}

export const autoLogin = () => {
    return dispatch => {
        fetch(API + "/autologin", {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token
            },
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
            type: "SET_USER",
            payload: {user: res.user}
        })
    })
    }
}

export const reviewFormChange = event => ({
    type: "REVIEW_FORM_CHANGE",
    payload: {name: event.target.name, value: event.target.value}
})

export const submitReview = reviewData => {
    return dispatch => {
        fetch(API + "/reviews", {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(review => dispatch({
            type: "SET_REVIEW",
            payload: review
        }))
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.clear("token")
        dispatch({type: "LOGOUT"})
    }
}

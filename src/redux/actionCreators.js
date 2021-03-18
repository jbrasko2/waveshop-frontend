const API = "http://localhost:7000"

export const favorite = () => ({type: "ADD_FAVORITE"})

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
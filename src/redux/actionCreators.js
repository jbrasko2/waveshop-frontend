const API = "http://localhost:3000"

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
const synthsReducer = (state = {
    synths: []
}, action) => {
    // console.log("In synths reducer", state)
    switch (action.type) {
        case "GET_SYNTHS":
            return {...state, synths: action.payload}
        default: 
            return state
    }
}

export default synthsReducer
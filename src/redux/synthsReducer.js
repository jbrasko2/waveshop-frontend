const synthsReducer = (state = {
    synths: [],
    selectedSynth: {
        id: null,
        name: "",
        image: "",
        price: "",
        shortDesc: "",
        longDesc: "",
        stock: ""
    }
}, action) => {
    // console.log("In synths reducer", state)
    switch (action.type) {
        case "GET_SYNTHS":
            return {...state, synths: action.payload}
        case "SET_SELECTED_SYNTH":
            return {...state, selectedSynth: action.payload}
        default: 
            return state
    }
}

export default synthsReducer
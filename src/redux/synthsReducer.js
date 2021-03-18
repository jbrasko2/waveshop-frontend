const nullSynth = {
    id: null,
    name: "",
    image: "",
    price: "",
    shortDesc: "",
    longDesc: "",
    stock: ""
}

const initialState = {
    synths: [],
    selectedSynth: nullSynth
}

const synthsReducer = (state = initialState, action) => {
    // console.log("In synths reducer", state)
    switch (action.type) {
        case "GET_SYNTHS":
            return {...state, synths: action.payload}
        case "SET_SELECTED_SYNTH":
            return {...state, selectedSynth: action.payload}
        case "UNSET_SYNTH":
            return {...state, selectedSynth: nullSynth}
        default: 
            return state
    }
}

export default synthsReducer
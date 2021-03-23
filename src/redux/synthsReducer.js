const nullSynth = {
    id: null,
    name: "",
    image: "",
    price: "",
    shortDesc: "",
    longDesc: "",
    stock: "",
    reviews: []
}

const nullReviewForm = {
    content: "",
    rating: 0
}

const initialState = {
    synths: [],
    selectedSynth: nullSynth,
    reviewForm: nullReviewForm,
    requesting: false
}

const synthsReducer = (state = initialState, action) => {
    // console.log("In synths reducer", state)
    switch (action.type) {
        case "START_GET_SYNTHS_REQUEST":
            return {...state, synths: [...state.synths], requesting: true}
        case "GET_SYNTHS":
            return {...state, synths: action.payload, requesting: false}
        case "SET_SELECTED_SYNTH":
            return {...state, selectedSynth: action.payload}
        case "UNSET_SYNTH":
            return {...state, selectedSynth: nullSynth}
        case "REVIEW_FORM_CHANGE":
            return {...state, reviewForm: {
                ...state.reviewForm,
                // if the payload's name is "content", this will update the
                // content key in the reviewForm in state with the new payload value
                [action.payload.name]: action.payload.value
            }}
        case "SET_REVIEW":
            return {
                ...state,
                selectedSynth: {
                    ...state.selectedSynth,
                    reviews: [...state.selectedSynth.reviews, action.payload]
                },
                reviewForm: nullReviewForm
            }
        case "SEARCH_SYNTHS":
            return {...state, synths: action.payload}
        default: 
            return state
    }
}

export default synthsReducer
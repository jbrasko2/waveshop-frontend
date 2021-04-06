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
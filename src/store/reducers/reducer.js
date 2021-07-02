const initialState = {
    img: null,
    degrees: 0
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_IMG':
            return {
                ...state,
                img: action.img
            }
        case 'SET_DEGREES':
            return {
                ...state,
                degrees: action.degrees
            }
        default:
            return state;
    }
}
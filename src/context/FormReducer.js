export default (state, action) => {
    switch (action) {
        case 'UPDATE_FORM':
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            }
    
        default:
            return state;
    }
}
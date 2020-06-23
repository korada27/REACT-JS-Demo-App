const contactReducer = (state={contact_value:''}, action) => {
    switch(action.type) {
        case 'INPUT_CONTACT':
            state = {
                contact_value : action.input_value
            }
            return state;
        default:
            return state;
    }
}

export default contactReducer;
import contactReducer from '../reducers/contact';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    contact_data: contactReducer
});

export default allReducers;
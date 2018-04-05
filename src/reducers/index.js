import { combineReducers } from 'redux';
import BookReducer from './BookReducer';
import ActiveBookReducer from './ActiveBookReducers';

const rootReducer = combineReducers({

    books: BookReducer,
    activeBook: ActiveBookReducer,

});

export default rootReducer;

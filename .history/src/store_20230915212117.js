import { createStore } from 'redux';
import rootReducer from './reducers'; // Replace with your rootReducer
import { state } from './state';

const store = createStore(rootReducer);

export default store
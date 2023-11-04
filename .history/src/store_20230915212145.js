import { createStore } from 'redux';
import { reducer } from './reducers/rootReducer';
import { state } from './state';

const store = createStore(rootReducer);

export default store
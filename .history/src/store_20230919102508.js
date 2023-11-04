import { createStore } from 'redux';
import { perisistStore, perisistStore } from 'redux-persist'
import { reducer } from './reducers/rootReducer';
import { state } from './state';

const store = createStore(rootReducer);

export default store
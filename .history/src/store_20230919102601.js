import { createStore } from 'redux';
import { perisistStore, perisistStore } from 'redux-persist'
import { reducer } from './reducers/rootReducer';
import storage from 'redux-persist/lib/storage';
import { state } from './state';

const persistConfig = {
    key: 'root',
    storage,
};



const store = createStore(rootReducer);

export default store
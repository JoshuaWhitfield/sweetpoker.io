import { createStore } from 'redux';
import { perisisStore } from 'redux-persist'
import { reducer } from './reducers/rootReducer';
import storage from 'redux-persist/lib/storage';
import { state } from './state';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: 'root',
    storage,
};

const persistingReducer = persistReducer(persistConfig, reducer)

const store = createStore(rootReducer);

export default store
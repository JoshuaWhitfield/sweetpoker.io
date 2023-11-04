import { createStore } from 'redux';
import { persistStore } from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer';
import { reducer } from './reducers/rootReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistingReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistingReducer);
const persistor = persistStore(store);

export default store
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer

});

const persistConfig = {
  key: 'root',
  storage, // localStorage
  blacklist: ['persist'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), 
});

export const persistor = persistStore(store);
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer
  // Ajoutez d'autres reducers ici si nécessaire
});

const persistConfig = {
  key: 'root', // La clé principale pour le stockage persistant
  storage, // Utilisez le stockage par défaut (localStorage)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer, // Assurez-vous que le nom de la clé est 'reducer'
});

export const persistor = persistStore(store);
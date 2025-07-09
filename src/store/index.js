// store.js
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import cartReducer from './cartSlice';

// Config for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Wrap the cart reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Create the store
const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

// Create the persistor object
export const persistor = persistStore(store);

export default store;

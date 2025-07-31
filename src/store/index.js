// store.js
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import cartReducer from './cartSlice';
import { allProductsApi, productByIdApi } from './productsSlice';

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
    [allProductsApi.reducerPath]: allProductsApi.reducer,
    [productByIdApi.reducerPath]: productByIdApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(allProductsApi.middleware)
      .concat(productByIdApi.middleware)
});

// Create the persistor object
export const persistor = persistStore(store);

export default store;

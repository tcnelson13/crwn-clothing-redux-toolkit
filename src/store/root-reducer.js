import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './user/user.slice';
import { categoriesReducer } from './category/category.slice';
import { cartReducer } from './cart/cart.slice';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

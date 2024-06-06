import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistConfig from './persistConfig';
import showsReducer from './slices/showsSlice';
const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  shows: showsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

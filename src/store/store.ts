import { configureStore } from '@reduxjs/toolkit';
import nameSlice from './name-slice';
import birthSlice from './birth-slice';

const store = configureStore({
  reducer: {
    name: nameSlice.reducer,
    birth: birthSlice.reducer,
  },
});

export default store;

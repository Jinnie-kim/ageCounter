import { createSlice } from '@reduxjs/toolkit';

interface BirthState {
  year: number;
  month: number;
  day: number;
}

const initialState = { year: 0, month: 0, day: 0 } as BirthState;

const birthSlice = createSlice({
  name: 'birth',
  initialState,
  reducers: {
    birthInfo(state, action) {
      state.year = action.payload.year;
      state.month = action.payload.month;
      state.day = action.payload.day;
    },
  },
});

export const birthAction = birthSlice.actions;

export default birthSlice;

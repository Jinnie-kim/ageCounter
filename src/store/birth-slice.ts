import { createSlice } from '@reduxjs/toolkit';

interface BirthState {
  year: number;
  month: number;
  day: number;
  age: number;
}

const initialState = { year: 0, month: 0, day: 0, age: 0 } as BirthState;

const birthSlice = createSlice({
  name: 'birth',
  initialState,
  reducers: {
    birthInfo(state, action) {
      state.year = action.payload.year;
      state.month = action.payload.month;
      state.day = action.payload.day;
    },
    calculateCurrentAge(state) {
      const today = new Date();
      const birthday = new Date(`${state.year}-${state.month}=${state.day}`);
      const monthDiff = today.getMonth() - birthday.getMonth();
      let age = today.getFullYear() - birthday.getFullYear();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        state.age = age--;
      }
      state.age = age;
    },
  },
});

export const birthAction = birthSlice.actions;

export default birthSlice;

import { createSlice } from '@reduxjs/toolkit';

interface BirthState {
  year: number;
  month: number;
  day: number;
  age: number;
  nextAge: number;
  nextAgeMonth: number;
  nextAgeDay: number;
}

const initialState = { year: 0, month: 0, day: 0, age: 0, nextAge: 0, nextAgeMonth: 0, nextAgeDay: 0 } as BirthState;

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
      let nextBirth;
      const birthday = new Date(`${state.year}-${state.month}-${state.day}`);
      const monthDiff = today.getMonth() - birthday.getMonth();
      let age = today.getFullYear() - birthday.getFullYear();
      let nextAgeDiffDate;
      console.log(nextAgeDiffDate);
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        state.age = age--;
        nextBirth = new Date(`${today.getFullYear()}-${state.month}-${state.day}`);
        nextAgeDiffDate = Math.abs((nextBirth.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        state.nextAge = today.getFullYear() - birthday.getFullYear();
        state.nextAgeMonth = Math.floor(nextAgeDiffDate / 30);
        state.nextAgeDay = Math.floor(nextAgeDiffDate % 30);
      } else if (monthDiff > 0 || (monthDiff === 0 && today.getDate() > birthday.getDate())) {
        state.age = age;
        nextBirth = new Date(`${today.getFullYear() + 1}-${state.month}-${state.day}`);
        nextAgeDiffDate = Math.abs((nextBirth.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        state.nextAge = nextBirth.getFullYear() - birthday.getFullYear();
        state.nextAgeMonth = Math.floor(nextAgeDiffDate / 30);
        state.nextAgeDay = Math.floor(nextAgeDiffDate % 30);
      }
      state.age = age;
    },
  },
});

export const birthAction = birthSlice.actions;

export default birthSlice;

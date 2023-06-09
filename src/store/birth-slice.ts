import { createSlice } from '@reduxjs/toolkit';

interface BirthState {
  year: number;
  month: number;
  day: number;
  age: number;
  nextAge: number;
  nextAgeMonth: number;
  nextAgeDay: number;
  nextAgeGroup: number;
  nextAgeGroupYear: number;
  nextAgeGroupMonth: number;
}

const initialState = {
  year: 0,
  month: 0,
  day: 0,
  age: 0,
  nextAge: 0,
  nextAgeMonth: 0,
  nextAgeDay: 0,
  nextAgeGroup: 0,
  nextAgeGroupYear: 0,
  nextAgeGroupMonth: 0,
} as BirthState;

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
      const birthday = new Date(`${state.year}-${state.month}-${state.day}`);
      const monthDiff = today.getMonth() - birthday.getMonth();
      let age = today.getFullYear() - birthday.getFullYear();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--;
      } else if (monthDiff > 0 || (monthDiff === 0 && today.getDate() > birthday.getDate())) {
        state.age = age;
      }
      state.age = age;
    },
    calculateNextAge(state) {
      const today = new Date();
      const birthday = new Date(`${state.year}-${state.month}-${state.day}`);
      const monthDiff = today.getMonth() - birthday.getMonth();
      let age = today.getFullYear() - birthday.getFullYear();
      let nextBirth;
      let nextAgeDiffDate;

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        nextBirth = new Date(`${today.getFullYear()}-${state.month}-${state.day}`);
        nextAgeDiffDate = Math.abs((nextBirth.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        state.nextAge = age;
        state.nextAgeMonth = Math.floor(nextAgeDiffDate / 30);
        state.nextAgeDay = Math.floor(nextAgeDiffDate % 30);
      } else if (monthDiff > 0 || (monthDiff === 0 && today.getDate() > birthday.getDate())) {
        nextBirth = new Date(`${today.getFullYear() + 1}-${state.month}-${state.day}`);
        nextAgeDiffDate = Math.abs((nextBirth.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        state.nextAge = nextBirth.getFullYear() - birthday.getFullYear();
        state.nextAgeMonth = Math.floor(nextAgeDiffDate / 30);
        state.nextAgeDay = Math.floor(nextAgeDiffDate % 30);
      }
    },
    calculateNextAgeGroup(state) {
      const today = new Date();
      const birthday = new Date(`${state.year}-${state.month}-${state.day}`);
      let age = today.getFullYear() - birthday.getFullYear();
      let nextAgeGroup = (Math.floor(age / 10) + 1) * 10;
      state.nextAgeGroup = nextAgeGroup;
      let nextAgeGroupDiff = nextAgeGroup - age;
      let nextBirth = new Date(`${today.getFullYear() + nextAgeGroupDiff}-${state.month}-${state.day}`);
      let nextAgeGroupDiffDate = Math.abs((nextBirth.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      state.nextAgeGroupYear = Math.floor(nextAgeGroupDiffDate / 30 / 12);
      state.nextAgeGroupMonth = Math.floor((nextAgeGroupDiffDate / 30) % 12);
    },
  },
});

export const birthAction = birthSlice.actions;

export default birthSlice;

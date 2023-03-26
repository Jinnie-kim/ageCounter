import { createSlice } from '@reduxjs/toolkit';

interface NameState {
  name: string;
}

const initialState = { name: '' } as NameState;

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    register(state, action) {
      const newName = action.payload;
      state.name = newName;
    },
  },
});

export const nameAction = nameSlice.actions;

export default nameSlice;

import { createSlice } from '@reduxjs/toolkit';

export const USER_INITIAL_STATE = {
  currentUser: null,
};

// createSlice creates the
// reducer, actions and action types
export const userSlice = createSlice({
  name: 'users',
  initialState: USER_INITIAL_STATE,
  reducers: {
    // this is a mutation style, but redux-toolkit
    // is managing this under the hood
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

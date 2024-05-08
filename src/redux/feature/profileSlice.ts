import { createSlice } from "@reduxjs/toolkit";

interface ProfileState {
  username: string;
  email: string;
}

const initialState = null as ProfileState | null;

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state = {
        username: action.payload.username,
        email: action.payload.email,
      };
    },
    clearProfile: (state) => {
      state = null;
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;

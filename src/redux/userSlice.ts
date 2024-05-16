import { createSlice } from "@reduxjs/toolkit";
import { UserStatus } from "../models/enums";
import { UserData } from "../models/types";

interface InitType {
	data: UserData | null,
	status: UserStatus
}
const initialState: InitType = {
  data: null,
  status: UserStatus.notAuth,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.status = UserStatus.notAuth;
    },
		startAuth: (state, _) => {
			state.status = UserStatus.loading;
		},
		succesAuth: (state, action) => {
			state.data = action.payload;
			state.status = UserStatus.success;
		},
		startRegistration: (state, _) => {
			state.status = UserStatus.loading;
		},
		failedAuth: (state) => {
			state.status = UserStatus.notAuth;
			state.data = null;
		}
  },
});

export const userReducer = userSlice.reducer;

export const { logout, startAuth, succesAuth, startRegistration, failedAuth } = userSlice.actions;

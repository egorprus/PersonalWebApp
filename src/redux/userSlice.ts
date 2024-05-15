import { createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "../models/enums";
import { UserData } from "../models/types";

interface InitType {
	data: UserData | null,
	status: FetchStatus
}
const initialState: InitType = {
  data: null,
  status: FetchStatus.init,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.status = FetchStatus.loading;
    },
		startAuth: (state, _) => {
			state.status = FetchStatus.loading;
		},
		succesAuth: (state, action) => {
			state.data = action.payload;
			state.status = FetchStatus.success;
		},
		startRegistration: (state, _) => {
			state.status = FetchStatus.loading;
		},
		failedAuth: (state) => {
			state.status = FetchStatus.error;
		}
  },
});

export const userReducer = userSlice.reducer;

export const { logout, startAuth, succesAuth, startRegistration, failedAuth } = userSlice.actions;

import { PayloadAction } from "@reduxjs/toolkit";
import { RegistrationData } from "../../pages/Registration/Registration";
import { call, put } from "redux-saga/effects";
import { failedAuth, succesAuth } from "../userSlice";
import axios from "../../axios/axios";

export function* registrationSaga(action: PayloadAction<RegistrationData>) {
	console.log(action.payload)
	try {
  const { data } = yield call(axios.post, "/register", action.payload);
  console.log(data, "register");
  yield put(succesAuth(data));
	} catch {
		yield put(failedAuth());
	}
}

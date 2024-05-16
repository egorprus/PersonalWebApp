import { PayloadAction } from "@reduxjs/toolkit";
import { succesAuth } from "../userSlice";
import { call, put } from "redux-saga/effects";
import axios from "../../axios/axios";
import { LoginData } from "../../models/types";

export function* authSaga(action: PayloadAction<LoginData>) {
  if (action.payload) {
    const { data } = yield call(axios.post, "/login", action.payload);
    yield put(succesAuth(data));
  } else {
    const { data } = yield call(axios.get, "/auth/me");
    yield put(succesAuth(data));
  }
}

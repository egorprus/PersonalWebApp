import { takeEvery } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import { registrationSaga } from "./registrationSaga";
import { fetchPostSaga } from "./fetchPostsSags";

export function* rootWatcher() {
  yield takeEvery("auth/startAuth", authSaga);
  yield takeEvery("auth/startRegistration", registrationSaga);
	yield takeEvery("posts/startFetchPosts", fetchPostSaga)
}

import { call, put } from "redux-saga/effects";
import axios from "../../axios/axios";
import { succesFetchPosts } from "../postSlice";

export function* fetchPostSaga() {
    const { data } = yield call(axios.get, "/posts");
    yield put(succesFetchPosts(data));
}

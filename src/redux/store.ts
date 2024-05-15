import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { postReducer } from "./postSlice";
import { userReducer } from "./userSlice";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./reducers/studentReducers";

export default configureStore({
  reducer: {
    student: studentReducer,
  },
});

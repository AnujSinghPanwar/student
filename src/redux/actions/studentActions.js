import { createAction } from "@reduxjs/toolkit";

export const findStudent = createAction("student/find");

export const clearStudent = createAction("student/clear");

export const createStudent = createAction("student/create");

export const deleteStudent = createAction("student/delete");

export const updateStudent = createAction("student/update");

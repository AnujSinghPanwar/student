import { createReducer } from "@reduxjs/toolkit";
import {
  clearStudent,
  createStudent,
  deleteStudent,
  findStudent,
  updateStudent,
} from "../actions/studentActions";

const initialState = {
  students: [
    {
      id: 1,
      firstName: "Anuj",
      lastName: "Panwar",
      email: "Anujpanwar@hotmail.com",
      phone: "+919891986616",
      address: "Loknayak Puram,Delhi",
    },
    {
      id: 2,
      firstName: "Deepak",
      lastName: "Verma",
      email: "Deepakverma@yahoo.co.in",
      phone: "+919910467501",
      address: "Sultal Puri,Delhi",
    },
    {
      id: 3,
      firstName: "Shiksha",
      lastName: "Phalswal",
      email: "Shiksha@gmail.com",
      phone: "+919856471566",
      address: "Delhi,India",
    },
    {
      id: 4,
      firstName: "Dheeraj",
      lastName: "Kumar",
      email: "Dheerajkr@gmail.com",
      phone: "+918447478382",
      address: "Dwarka,Delhi,India",
    },
    {
      id: 5,
      firstName: "Vimala",
      lastName: "Mehrotra",
      email: "Anamika.Ahluwalia1@hotmail.com",
      phone: "+91-704-4124157",
      address: "860 Gautama Turnpike",
    },
    {
      id: 6,
      firstName: "Chapala",
      lastName: "Tagore",
      email: "Rohan17@gmail.com",
      phone: "+91947-960-7538",
      address: "300 Chandrabhaga Knoll",
    },
    {
      id: 7,
      firstName: "Rajendra",
      lastName: "Ahuja",
      email: "Vasudeva_Tagore25@yahoo.co.in",
      phone: "+91-918-7520232",
      address: "4560 Dubashi Branch",
    },
    {
      id: 8,
      firstName: "Himadri",
      lastName: "Devar",
      email: "Amritambu_Talwar@hotmail.com",
      phone: "+919330236755",
      address: "1003 Girindra Rapids",
    },
    {
      id: 9,
      firstName: "Chandrakala",
      lastName: "Gowda",
      email: "Rajan51@gmail.com",
      phone: "+91-732-9504322",
      address: "967 Dhawan Burgs",
    },
    {
      id: 10,
      firstName: "Birjesh",
      lastName: "Embranthiri",
      email: "Bela.Sinha@yahoo.co.in",
      phone: "+91-834-5715321",
      address: "77860 Acharya Summit",
    },
    {
      id: 11,
      firstName: "Ghanaanand",
      lastName: "Tandon",
      email: "Deeksha.Varma12@hotmail.com",
      phone: "+91-709-3361753",
      address: "542 Ghanashyam Centers",
    },
    {
      id: 12,
      firstName: "Baalagopaal",
      lastName: "Verma",
      email: "Chandranath.Panicker@hotmail.com",
      phone: "+919432924857",
      address: "12208 Dwivedi Station",
    },
  ],
  student: {},
};
const studentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(findStudent, (state, action) => {
      state.student = state.students.find((std) => std.id == action.payload);
    })
    .addCase(clearStudent, (state) => {
      state.student = {};
    })
    .addCase(createStudent, (state, action) => {
      state.students = [action.payload, ...state.students];
    })
    .addCase(deleteStudent, (state, action) => {
      state.students = state.students.filter(
        (std) => std.id !== action.payload
      );
    })
    .addCase(updateStudent, (state, action) => {
      state.students = state.students.map((std) =>
        std.id == action.payload.id ? action.payload : std
      );
    });
});

export default studentReducer;

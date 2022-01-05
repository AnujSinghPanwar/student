import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStudent } from "../redux/actions/studentActions";
import { v4 as uuidv4 } from "uuid";

const AddStudent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: uuidv4(),
    },
  });

  console.log(errors);

  const onSubmit = (data) => {
    dispatch(createStudent(data));
    reset();
    history.push("/");
  };

  return (
    <div style={{ backgroundColor: "#e2e0f4", height: "93vh" }} className="App">
      <div className="container py-5">
        <div className="card border-20 shadow w-75 p-5 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-1">
              {/* <label
                className="mb-2  text-danger"
                style={{ fontWeight: "600" }}
                htmlFor="firstName"
              >
                {errors.firstName?.message}
              </label> */}
              <input
                type="text"
                className="form-control"
                id="firstame"
                placeholder="Enter Your  Name"
                {...register("firstName")}
              />
            </div>

            <div className="form-group mb-1">
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter Your  lastName"
                {...register("lastName")}
              />
            </div>

            <div className="form-group mb-1">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Your  Email"
                {...register("email")}
              />
            </div>

            <div className="form-group mb-1">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter Your  Address"
                {...register("address")}
              />
            </div>

            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Your  Contact"
                {...register("phone")}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Create New Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;

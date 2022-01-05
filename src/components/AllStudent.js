import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../redux/actions/studentActions";

const AllStudent = ({ id, firstName, lastName, email, phone, address }) => {
  // const { id, firstName, lastName, email, phone, address } = std;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteStudent(id));
  };
  return (
    <div className="col-lg- col-sm-6 col-md-4 py-2">
      <div className="card text-center">
        <Link
          to={`/student/${id}`}
          style={{
            color: "black",
            textDecoration: "none",
            fontFamily: "serif",
            fontWeight: "600",
            fontSize: "20px",
            backgroundColor: "lightgrey",
          }}
        >
          <div className="card-header">
            <i className="fab fa-affiliatetheme" />
            {`${firstName} ${lastName}`}
          </div>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{email}</h5>
          <p className="card-text">{phone}</p>
          <p className="card-text">{address}</p>
        </div>
        <div className="card-footer text-muted">
          <div className="btn-group">
            <Link to={`/editStudent/${id}`} className="btn btn-primary">
              EDIT
            </Link>
            <Link className="btn btn-danger" onClick={handleDelete}>
              DELETE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudent;

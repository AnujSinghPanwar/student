import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearStudent, findStudent } from "../redux/actions/studentActions";

const Student = ({ match }) => {
  const dataFromSelector = useSelector((state) => state.student.student);
  const { firstName, lastName, email, phone, address } = dataFromSelector;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findStudent(match.params.id));
    return ()=>{
      dispatch(clearStudent())
    }
  }, []);
  return (
    <div className="container-fluid my-5 p-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="card text-center">
            <Link
              to="/student"
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
                <Link to="/" className="btn btn-success">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;

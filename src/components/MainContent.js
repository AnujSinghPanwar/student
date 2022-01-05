import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AllStudent from "./AllStudent";

const MainContent = () => {
  const students = useSelector((state) => state.student.students);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {students.map((std, i) => (
            <AllStudent {...std} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContent;

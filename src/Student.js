import react from "react";
import { Fragment } from "react";

function Student(props) {
  return (
    <Fragment>
      <h3>Student ID: {props.id}</h3>
      <h3>Student Name: {props.name}</h3>
    </Fragment>
  );
}

export default Student;

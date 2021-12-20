import React from "react";
import StudentsTable from "../Students/StudentsTable";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const AddStudent = () => {
  const dispatch = useDispatch();

  const handleAddStudent = (params) => {};

  return (
    <div>
      <StudentsTable />
    </div>
  );
};

export default AddStudent;

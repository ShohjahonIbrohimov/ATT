import React, { useState } from "react";
import StudentsTable from "./allStudents";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../../redux/category/thunks";
import { setSelected } from "../../../redux/students/studentSlice";

const AddStudent = () => {
  const dispatch = useDispatch();
  const [addStudentLoading, setaddStudentLoading] = useState(false);
  const selectedStudents = useSelector(
    (state) => state.studentReducer.selected
  );
  const currentGroup = useSelector(
    (state) => state?.categoryReducer?.currentGroup
  );

  const onSuccess = (params) => {
    setaddStudentLoading(false);
    dispatch(setSelected([]));
  };

  const handleAddStudent = () => {
    console.log("object");
    setaddStudentLoading(true);

    dispatch(
      addStudent({
        data: {
          students: selectedStudents,
          group: currentGroup?.id,
        },
        setLoading: onSuccess,
      })
    );
  };

  return (
    <div>
      <StudentsTable />
      <Button
        loading={addStudentLoading}
        block
        type="primary"
        onClick={handleAddStudent}
        size="large"
      >
        ADD
      </Button>
    </div>
  );
};

export default AddStudent;

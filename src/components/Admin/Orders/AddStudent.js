import React, { useState } from "react";
import StudentsTable from "../Students/StudentsTable";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../../redux/category/thunks";

const AddStudent = () => {
  const dispatch = useDispatch();
  const [addStudentLoading, setaddStudentLoading] = useState(false);
  const selectedStudents = useSelector(
    (state) => state.studentReducer.selected
  );
  const currentGroup = useSelector(
    (state) => state?.categoryReducer?.currentGroup
  );

  const handleAddStudent = () => {
    setaddStudentLoading(true);
    dispatch(
      addStudent({
        data: {
          user: selectedStudents[0],
          group: currentGroup?.id,
        },
        setLoading: setaddStudentLoading,
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

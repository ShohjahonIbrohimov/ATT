import { Button } from "antd";
import React, { useState } from "react";
import TeachersTable from "./TeachersTable";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../../redux/category/thunks";
import { setSelected } from "../../../redux/students/studentSlice";

const Main = () => {
  const [addStudentLoading, setaddStudentLoading] = useState(false);
  const selectedStudents = useSelector(
    (state) => state.studentReducer.selected
  );
  const currentGroup = useSelector(
    (state) => state?.categoryReducer?.currentGroup
  );
  const dispatch = useDispatch();

  const onSuccess = (params) => {
    setaddStudentLoading(false);
    dispatch(setSelected([]));
  };

  const handleAddStudent = () => {
    setaddStudentLoading(true);
    dispatch(
      addTeacher({
        data: {
          user: selectedStudents[0],
          group: currentGroup?.id,
        },
        setLoading: onSuccess,
      })
    );
  };

  return (
    <div>
      <TeachersTable />
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

export default Main;

import { Button, Space, message } from "antd";
import React, { useState, useEffect } from "react";
import GroupStudents from "./GroupStudents";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, getGroup } from "../../../redux/category/thunks";
import {
  getTeacherStudents,
  takeAttendence,
} from "../../../redux/teachers/thunks";
import { RedoOutlined } from "@ant-design/icons";

const TakeAttendance = () => {
  const [loading, setLoading] = useState(false);
  const [takeAttendanceLoading, settakeAttendanceLoading] = useState(false);
  const currentGroup = useSelector(
    (state) => state?.categoryReducer?.currentGroup
  );
  const dispatch = useDispatch();
  const selectedStudents = useSelector(
    (state) => state.studentReducer.selected
  );

  useEffect(() => {
    handleFetchGroup();
  }, []);

  const onSuccess = () => {
    settakeAttendanceLoading(false);

    message.success("Successfully sent to parents");
  };

  const onError = () => {
    settakeAttendanceLoading(false);

    message.success("Error while sending to parents");
  };

  const onSuccessDeleteStudent = () => {
    setLoading(false);
    handleFetchGroup();
  };

  const handleFetchGroup = (params) => {
    setLoading(true);
    dispatch(getTeacherStudents({ id: currentGroup.id, setLoading }));
  };

  const deleteStudentFromGroup = (params) => {
    setLoading(true);
    dispatch(
      deleteStudent({
        data: {
          user: selectedStudents[0],
          group: currentGroup?.id,
        },
        onSuccess: onSuccessDeleteStudent,
      })
    );
  };

  const handleTakeAttendance = () => {
    settakeAttendanceLoading(true);
    dispatch(takeAttendence({ data: selectedStudents, onSuccess, onError }));
  };

  return (
    <div>
      <Button
        type="primary"
        icon={<RedoOutlined />}
        onClick={() => {
          handleFetchGroup();
        }}
      />
      <GroupStudents loading={loading} handleFetchGroup={handleFetchGroup} />
      <Button
        loading={takeAttendanceLoading}
        block
        type="primary"
        onClick={handleTakeAttendance}
        size="large"
      >
        Send
      </Button>
    </div>
  );
};

export default TakeAttendance;

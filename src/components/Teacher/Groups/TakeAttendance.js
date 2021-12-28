import { Button, message } from "antd";
import React, { useState, useEffect } from "react";
import GroupStudents from "./GroupStudents";
import { useDispatch, useSelector } from "react-redux";
import { takeAttendence } from "../../../redux/teachers/thunks";

const TakeAttendance = ({
  defaults,
  loading,
  handleFetchGroup,
  setLoading,
}) => {
  const [takeAttendanceLoading, settakeAttendanceLoading] = useState(false);
  const dispatch = useDispatch();
  const selectedStudents = useSelector(
    (state) => state.studentReducer.selected
  );

  useEffect(() => {
    handleFetchGroup();
  }, [defaults]);

  const onSuccess = () => {
    settakeAttendanceLoading(false);

    message.success("Successfully sent to parents");
  };

  const onError = () => {
    settakeAttendanceLoading(false);

    message.success("Error while sending to parents");
  };

  const handleTakeAttendance = () => {
    settakeAttendanceLoading(true);
    dispatch(takeAttendence({ data: selectedStudents, onSuccess, onError }));
  };

  return (
    <div>
      <GroupStudents loading={loading} handleFetchGroup={handleFetchGroup} />
      <Button
        loading={takeAttendanceLoading}
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

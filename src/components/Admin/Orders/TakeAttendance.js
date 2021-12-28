import { Button, Space } from "antd";
import React, { useState, useEffect } from "react";
import GroupStudents from "./GroupStudents";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, getGroup } from "../../../redux/category/thunks";
import { setSelected } from "../../../redux/students/studentSlice";
import { RedoOutlined } from "@ant-design/icons";

const TakeAttendance = () => {
  const [loading, setLoading] = useState(false);
  const [fetchGroupLoading, setfetchGroupLoading] = useState(false);
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
    setfetchGroupLoading(false);
  };

  const onSuccessDeleteStudent = () => {
    setLoading(false);
    handleFetchGroup();
  };

  const handleFetchGroup = (params) => {
    setfetchGroupLoading(true);
    dispatch(getGroup({ id: currentGroup.id, onSuccess }));
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

  const handleTakeAttendance = () => {};

  return (
    <div>
      <Button
        type="primary"
        icon={<RedoOutlined />}
        onClick={() => {
          handleFetchGroup();
        }}
      />
      <GroupStudents
        loading={fetchGroupLoading}
        handleFetchGroup={handleFetchGroup}
      />
      <Space>
        <Button
          block
          type="primary"
          onClick={deleteStudentFromGroup}
          size="large"
          danger
          loading={loading}
        >
          Delete
        </Button>
      </Space>
    </div>
  );
};

export default TakeAttendance;

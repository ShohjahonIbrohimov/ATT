import { Button, Space } from "antd";
import React from "react";
import GroupStudents from "./GroupStudents";

const TakeAttendance = () => {
  return (
    <div>
      <GroupStudents />
      <Space>
        <Button block type="primary" onClick={() => {}} size="large" danger>
          Delete
        </Button>
        <Button block type="primary" onClick={() => {}} size="large">
          Send
        </Button>
      </Space>
    </div>
  );
};

export default TakeAttendance;

import React, { useState, useEffect } from "react";
import { Table, Radio, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../../redux/students/thunks";
import { setSelected } from "../../../redux/students/studentSlice";
import { getGroup } from "../../../redux/category/thunks";

const columns = [
  {
    title: "Fullname",
    dataIndex: "name",
    render: (data, row) => (
      <a>
        {row?.first_name} {row?.last_name}
      </a>
    ),
  },
];

const GroupStudents = () => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector(
    (state) => state?.categoryReducer?.group?.students
  );
  const currentGroup = useSelector(
    (state) => state?.categoryReducer?.currentGroup
  );

  const onSuccess = () => {
    setloading(false);
  };

  useEffect(() => {
    setloading(true);
    dispatch(getGroup({ id: currentGroup.id, onSuccess }));
  }, []);

  return (
    <div>
      <Table
        size="small"
        rowKey="id"
        loading={loading}
        rowSelection={{
          onChange: (selectedRowKeys, selectedRows) => {
            dispatch(setSelected(selectedRowKeys));
          },
        }}
        columns={columns}
        dataSource={students}
      />
    </div>
  );
};

export default GroupStudents;

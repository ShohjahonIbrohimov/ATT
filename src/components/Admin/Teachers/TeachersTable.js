import React, { useState, useEffect } from "react";
import { Table, Radio, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../../redux/students/thunks";
import { setSelected } from "../../../redux/students/studentSlice";
import { getGroup } from "../../../redux/category/thunks";
import { getTeachers } from "../../../redux/teachers/thunks";

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

const TeachersTable = () => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.teacherReducer.teachers);
  const selectedStudents = useSelector(
    (state) => state.studentReducer.selected
  );

  useEffect(() => {
    if (!students.length) {
      setloading(true);
      dispatch(getTeachers(setloading));
    }
  }, []);

  return (
    <div>
      <Table
        size="small"
        rowKey="id"
        loading={loading}
        rowSelection={{
          onChange: (selectedRowKeys) => {
            dispatch(setSelected(selectedRowKeys));
          },
          selectedRowKeys: selectedStudents,
        }}
        columns={columns}
        dataSource={students}
      />
    </div>
  );
};

export default TeachersTable;

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

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: false,
    // Column configuration not to be checked
    name: record.name,
  }),
};

const StudentsTable = () => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentReducer.all);
  const [selectedKeys, setselectedKeys] = useState([]);

  useEffect(() => {
    setloading(true);
    dispatch(getStudents(setloading));
    dispatch(getGroup());
  }, []);

  return (
    <div>
      <Table
        size="small"
        rowKey="id"
        loading={loading}
        rowSelection={{
          onChange: (selectedRowKeys, selectedRows) => {
            setselectedKeys(selectedRowKeys);
            dispatch(setSelected(selectedRowKeys));
          },
        }}
        columns={columns}
        dataSource={students}
      />
    </div>
  );
};

export default StudentsTable;

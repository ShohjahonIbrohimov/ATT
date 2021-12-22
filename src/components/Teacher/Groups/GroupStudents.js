import React, { useState, useEffect } from "react";
import { Badge, Button, Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../../../redux/students/studentSlice";
import { deleteStudent, getGroup } from "../../../redux/category/thunks";

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

const GroupStudents = ({ handleFetchGroup, loading }) => {
  const dispatch = useDispatch();
  const [delloading, setLoading] = useState(false);
  const students = useSelector((state) => state?.teacherReducer?.students);
  const teachers = useSelector(
    (state) => state?.categoryReducer?.group?.teachers
  );

  const currentGroup = useSelector(
    (state) => state?.categoryReducer?.currentGroup
  );

  // const handleFetchGroup = (params) => {
  //   dispatch(getGroup({ id: currentGroup.id, onSuccess }));
  // };

  const onSuccessDeleteStudent = () => {
    setLoading(false);
    handleFetchGroup();
  };

  const handleDeleteTeacher = () => {
    setLoading(true);
    dispatch(
      deleteStudent({
        data: {
          user: teachers[0].id,
          group: currentGroup?.id,
        },
        onSuccess: onSuccessDeleteStudent,
      })
    );
  };

  return (
    <div>
      {/* <Badge.Ribbon
        style={{ height: "30px" }}
        text={
          teachers && teachers.length ? (
            <Space>
              <span>
                {teachers[0].first_name} {teachers[0].last_name}
              </span>
              <div style={{ height: "100%", display: "flex" }}>
                <Button
                  onClick={handleDeleteTeacher}
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                  danger
                  type="primary"
                  icon={<DeleteOutlined size={"small"} />}
                />
              </div>
            </Space>
          ) : (
            "O'qitvchi yo'q"
          )
        }
        color={"green"}
      > */}

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
      {/* </Badge.Ribbon> */}
    </div>
  );
};

export default GroupStudents;

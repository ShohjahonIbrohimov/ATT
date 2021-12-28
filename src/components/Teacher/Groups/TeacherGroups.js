import React, { useState, useEffect } from "react";
import { Table, Button, Input, Space, Modal, Col, Row, Tag } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { EyeOutlined, RedoOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentGroup } from "../../../redux/category/categorySlice";
import TakeAttendance from "./TakeAttendance";
import { getTeacher, getTeacherStudents } from "../../../redux/teachers/thunks";

const tagstyle = {
  marginRight: "2.5px",
  height: "32px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  padding: "0px 5px 0px 5px",
};

const TeacherGroups = ({ searchInput }) => {
  const [modal, setmodal] = useState(0);
  const [visible, setvisible] = useState(false);
  const [defaults, setdefaults] = useState(null);
  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");
  const [loading, setloading] = useState(false);
  const [groupStudentsLoading, setgroupStudentsLoading] = useState(false);
  const dispatch = useDispatch();
  const selectedStudents = useSelector(
    (state) => state.studentReducer.selected
  );
  const groups = useSelector((state) => state.teacherReducer.groups);
  const students = useSelector((state) => state?.teacherReducer?.students);
  const currentGroup = useSelector(
    (state) => state?.categoryReducer?.currentGroup
  );

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setsearchText(selectedKeys[0]);
              setsearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setsearchText(selectedKeys[0]);
    setsearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setsearchText("");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
      ...getColumnSearchProps("nationality"),
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      width: "10%",
      render: (data, row) => (
        <Space>
          <Button
            type="primary"
            ghost
            icon={<EyeOutlined />}
            onClick={() => {
              setmodal(1);
              handleOpenModal(row);
            }}
          />
        </Space>
      ),
    },
  ];

  const handleOpenModal = (row) => {
    dispatch(setCurrentGroup(row));
    setdefaults(row);
    setvisible(true);
  };

  useEffect(() => {
    if (!groups.length) {
      setloading(true);
      dispatch(getTeacher(setloading));
    }
  }, []);

  const handleOk = () => {
    setvisible(false);
  };

  const handleCancel = () => {
    setvisible(false);
  };

  const handleFetchGroup = (params) => {
    setgroupStudentsLoading(true);
    dispatch(
      getTeacherStudents({
        id: currentGroup.id,
        setLoading: setgroupStudentsLoading,
      })
    );
  };

  return (
    <div>
      <Modal
        className="teacher-cabinet"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        title={
          <Space>
            <span>{defaults?.name}</span>
            <div>
              <Tag style={tagstyle} color="#1890ff">
                Umumiy: &nbsp;
                {students.length}
              </Tag>
              <Tag style={tagstyle} color="#4caf50">
                {students.length - selectedStudents.length}
              </Tag>
            </div>
            <Button
              type="primary"
              icon={<RedoOutlined />}
              onClick={() => {
                handleFetchGroup();
              }}
            />
          </Space>
        }
      >
        <TakeAttendance
          handleFetchGroup={handleFetchGroup}
          loading={groupStudentsLoading}
          setloading={setgroupStudentsLoading}
          defaults={defaults}
        />
      </Modal>
      <Row justify="space-between">
        <Col>
          <Space style={{ marginBottom: "1rem" }}>
            <Button
              type="primary"
              icon={<RedoOutlined />}
              onClick={() => {
                setloading(true);
                dispatch(getTeacher(setloading));
              }}
            />
          </Space>
        </Col>
        <Col></Col>
      </Row>

      <Table columns={columns} dataSource={groups} loading={loading} />
    </div>
  );
};

export default TeacherGroups;

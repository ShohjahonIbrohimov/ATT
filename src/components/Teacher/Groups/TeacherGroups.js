import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, message, Input, Space, Modal, Col, Row } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import base_url from "../../../utils/baseurl";
import {
  PlusOutlined,
  DeleteOutlined,
  EyeOutlined,
  RedoOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import GModal from "../../Reusable/GModal";
import GForm from "../../Reusable/GForm";
import fields from "./formFields.json";
import {
  create,
  deleteCat,
  update,
  getGroup,
  getGroups,
} from "../../../redux/category/thunks";
import { useDispatch, useSelector } from "react-redux";
import AddStudent from "./AddStudent";
import { setCurrentGroup } from "../../../redux/category/categorySlice";
import TakeAttendance from "./TakeAttendance";
// import Main from "../Teachers/Main";
import { getTeacher } from "../../../redux/teachers/thunks";
import { logout } from "../../../redux/auth/authSlice";

const success = () => {
  message.success("Success");
};

const error = () => {
  message.error("Error");
};

const TeacherGroups = ({ searchInput }) => {
  const [tabValue, settabValue] = useState(0);
  const [modal, setmodal] = useState(0);
  const [orders, setorders] = useState([]);
  const [visible, setvisible] = useState(false);
  const [defaults, setdefaults] = useState(null);
  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");
  const [loading, setloading] = useState(false);
  const [addGrouploading, setaddGrouploading] = useState(false);
  const dispatch = useDispatch();

  const group = useSelector((state) => state.categoryReducer.group);
  const groups = useSelector((state) => state.teacherReducer.groups);

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

  const getOrders = () => {
    setloading(true);
    axios({
      url: `${base_url}/control_system/group/`,
      method: "GET",
    }).then((res) => {
      setloading(false);
      setorders(res.data);
      setaddGrouploading(false);
    });
  };

  const onSuccess = () => {
    setloading(false);
    setaddGrouploading(false);
  };

  useEffect(() => {
    if (!groups.length) {
      setloading(true);
      dispatch(getTeacher(setloading));
    }
  }, []);

  const handleAddCategory = (data) => {
    setaddGrouploading(true);
    dispatch(
      create({
        data: { ...data, nationality: Number(data.nationality) },
        getOrders: () => {
          dispatch(getGroups({ onSuccess }));
        },
      })
    );
  };

  const handleUpdateCategory = (data) => {
    setloading(true);
    dispatch(
      update({
        data: { ...defaults, ...data, nationality: Number(data.nationality) },
        getOrders: () => {
          dispatch(getGroups({ onSuccess }));
        },
      })
    );
  };

  const handleDeleteCategory = (data) => {
    setloading(true);
    dispatch(
      deleteCat({
        data,
        getOrders: () => {
          dispatch(getGroups({ onSuccess }));
        },
      })
    );
  };

  const handleOk = () => {
    setvisible(false);
  };

  const handleCancel = () => {
    setvisible(false);
  };

  return (
    <div>
      <Modal
        className="teacher-cabinet"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        title={defaults?.name}
      >
        <TakeAttendance defaults={defaults} />
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

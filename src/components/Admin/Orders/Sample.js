import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, message, Input, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import base_url from "../../../utils/baseurl";
import { PlusOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import GModal from "../../Reusable/GModal";
import GForm from "../../Reusable/GForm";
import fields from "./formFields.json";
import { get, create, deleteCat, update } from "../../../redux/category/thunks";
import { useDispatch, useSelector } from "react-redux";

const success = () => {
  message.success("Success");
};

const error = () => {
  message.error("Error");
};

const Sample = ({ searchInput }) => {
  const [orders, setorders] = useState([]);
  const [visible, setvisible] = useState(false);
  const [defaults, setdefaults] = useState(null);
  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");
  const dispatch = useDispatch();

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

  const handleFinishOrder = (data) => {
    axios({
      url: `http://143.244.173.104/api/orders/${data._id}`,
      method: "PATCH",
      data: {
        isFinish: "true",
      },
    })
      .then((res) => {
        success();
        getOrders();
      })
      .catch((err) => error());

    console.log(data);
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
          {" "}
          <Button onClick={() => handleDeleteCategory(row)}>Delete</Button>
          <Button onClick={() => handleOpenModal(row)}>Edit</Button>
        </Space>
      ),
    },
  ];

  const handleOpenModal = (row) => {
    setdefaults(row);
    setvisible(true);
  };

  const getOrders = () => {
    axios({
      url: `${base_url}/control_system/group/`,
      method: "GET",
    }).then((res) => setorders(res.data));
  };

  useEffect(() => {
    getOrders();
  }, []);

  const handleAddCategory = (data) => {
    dispatch(
      create({
        data: { ...data, nationality: Number(data.nationality) },
        getOrders,
      })
    );
  };

  const handleUpdateCategory = (data) => {
    console.log("UUUUUUUUUUU", defaults);
    dispatch(
      update({
        data: { ...defaults, ...data, nationality: Number(data.nationality) },
        getOrders,
      })
    );
  };

  const handleDeleteCategory = (data) => {
    dispatch(deleteCat({ data, getOrders }));
  };

  return (
    <div>
      <GModal visible={visible} setvisible={setvisible}>
        <GForm
          defaults={defaults}
          handleAddCategory={handleAddCategory}
          handleUpdateCategory={handleUpdateCategory}
          fields={fields}
        />
      </GModal>
      <Space style={{ marginBottom: "1rem" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => handleOpenModal(null)}
        >
          Add
        </Button>
      </Space>

      <Table columns={columns} dataSource={orders} />
    </div>
  );
};

export default Sample;
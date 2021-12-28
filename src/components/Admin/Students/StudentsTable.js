import React, { useState, useEffect } from "react";
import { Table, Button, Input, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Highlighter from "react-highlight-words";
import { getAttendanceList } from "../../../redux/category/thunks";
import { SearchOutlined } from "@ant-design/icons";

const StudentsTable = ({ searchInput }) => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.categoryReducer.att_list);
  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");

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
      title: "To'liq ismi",
      dataIndex: "fullname",
      key: "fullname",
      ...getColumnSearchProps("fullname"),
    },
    {
      title: "Guruh turi",
      dataIndex: "nationality",
      ...getColumnSearchProps("nationality"),
    },
    {
      title: "Holati",
      dataIndex: "name",
      render: (data, row) => (
        <Tag
          color={row?.user?.use_device ? "green" : "red"}
          key={row?.user?.use_device ? "Ichkarida" : "Tashqarida"}
        >
          {row?.user?.use_device ? "Ichkarida" : "Tashqarida"}
        </Tag>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getAttendanceList(setloading));
  }, []);

  return (
    <div>
      {console.log(students)}
      <Table
        size="small"
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={students.map((st) => {
          return {
            ...st,
            fullname: `${st.user.first_name} ${st.user.last_name}`,
            nationality: `${st?.user.nationality === 1 ? "UZ" : "RU"}`,
          };
        })}
      />
    </div>
  );
};

export default StudentsTable;

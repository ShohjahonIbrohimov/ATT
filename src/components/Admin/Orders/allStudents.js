import React, { useState, useEffect } from "react";
import { Table, Button, Input, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Highlighter from "react-highlight-words";
import { getAttendanceList } from "../../../redux/category/thunks";
import { SearchOutlined, RedoOutlined } from "@ant-design/icons";
import { getStudents } from "../../../redux/students/thunks";
import { setSelected } from "../../../redux/students/studentSlice";

const StudentsTable = ({ searchInput }) => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentReducer.all);
  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");
  const selectedStudents = useSelector(
    (state) => state.studentReducer.selected
  );

  const handleFetch = () => {
    setloading(true);
    dispatch(getStudents(setloading));
  };

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
  ];

  useEffect(() => {
    if (!students.length) {
      handleFetch();
    }
  }, []);

  return (
    <div>
      <Button
        type="primary"
        icon={<RedoOutlined />}
        onClick={() => {
          handleFetch();
        }}
      />
      <Table
        size="small"
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={students.map((st) => {
          return {
            ...st,
            fullname: `${st.first_name} ${st.last_name}`,
            nationality: `${st?.nationality === 1 ? "UZ" : "RU"}`,
          };
        })}
        rowSelection={{
          onChange: (selectedRowKeys, selectedRows) => {
            dispatch(setSelected(selectedRowKeys));
          },
          selectedRowKeys: selectedStudents,
        }}
      />
    </div>
  );
};

export default StudentsTable;

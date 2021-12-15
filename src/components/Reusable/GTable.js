import React, { useState } from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const { Column } = Table;

const UsersTable = ({
  data,
  columns,
  searchInput,
  footer = "",
  handleDeleteCategory,
  setvisible,
  setdefaults,
  handleSubCategory,
  subCategory,
  table,
  type,
}) => {
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
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type='link'
            size='small'
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

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setsearchText(selectedKeys[0]);
    setsearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setsearchText("");
  };

  const handleUpdate = (data) => {
    setvisible(true);
    setdefaults(data);
  };

  return (
    <Table
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      bordered
      size='small'
      dataSource={data}
    >
      {columns.map((c) => {
        console.log(c.key, c.dataIndex, c);
        if (c.dataIndex === "lang") {
          return (
            <Column
              title={c.title}
              dataIndex={c.dataIndex}
              key={c.key}
              render={(text, data) => <span>{data?.title[c.key]}</span>}
            />
          );
        } else if (c.dataIndex === "desc") {
          return (
            <Column
              title={c.title}
              dataIndex={c.dataIndex}
              key={c.key}
              render={(text, data) => <span>{data?.desc[c.key]}</span>}
            />
          );
        } else if (c.dataIndex === "action") {
          return (
            <Column
              width='25%'
              title={c.title}
              dataIndex={c.dataIndex}
              key={c.key}
              render={(text, data, index) => (
                <Space>
                  {type !== "exactSubcategory" && (
                    <Button onClick={() => handleUpdate({ data, index })}>
                      Update
                    </Button>
                  )}
                  {type === "category" && (
                    <Button onClick={() => handleSubCategory(data)}>
                      Sub category
                    </Button>
                  )}
                  {type !== "exactSubcategory" && (
                    <Button
                      danger
                      onClick={() => handleDeleteCategory(data._id)}
                    >
                      Delete
                    </Button>
                  )}
                </Space>
              )}
            />
          );
        } else {
          return (
            <Column
              title={c.title}
              dataIndex={c.dataIndex}
              key={c.key}
              {...getColumnSearchProps(c.dataIndex)}
            />
          );
        }
      })}
    </Table>
  );
};

export default UsersTable;

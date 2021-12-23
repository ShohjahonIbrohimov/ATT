import { Avatar, Button, Menu, Space, Row, Col } from "antd";
import {
  UserOutlined,
  AppstoreOutlined,
  CheckSquareOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const history = useHistory();
  const [current, setcurrent] = useState("groups");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.authReducer.username);
  const status = useSelector((state) => state.authReducer.status);

  const handleClick = (e) => {
    history.push(`/dashboard/3/${e.key}`);
    setcurrent(e.key);
  };

  return (
    <Row align="space-between">
      <Col span={12}>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="groups" icon={<AppstoreOutlined />}>
            Guruhlar
          </Menu.Item>
          {status === 3 && (
            <Menu.Item key="att" icon={<CheckSquareOutlined />}>
              Davomat
            </Menu.Item>
          )}
        </Menu>
      </Col>
      <Col span={12}>
        <div
          style={{
            background: "#fff",
            height: "45.5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            paddingRight: "20px",
          }}
        >
          <Space>
            <Space align="baseline">
              <Avatar size="medium" icon={<UserOutlined />} />
              <h4>{username}</h4>
            </Space>
            <Button
              danger
              type="primary"
              icon={<LogoutOutlined />}
              onClick={() => {
                dispatch(logout());
              }}
            />
          </Space>
        </div>
      </Col>
    </Row>
  );
};

export default Navbar;

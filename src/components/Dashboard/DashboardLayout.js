import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styles from "../../styles/DashboardLayout.module.css";
import { Avatar } from "antd";
import { ADMIN_ROUTES, TEACHER_ROUTES } from "../../routes/routes";
import { Route, Switch, Link } from "react-router-dom";
// REDUX
import { logout } from "../../redux/auth/authSlice";
import { useSelector } from "react-redux";
import Navbar from "../Admin/Orders/Navbar";

const { Content, Sider } = Layout;

const adminMenuItems = [
  {
    title: "Guruhlar",
    icon: <AppstoreOutlined />,
    link: "/dashboard/orders",
  },
];

const DashboardLayout = () => {
  const [routes, setroutes] = useState([]);
  const status = useSelector((state) => state.authReducer.status);

  useEffect(() => {
    if (status === 2) {
      setroutes(TEACHER_ROUTES);
    } else {
      setroutes(ADMIN_ROUTES);
    }
  }, []);
  return (
    <Layout className={styles.layout}>
      {/* <Sider
        theme="dark"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className={styles.side_header}>
          <Avatar
            className={styles.avatar}
            size="medium"
            icon={<UserOutlined />}
          />
          {!collapsed && <h4 className={styles.username}>John Doe</h4>}
        </div>

        <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
          {adminMenuItems.map((item, index) => (
            <Menu.Item key={index} icon={item.icon}>
              <Link to={item.link}>{item.title}</Link>
            </Menu.Item>
          ))}
          <Menu.Item
            onClick={() => dispatch(logout())}
            key="logout"
            icon={<LogoutOutlined />}
          >
            Chiqish
          </Menu.Item>
        </Menu>
      </Sider> */}
      <Layout className="site-layout">
        <Navbar />
        <br />
        <Content className={styles.content}>
          <Switch>
            {routes.map((route) => (
              <Route {...route} />
            ))}
            {routes.length && (
              <Route>
                <div
                  style={{
                    height: "85vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ fontSize: "3rem" }}>404 Not found</h1>
                </div>
              </Route>
            )}
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

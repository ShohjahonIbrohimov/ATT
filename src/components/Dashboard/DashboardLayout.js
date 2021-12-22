import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styles from "../../styles/DashboardLayout.module.css";
import { Avatar } from "antd";
import { ADMIN_ROUTES } from "../../routes/routes";
import { Route, Switch, Link } from "react-router-dom";
// REDUX
import { logout } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const { Content, Sider } = Layout;

const adminMenuItems = [
  {
    title: "Guruhlar",
    icon: <AppstoreOutlined />,
    link: "/dashboard/orders",
  },
];

const DashboardLayout = () => {
  const [collapsed, setcollapsed] = useState(false);
  const dispatch = useDispatch();

  const onCollapse = (collapsed) => {
    setcollapsed(collapsed);
  };

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
        <Content className={styles.content}>
          <Switch>
            {ADMIN_ROUTES.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

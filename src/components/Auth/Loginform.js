import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getStatus, login } from "../../redux/auth/thunks";

const Loginform = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  const onError = (text) => {
    setloading(false);
    message.error(text);
  };

  const onSuccess = () => {
    setloading(false);
    dispatch(getStatus());
  };

  const onFinish = (data) => {
    setloading(true);
    dispatch(login({ data, onError, onSuccess }));
  };

  return (
    <Form
      size="large"
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          loading={loading}
          block
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Loginform;

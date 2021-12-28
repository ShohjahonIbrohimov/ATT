import React from "react";
import { Modal } from "antd";

const GModal = ({
  children,
  visible,
  setvisible,
  title = "Modal",
  className = "",
}) => {
  const handleOk = () => {
    setvisible(false);
  };

  const handleCancel = () => {
    setvisible(false);
  };

  return (
    <Modal
      className={className}
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default GModal;

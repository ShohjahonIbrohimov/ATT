import React from "react";
import { Modal } from "antd";

const GModal = ({ children, visible, setvisible }) => {

  const handleOk = () => {
    setvisible(false);
  };

  const handleCancel = () => {
    setvisible(false);
  };

  return (
    <Modal
      title='Basic Modal'
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

import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const Targeta = ({ url }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={url} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Servicio"
        description="Descripcion"
      />
    </Card>
  );
};

export default Targeta;

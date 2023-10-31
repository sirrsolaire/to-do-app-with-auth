import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
      color: "white",
    }}
    spin
  />
);

export const Spinner = () => {
  return <Spin indicator={antIcon} />;
};

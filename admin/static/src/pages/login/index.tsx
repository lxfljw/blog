import React, { useState, useEffect } from "react";
import { Spin, Card, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="login-wrap">
      <Spin tip="loading..." spinning={loading}>
        <Card
          className="card-wrap"
          title="博客后台管理系统"
          bordered={true}
          style={{ width: 400 }}
        >
          <Input
            value={userName}
            id="user"
            size="large"
            placeholder="请输入用户名"
            prefix={<UserOutlined />}
            style={{ color: "rgba(0,0,0,.25)" }}
            onChange={(e) => setUserName(e.target.value)}
          ></Input>
          <br />
          <br />
          <Input
            value={password}
            id="password"
            size="large"
            placeholder="请输入密码"
            prefix={<KeyOutlined />}
            style={{ color: "rgba(0,0,0,.25)" }}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></Input>
          <br />
          <br />
          <Button type="primary" size="large">
            登录
          </Button>
        </Card>
      </Spin>
    </div>
  );
}

import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  QqOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Header, Sider, Content } = Layout;

export default class LayoutComp extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const list = new Array(15).fill(1);
    const { collapsed } = this.state;
    return (
      <Layout className="layout-wrap">
        <Sider
          className="layout-sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo">
            <QqOutlined />
            {!collapsed && "博客管理后台"}
          </div>
          <Menu
            className="sider-menu"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            {list.map((_, index) => (
              <Menu.SubMenu
                key={index}
                title="子菜单选项"
                icon={<VideoCameraOutlined />}
              >
                <Menu.Item>{index}</Menu.Item>
              </Menu.SubMenu>
            ))}
          </Menu>
        </Sider>
        <Layout className="layout-content">
          <Header className="header">
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content>Content</Content>
        </Layout>
      </Layout>
    );
  }
}

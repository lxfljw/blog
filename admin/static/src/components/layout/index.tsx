import React from "react";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QqOutlined,
} from "@ant-design/icons";
import "./index.scss";
import MenuList from "./menuList";
const { Header, Sider, Content } = Layout;
import MenuGen from "@/components/menu";
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
          <MenuGen menuList={MenuList} />
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

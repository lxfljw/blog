import React from "react";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QqOutlined,
} from "@ant-design/icons";
import MenuList from "@/config/menu-list";
const { Header, Sider, Content } = Layout;
import MenuGen from "@/components/menu";
import RouterContent from "@/components/router-content";
import "./index.scss";
export default class LayoutComp extends React.Component {
  state = {
    collapsed: false,
  };
  // 测试自动化构建111
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
          <Content>
            <RouterContent />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

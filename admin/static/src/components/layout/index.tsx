import React from "react";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MenuList from "@/config/menu-list";
const { Header, Sider, Content } = Layout;
import MenuGen from "@/components/menu";
import RouterContent from "@/components/router-content";
import cs from "classnames";
import "./index.scss";
import "@/style/common.scss";

interface Iprops {
  // TODO:枚举主题类型
  theme: string;
}
export default class LayoutComp extends React.Component {
  state = {
    collapsed: false,
  };
  props: Iprops = {
    theme: "dark",
  };
  // 测试自动化构建111
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { collapsed } = this.state;
    const { theme } = this.props;
    return (
      <Layout className="layout-wrap">
        <Sider
          className={cs("layout-sider", theme)}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo">
            <UserOutlined />
            {!collapsed && "博客管理后台"}
          </div>
          <MenuGen menuList={MenuList} />
        </Sider>
        <Layout className="layout-content">
          <Header className={cs("header", theme)}>
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

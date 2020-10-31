import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
import { IMenuItem } from "@/config/menu-list";
import { HashRouter as Router, Link } from "react-router-dom";
import "./index.scss";
interface IProps {
  menuList: IMenuItem[];
}
/**
 * 递归实现菜单栏
 * @param props
 */
export default function MenuGen(props: IProps) {
  const { menuList } = props;
  const renderTreeNode = (menuList: IMenuItem[]) =>
    menuList.map((menu) =>
      menu.children ? (
        <SubMenu key={menu.key} icon={menu.icon} title={menu.menuName}>
          {renderTreeNode(menu.children)}
        </SubMenu>
      ) : (
        <MenuItem key={menu.key} icon={menu.icon}>
          <Router>
            <Link to={menu.path}>{menu.menuName}</Link>
          </Router>
        </MenuItem>
      )
    );

  return (
    <Menu
      className="sider-menu"
      // theme="dark"
      mode="inline"
      defaultSelectedKeys={["writeBlog"]}
    >
      {renderTreeNode(menuList)}
    </Menu>
  );
}

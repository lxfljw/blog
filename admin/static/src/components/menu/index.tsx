import React from "react";
import { Menu } from "antd";
import "./index.scss";
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
import { IMenuItem } from "@/components/layout/menuList";
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
    menuList.map(menu =>
      menu.children ? (
        <SubMenu key={menu.key} icon={menu.icon} title={menu.menuName}>
          {renderTreeNode(menu.children)}
        </SubMenu>
      ) : (
        <MenuItem key={menu.key} icon={menu.icon}>
          {menu.menuName}
        </MenuItem>
      )
    );

  return (
    <Menu
      className="sider-menu"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
    >
      {renderTreeNode(menuList)}
    </Menu>
  );
}


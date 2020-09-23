import React from "react";
import { Menu } from "antd";
import "./index.scss";
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
interface IProps {
  menuList: Record<string, any>[];
}

/**
 * 递归实现菜单栏
 * @param props 
 */
export default function MenuGen(props: IProps) {
  const { menuList } = props;
  return (
    <Menu
      className="sider-menu"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
    >
      {menuList.map((menu) =>
        menu.children ? (
          <SubMenu key={menu.menuName} icon={menu.icon} title={menu.menuName}>
            <MenuGen menuList={menu.children} />
          </SubMenu>
        ) : (
          <MenuItem key={menu.menuName} icon={menu.icon}>
            {menu.menuName}
          </MenuItem>
        )
      )}
    </Menu>
  );
}

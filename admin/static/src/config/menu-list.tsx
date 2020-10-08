import React, { ReactElement } from "react";
import {
  // UserOutlined,
  // MenuFoldOutlined,
  FormOutlined,
} from "@ant-design/icons";
export interface IMenuItem {
  menuName: string;
  path: string;
  icon: ReactElement;
  key: string | number;
  children?: IMenuItem[];
}
const MenuList: IMenuItem[] = [
  {
    menuName: "写博客",
    path: "/writeBlog",
    icon: <FormOutlined />,
    key: "writeBlog",
  },
  // {
  //   menuName: "菜单919",
  //   path: "sdf",
  //   icon: <UserOutlined />,
  //   key: 2,
  // },
  // {
  //   menuName: "菜单2",
  //   path: "asdfg",
  //   icon: <MenuFoldOutlined />,
  //   key: "ii",
  //   children: [
  //     {
  //       menuName: "菜单选项1",
  //       path: "lj",
  //       icon: <MenuFoldOutlined />,
  //       key: 4,
  //       // children: [{ menuName: "菜单2000", path: "", icon: <MenuFoldOutlined /> }],
  //     },
  //   ],
  // },
];
export default MenuList;

import React from "react";
import { UserOutlined, MenuFoldOutlined } from "@ant-design/icons";
const MenuList = [
  {
    menuName: "菜单1",
    path: "",
    icon: <UserOutlined />,
  },
  {
    menuName: "菜单99",
    path: "",
    icon: <UserOutlined />,
  },
  {
    menuName: "菜单2",
    path: "",
    icon: <MenuFoldOutlined />,
    children: [
      {
        menuName: "菜单选项1",
        path: "",
        icon: <MenuFoldOutlined />,
        // children: [{ menuName: "菜单2000", path: "", icon: <MenuFoldOutlined /> }],
      },
    ],
  },
];
export default MenuList;

# blog 博客系统项目

```md
启动管理后台前端
npm run admin-static
```

## 一、系统架构图如下

_tip: 图片如果未显示, 需要在 hosts 添加如下配置_

```
199.232.68.133   raw.githubusercontent.com
```

![架构图](./design-diagram.drawio.png)

### 系统目录

blog
├── admin
│ ├── package.json
│ ├── server
│ └── static
├── c.md
├── design-diagram.drawio.png
├── front
│ ├── server
│ └── static
└── README.md

> -L 是确定要几级目录，-I 是排除哪个文件夹下的，tree.md

```md
tree -L 4 -I "node_modules" > tree.md
```

---

### 技术栈说明

- 前端展示系统预计使用最新的 Vue3,完成博客的展示及其他信息
- 管理后台使用 react hooks 编码,对比 hooks 和 Vue3 的 composition 优劣
- 后端 使用阿里框架 eggs 作为博客数据后台服务
- 使用 koa2 作为管理后台服务,装饰器路由
- 所有项目使用 typescript,践行函数式编程思想

## 二、项目规范

### commit 规范

- vscode 插件 `git-commit-lint-plugin`

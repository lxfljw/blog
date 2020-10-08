/*
 * @Author: luxiaofeng
 * @Date: 2020-10-08 16:42:04
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-08 22:21:49
 * @Description: 编写博客页面
 */

import React, { useState } from "react";
import marked from "marked";
import { Input } from "antd";
const { TextArea } = Input;
// import 'highlight.js/styles/monokai-sublime.css';
import "./index.scss";
// marked.setOptions({
//   renderer: new marked.Renderer(),
//   highlight: function (code) {
//     return require("highlight.js").highlightAuto(code).value;
//   },
//   pedantic: false,
//   gfm: true,
//   breaks: false,
//   sanitize: false,
//   smartLists: true,
//   smartypants: false,
//   xhtml: false,
// });
export default function WriteBlog() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  /**
   *
   * @param e 设置文章标题
   */
  const handleSetBlogTitle = (value: string) => {
    setBlogTitle(value);
  };
  /**
   * 设置文章内容
   * @param e
   */
  const handleSetBlogContent = (value: string) => {
    setBlogContent(value);
  };
  return (
    <div className="write-blog-wrap">
      {/* 输入区域 */}
      <section className="write-area area-item">
        <Input
          value={blogTitle}
          onInput={(e) => handleSetBlogTitle(e.currentTarget.value)}
          placeholder="请输入文章标题"
          className="write-area-blog-title"
        />
        <TextArea
          value={blogContent}
          className="input-area"
          onInput={(e) => handleSetBlogContent(e.currentTarget.value)}
        />
      </section>
      {/* 预览区域 */}
      <section className="view-area area-item">
        <div className="view-area-blog-title">{blogTitle}</div>
        <div dangerouslySetInnerHTML={{ __html: marked(blogContent) }}></div>
        <h1>88</h1>
      </section>
    </div>
  );
}

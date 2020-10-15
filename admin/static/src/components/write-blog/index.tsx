/*
 * @Author: luxiaofeng
 * @Date: 2020-10-08 16:42:04
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-16 00:20:20
 * @Description: 编写博客页面
 */

import React, { useEffect, useState } from "react";
import marked from "marked";
import { Input } from "antd";
const { TextArea } = Input;
import "highlight.js/styles/atom-one-dark.css";
// import 'highlight.js/styles/monokai-sublime.css';
import { getBlogList, getBlogById } from "@/api/write-blog";
import "./index.scss";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, language) {
    const hljs = require("highlight.js");
    const validLanguage = hljs.getLanguage(language) ? language : "javascript";
    return hljs.highlight(validLanguage, code).value;
  },
  gfm: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
});
export default function WriteBlog() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const init = async () => {
    const res = await getBlogList();
    const id = "5f88755fdf142d27d7ff61ec";
    const res1 = await getBlogById(id);
    const { title, content } = res1.data.data[0];
    setBlogContent(content);
    setBlogTitle(title);
    console.log(res, res1);
  };
  useEffect(() => {
    init();
  }, []);
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
          placeholder="请输入博客内容, 支持markdown"
        />
      </section>
      {/* 预览区域 */}
      <section className="view-area area-item">
        <div className="view-area-blog-title">{blogTitle}</div>
        <div dangerouslySetInnerHTML={{ __html: marked(blogContent) }}></div>
      </section>
    </div>
  );
}

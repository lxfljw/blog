/*
 * @Author: luxiaofeng
 * @Date: 2020-10-08 16:42:04
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-25 23:51:11
 * @Description: 编写博客页面
 */

import React, { useEffect, useState } from "react";
import marked from "marked";
import { Input, Button } from "antd";
const { TextArea } = Input;
import "highlight.js/styles/atom-one-dark.css";
// import 'highlight.js/styles/monokai-sublime.css';
import { getBlogList, getBlogById, saveBlog } from "@/api/blog";
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
    console.log(res);

    const articleId = "4";
    const res1 = await getBlogById({ articleId });
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
  /**
   * 保存博客
   * @param e
   */
  const onSaveBlog = () => {
    saveBlog({
      blogTitle,
      blogContent,
      userId: "lxf",
    });
  };
  return (
    <div className="content-wrap">
      <div className="write-head">
        <Input
          value={blogTitle}
          onInput={(e) => handleSetBlogTitle(e.currentTarget.value)}
          placeholder="请输入文章标题"
          className="write-area-blog-title"
        />
        <Button type="primary" onClick={onSaveBlog}>
          保存
        </Button>
      </div>
      <div className="write-blog-wrap">
        {/* 输入区域 */}
        <div className="write-area area-item">
          <TextArea
            value={blogContent}
            className="input-area"
            onInput={(e) => handleSetBlogContent(e.currentTarget.value)}
            placeholder="请输入博客内容, 支持markdown"
          />
        </div>
        {/* 预览区域 */}
        {/* <div className="view-area-blog-title">{blogTitle}</div> */}
        <div
          className="view-area area-item"
          dangerouslySetInnerHTML={{ __html: marked(blogContent) }}
        ></div>
      </div>
    </div>
  );
}

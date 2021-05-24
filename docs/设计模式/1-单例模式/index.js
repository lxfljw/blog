let temp = null; // 缓存变量 用于缓存稍后创建的弹窗
/**
 * 创建弹窗函数
 * @param {弹窗内容} modalContent
 */
function Modal(modalContent) {
  // 如果有缓存 直接返回缓存内容
  if (temp) {
    temp.innerHTML = modalContent;
    return temp;
  }
  const body = document.querySelector("body"); // 如果没有创建新的弹窗
  const div = document.createElement("div");
  div.innerHTML = modalContent;
  body.appendChild(div);
  return (temp = div);
}
const modal1 = Modal("modal1");
const modal2 = Modal("modal2");
modal1 === modal12; // true

var Modal = (function (modalContent) {
  let temp = null; // 缓存变量 用于缓存稍后创建的弹窗
  return function () {
    // 如果有缓存 直接返回缓存内容
    if (temp) {
      temp.innerHTML = modalContent;
      return temp;
    }
    const body = document.querySelector("body"); // 如果没有创建新的弹窗
    const div = document.createElement("div");
    div.innerHTML = modalContent;
    body.appendChild(div);
    return (temp = div);
  };
})()

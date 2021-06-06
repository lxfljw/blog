var imgNode = (function () {
  const imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function(src) {
      imgNode.src = src
    }
  }
})()

imgNode.setSrc('https://img.com/banner.png') // 加载图片


var imgNode = (function () {
  const imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  // 代理节点
  var proxyImg = document.createElement('img')
  proxyImg.onload = function() {
    imgNode.setSrc(this.src)
  }
  return {
    setSrc: function(src) {
      imgNode.src = 'https://img.com/loading.png'
      proxyImg.src = src
    }
  }
})()

imgNode.setSrc('https://img.com/banner.png') // 加载图片


var proxyImg = (function(){
  let node = null
  const proxyImg = document.createElement('img')
  proxyImg.onload = function() {
    node.setSrc(this.src)
  }
  return (imgNode) => {
    return {
      setSrc: function(src) {
        proxyImg.src = src
        node = imgNode
        img.setSrc('https://img.com/loading.png')
      }
  }
  }
})()

proxyImg(imgNode).setSrc('https://img.com/banner.png')

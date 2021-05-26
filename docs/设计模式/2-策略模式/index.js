function getDayDesc(day) {
  switch (day) {
    case 0:
      return '星期天'
    case 1:
      return '星期一'
    case 2:
      return '星期二'
    case 3:
      return '星期三'
    case 4:
      return '星期四'
    case 5:
      return '星期五'
    case 6:
      return '星期六'
  }
}

console.log('今天是', getDayDesc(new Date().getDay()));


const daysObj = {
  0: '星期天',
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
}
function getDayDesc(day, strategyObj) {
  return strategyObj[day]
}
console.log('今天是', getDayDesc(new Date().getDay(), daysObj));

const daysObj = [
  '星期天',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
]
function getDayDesc(day, strategyObj) {
  return strategyObj[day]
}
console.log('今天是', getDayDesc(new Date().getDay(), daysObj));
export const getTime = () => {
  let hours = new Date().getHours()
  let message = ''
  if (hours <= 9) {
    message = '早上'
  } else if (hours > 9 && hours <= 12) {
    message = '中午'
  } else if (hours > 12 && hours <= 18) {
    message = '下午'
  } else {
    message = '晚上'
  }
  return message
}

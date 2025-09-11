export function autoTextFn(text, para, speed) {
    text = [...text]//text.split``
    let i = 0, arr = [], len = text.length
    let timer = setInterval(() => {
      let take = text.shift(text[i])
      i += 1
      arr.push(take)
      para.textContent = arr.join``
      // console.log(text)//sender
      // console.log(arr)//receiver
      // console.log(arr.length,len)//compare arr's length w/ original text length
      if (arr.length === len) clearInterval(timer)//clearInterval once both lengths are the same.
    }, !speed ? 50 : speed)
}
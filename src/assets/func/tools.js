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

// set random position
export function setRandomPosition(itemElement, containerElement) {
    // Get the dimensions of the container and the item
    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;
    const itemWidth = itemElement.offsetWidth;
    const itemHeight = itemElement.offsetHeight;

    // Calculate the maximum possible x and y coordinates
    // Subtract item dimensions to keep it fully within the container
    const maxX = containerWidth - itemWidth;
    const maxY = containerHeight - itemHeight;

    // Generate random x and y coordinates
    // Math.random() returns a float between 0 (inclusive) and 1 (exclusive)
    // Math.floor() rounds down to the nearest integer
    const randomX = Math.floor(Math.random() * (maxX + 1)); // +1 to include maxX
    const randomY = Math.floor(Math.random() * (maxY + 1)); // +1 to include maxY

    // Apply the random positions to the item's style
    itemElement.style.left = randomX + 'px';
    itemElement.style.top = randomY + 'px';
}

class Stack {
  constructor () {
    this.arr = []
  }

  size () {
    return this.arr.length
  }

  push (item) {
    this.arr.push(item)
  }

  pop () {
    if (this.arr.length === 0) {
      throw new Error('stack is empty')
    }
    // const poppedItem = this.arr[this.arr.length - 1]
    // return poppedItem
    return this.arr.pop()   // built in with JS
  }
  peek () {
    if (this.arr.length === 0) {
      throw new Error('stack is empty')
    }
    return this.arr[this.arr.length - 1]
  }
}

export default Stack

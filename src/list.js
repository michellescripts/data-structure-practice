class Node {
  constructor (item) {
    this.item = item
    this.next = null
  }
}

// remove in a list is O(1)
// compare to array, moving all items O(n)

class List {
  constructor () {
    this.head = null
    this.tail = null
    this.count = 0
  }

  size () {
    return this.count
  }

  push (item) {
    this.count++
    const node = new Node(item)
    if (!this.head) {
      this.head = node
    }
    if (this.tail) {
      // if you have a tail, this updates the pointer for the new tail
      this.tail.next = node
    }
    this.tail = node
  }

  find (item) {
    const res = this._findNode(item)
    if (res) {
      return true
    }
    return false
  }

  front () {
    if (this.head) {
      return this.head.item
    }
    return null
  }

  back () {
    if (this.tail) {
      return this.tail.item
    }
    return null
  }

  remove (item) {
    if (!this.head) {
      throw new Error('List is empty')
    }
    let prev = null
    let node
    // loop so that node gets set to the node to delete,
    // and prev is the node before it (or null)
    for (node = this.head; node !== null; node = node.next) {
      if (item === node.item) {
        this.count--
        break
      }
      prev = node
    }
    if (prev && node) {
      prev.next = node.next // doesnt remove,but isnt linked. garbage collection
    }
    // if removed head item
    if (node === this.head) {
      this.head = this.head.next
    }
    if (node === this.tail) {
      this.tail = prev
    }
  }

  toArray () {
    const res = []
    for (let node = this.head; node !== null; node = node.next) {
      res.push(node.item)
    }
    return res
  }

  _findNode (item) {
    for (let node = this.head; node !== null; node = node.next) {
      if (node.item === item) {
        return node
      }
    }
    return null
  }

}

export default List

import assert from 'assert'
import Stack from '../src/stack'

describe('stack', () => {
  it('is initially empty', () => {
    const stack = new Stack()
    assert.equal(stack.size(), 0)
  })

  describe('push', () => {
    it('increments the size', () => {
      const stack = new Stack()
      stack.push('hey')
      assert.equal(stack.size(), 1)
    })
    it('increments the size multiple times', () => {
      const stack = new Stack()
      stack.push('hey')
      stack.push('hello')
      assert.equal(stack.size(), 2)
    })
  })

  describe('pop', () => {
    it('fails when the stack is empty', () => {
      const stack = new Stack()
      assert.equal(stack.size(), 0)
      assert.throws(() => {
        stack.pop()
      }, Error)
    })

    it('it decrements size', () => {
      const stack = new Stack()
      stack.push('hey')
      assert.equal(stack.size(), 1)
      stack.pop()
      assert.equal(stack.size(), 0)
    })

    it('returns elements in the correct order', () => {
      const stack = new Stack()
      stack.push('element 1')
      stack.push('element 2')
      assert.equal(stack.pop(), 'element 2')
      assert.equal(stack.pop(), 'element 1')
      assert.equal(stack.size(), 0)
    })

    it('returns the removed item', () => {
      const stack = new Stack()
      stack.push('hey')
      assert.equal(stack.size(), 1)
      const popItem = stack.pop()
      assert.equal(popItem, 'hey')
    })
  })

  describe('peek', () => {
    it('throws an error on an empty stack', () => {
      const stack = new Stack()
      assert.equal(stack.size(), 0)
      assert.throws(() => {
        stack.peek()
      }, Error)
    })

    it('returns the top element from the stack', () => {
      const stack = new Stack()
      stack.push('top element')
      assert.equal(stack.peek(), 'top element')
    })

    it('does not change the stack size', () => {
      const stack = new Stack()
      stack.push('top element')
      stack.peek()
      stack.peek() // to be safe
      assert.equal(stack.size(), 1)
    })
  })
})

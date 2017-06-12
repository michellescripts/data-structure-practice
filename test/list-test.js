import assert from 'assert'
import List from '../src/list'

describe('list', () => {
  it('is initially empty', () => {
    const list = new List()
    assert.equal(list.size(), 0)
  })
  it('doesn\'t find items in an empty list', () => {
    const list = new List()
    assert.equal(list.find('hi'), false)
  })
  it('determines if item is in the list', () => {
    const list = new List()
    list.push('hi')
    assert.equal(list.find('hi'), true)
  })

  describe('push', () => {
    it('increments the size', () => {
      const list = new List()
      list.push('item1')
      assert.equal(list.size(), 1)
    })

    it('adds to the list', () => {
      const list = new List()
      list.push('item1')
      assert.equal(list.front(), 'item1')
      assert.equal(list.back(), 'item1')
      assert.equal(list.find('item1'), true)
    })

    it('adds multiple items to the list', () => {
      const list = new List()
      list.push('item1')
      list.push('item2')
      assert.equal(list.front(), 'item1')
      assert.equal(list.back(), 'item2')
      assert.equal(list.find('item2'), true)
      list.push('item3')
      assert.equal(list.back(), 'item3')
      assert.equal(list.find('item3'), true)
    })
  })
  describe('remove', () => {
    it('does not remove from an empty list', () => {
      const list = new List()
      assert.throws(() => {
        list.remove('not here')
      }, Error)
    })

    it('removes an item from a singleton list', () => {
      const list = new List()
      list.push('item0')
      list.remove('item0')
      assert.equal(list.size(), 0)
      assert.equal(list.front(), null)
      assert.equal(list.back(), null)
    })

    it('only decrements the size when an item is actually removed', () => {
      const list = new List()
      list.push('item0')
      list.push('item1')
      list.push('item2')
      assert.equal(list.size(), 3)
      list.remove('does not exist')
      assert.equal(list.size(), 3)
    })

    it('removes an item from the front of the list', () => {
      const list = new List()
      list.push('item0')
      list.push('item1')
      list.push('item2')
      list.remove('item0')
      assert.equal(list.size(), 2)
      assert.equal(list.front(), 'item1')
    })

    it('removes an item from the end of the list', () => {
      const list = new List()
      list.push('item0')
      list.push('item1')
      list.push('item2')
      list.remove('item2')
      assert.equal(list.size(), 2)
      assert.equal(list.back(), 'item1')
    })

    it('removes an item from the middle of the list', () => {
      const list = new List()
      list.push('item0')
      list.push('item1')
      list.push('item2')
      list.remove('item1')
      assert.equal(list.size(), 2)
      assert.equal(list.find('item1'), false)
    })
  })
})

import Mock from 'mockjs'

import { shop } from './mock.shop.js'

function addToMock(list) {
  list.forEach(n => {
    Mock.mock(n.path, n.data)
  })
}

addToMock(shop)

export default Mock

import * as types from '../mutation-types'

const state = {
  cartList: {}, // 加入购物车列表
  ballInCart: false
}

// getters
const getters = {
  cartList: state => state.cartList,
  ballInCart: state => state.ballInCart
}

// actions
const actions = {
  addCart ({commit}, {restaurantId, restaurantName, picUrl, foodId, price, name, foodsPic}) {
    commit('ADD_CART', {restaurantId, restaurantName, picUrl, foodId, price, name, foodsPic})
  },
  reduceCart ({commit}, {restaurantId, foodId}) {
    commit('REDUCE_CART', {restaurantId, foodId})
  },
  deleteFood ({commit}, {restaurantId, foodId}) {
    commit('DELETE_CART', {restaurantId, foodId})
  },
  emptyCart ({commit}, {restaurantId}) {
    commit('EMPTY_CART', {restaurantId})
  },
  ballInCart ({commit}, boolean) {
    commit(types.BALL_IN_CART, boolean)
  },
  updateCart ({commit}, {cartList}) {
    commit(types.UPDATE_CART, {cartList})
  }
}

// mutations
const mutations = {
  [types.ADD_CART] (state, {restaurantId, restaurantName, picUrl, foodId, price, name, foodsPic}) {
    let cart = state.cartList
    let restaurant
    if (!cart[restaurantId]) { // 如果该商店还没有添加任何商品 进行初始化
      restaurant = cart[restaurantId] = {
        totalPrice: 0, // 总价格
        totalNum: 0, // 总数量
        restaurantName, // 餐馆名
        picUrl // 餐馆图片
      }
    } else {
      restaurant = cart[restaurantId]
    }
    restaurant.totalPrice = (Number(restaurant.totalPrice) + Number(price)).toFixed(2) // 计算总价格
    restaurant.totalNum++ // 数量加一
    if (restaurant[foodId]) { // 如果该食物已经在保存了  数量加1
      restaurant[foodId].num++
    } else {
      restaurant[foodId] = { // 初始化该食物
        name,
        price,
        foodsPic,
        num: 1,
        id: foodId
      }
    }
    // 触发更新
    state.cartList = {...cart}
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
  // 减购物车
  [types.REDUCE_CART] (state, {restaurantId, foodId}) {
    let cart = state.cartList
    let restaurant = cart[restaurantId]
    // 修改购物车总价格
    restaurant.totalPrice = Number((restaurant.totalPrice - restaurant[foodId].price).toFixed(2))
    restaurant.totalNum--
    if (restaurant.totalNum === 0) {
      delete (cart[restaurantId])
    } else if (restaurant[foodId].num === 1) {
      delete (restaurant[foodId])
    } else {
      restaurant[foodId].num--
    }
    state.cartList = {...cart}
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
  // 删除食物
  [types.DELETE_CART] (state, {restaurantId, foodId}) {
    let cart = state.cartList
    let restaurant = cart[restaurantId]
    let num = restaurant[foodId].num
    let price = restaurant[foodId].price
    restaurant.totalNum -= num
    delete (restaurant[foodId])
    if (restaurant.totalNum === 0) {
      delete (cart[restaurantId])
    } else {
      restaurant.totalPrice = Number((restaurant.totalPrice - price * num).toFixed(2)) // 修改价格
    }
    state.cartList = {...cart}
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
  // 更新购物车记录
  [types.UPDATE_CART] (state, {cartList}) {
    state.cartList = {...cartList}
  },
  // 清空购物车
  [types.EMPTY_CART] (state, {restaurantId}) {
    let cart = state.cartList
    delete cart[restaurantId]
    state.cartList = {...cart}
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
  // 小球进入购物车
  [types.BALL_IN_CART] (state, boolean) {
    state.ballInCart = boolean
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

import * as types from '../mutation-types'

import {getRestaurant} from '@/api/restaurant'

const state = {
  poiInfo: {},
  restaurantInfo: {} // 商店的信息 包括 售卖的食物
}

// getters
const getters = {
  restaurantInfo: state => state.restaurantInfo,
  poiInfo: state => state.poiInfo
}

// actions
const actions = {
  getRestaurant ({commit, state}, restaurantId) {
    getRestaurant(restaurantId).then((response) => {
      let poiInfo = response.data.data
      commit('RECORD_RESTAURANT', poiInfo)
    })
  }
}

// mutations
const mutations = {
  // 记录当前商店的信息
  [types.RECORD_RESTAURANT] (state, poiInfo) {
    state.poiInfo = {
      address: poiInfo.address,
      averagePriceTip: poiInfo.average_price_tip,
      bulletin: poiInfo.bubbles,
      callCenter: poiInfo.call_center,
      commentNumber: poiInfo.comment_number,
      createdAt: poiInfo.created_at,
      deliveryScore: poiInfo.delivery_score,
      deliveryTimeTip: poiInfo.delivery_time_tip,
      discounts2: poiInfo.discounts2,
      distance: poiInfo.distance,
      foodScore: poiInfo.food_score,
      id: poiInfo.id,
      lat: poiInfo.lat,
      lng: poiInfo.lng,
      minPrice: poiInfo.min_price,
      minPriceTip: poiInfo.min_price_tip,
      monthSales: poiInfo.month_sales,
      monthSalesTip: poiInfo.month_sales_tip,
      name: poiInfo.name,
      packScore: poiInfo.pack_score,
      picUrl: poiInfo.pic_url,
      qualityScore: poiInfo.quality_score,
      shippingFee: poiInfo.shipping_fee,
      shippingFeeTip: poiInfo.shipping_fee_tip,
      shoppingTimeEnd: poiInfo.shopping_time_end,
      shoppingTimeStart: poiInfo.shopping_time_start,
      thirdCategory: poiInfo.third_category,
      wmPoiScore: poiInfo.wm_poi_score
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

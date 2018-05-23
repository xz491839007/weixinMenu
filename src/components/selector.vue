<template>
  <div id="selector">
    <div class="ball_container" @click="reduceCart()" v-if="foodNum">
      <span class="reduce"><i class="iconfont icon-reduce">&#xe613;</i></span>
    </div>
    <span class="number" v-if="foodNum">{{foodNum}}</span>
    <div class="ball_container" @click="addCart($event)">
      <span class="add"><i class="iconfont icon-add">&#xe6a9;</i></span>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
//    接收父组件传递进来的货物  和 商店 id 和图片url
  props: ['foodId', 'name', 'price', 'pic'],
  methods: {
    addCart (event) {
      let elRight = event.target.getBoundingClientRect().right // 选择器的右边 离左边页面的位置
      let elBottom = event.target.getBoundingClientRect().bottom // 选择器的底部  离顶部页面的位置
      let {picUrl} = this.poiInfo // 商店名字 图片
      let restaurantName = this.poiInfo.name
      this.$store.dispatch('addCart', {
        restaurantName,
        picUrl,
        name: this.name,
        price: this.price,
        foodsPic: this.pic,
        foodId: this.foodId,
        restaurantId: this.poiInfo.id
      })
      this.$emit('showDot', elRight, elBottom)
    },
    reduceCart (event) {
      this.$store.dispatch('reduceCart', {restaurantId: this.poiInfo.id, foodId: this.foodId})
    }
  },
  computed: {
    ...mapGetters([
      'cartList', 'poiInfo'
    ]),
    foodNum () {
      let restaurant = this.cartList[this.poiInfo.id]
      return restaurant ? restaurant[this.foodId] ? restaurant[this.foodId]['num'] : 0 : 0
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../style/mixin.scss";

  #selector {
    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .reduce, .add {
      display: flex;
      border-radius: 50%;
    }
    .reduce {
      border: 1px solid $mtGrey;
      margin: 0 0.1rem;
    }
    .number {
      display: inline-block;
      margin: 0 0.15rem;
      font-size: 0.3rem;
    }
    .ball_container {
      padding: 0.1rem;
    }
    .add {
      margin: 0 0.1rem;
      background: $mtYellow;
    }
    .icon-reduce, .icon-add {
      display: flex;
      font-size:0.4rem;
      @include px2rem(width, 50);
      @include px2rem(height, 50);
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .icon-reduce {
      color: $mtGrey;
    }
  }
</style>

<template>
  <div class="hello_wrapper">
    <div class="home">
      <div class="userimg">
        <img :src='myImage' class="myimage"/>
      </div>
      <div class="mainimg">
        <img src="../assets/点餐-2.png" class="logo-img"/>
      </div>
      <div class="maintitle">
        <p style="color: white">{{storyName}}</p>
      </div>
      <div class="title">
        <p style="color: white">{{siteName}}</p>
      </div>
      <div class="name">
        <p style="color: white">{{userNamel}}</p>
      </div>
      <div class="string">
        <p style="color: white">您好，欢迎光临</p>
      </div>
      <div class="tobtu">
        <router-link :to="{path:'/index',query:{id:'32'}}" active-class="active">
          <p style="color: white">开始点餐</p>
        </router-link>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      myImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526019381224&di=6cb7aafbc40a79890f0ae903361bb4e7&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201501%2F25%2F20150125094210_35HLk.jpeg',
      storyName: '匆匆那年时尚餐厅',
      siteName: '桌位：203',
      userNamel: '奥特曼'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../style/mixin.scss";
  @import "../style/common.scss";
  .home{
    display: flex;
    flex-flow:column;
    .userimg{
      display: flex;
      flex-flow: row;
      margin-bottom: 1rem;
      justify-content: flex-end;
      .myimage{
        @include px2rem('height',100);
        @include px2rem('width',100);
        border-radius: 50%;
        margin-right: 1rem;
        margin-top: 0.8rem;
      }
    }
    .mainimg{
      display: flex;
      flex-flow: row;
      margin-bottom: 1rem;
      justify-content: center;
      .logo-img{
        @include px2rem('height',200);
        @include px2rem('width',200);
      }
    }
    .maintitle{
      display: flex;
      flex-flow: row;
      margin-bottom: 0.5rem;
      justify-content: center;
      font-size: 18px;
    }
    .title{
      display: flex;
      flex-flow: row;
      margin-bottom: 2.8rem;
      justify-content: center;
      font-size: 15px;
    }
    .name{
      display: flex;
      flex-flow: row;
      margin-bottom: 0.2rem;
      justify-content: center;
      font-size: 15px;
    }
    .string{
      display: flex;
      flex-flow: row;
      margin-bottom: 1.4rem;
      justify-content: center;
      font-size: 15px;
    }
    .tobtu{
      display: flex;
      flex-flow: row;
      justify-content: center;
      margin-bottom: 1rem;
      font-size: 36px;
    }
  }

</style>

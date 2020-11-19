<template>
  <div>
    <van-nav-bar title="歌单广场" left-text="返回" @click-left="on()" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div style="width: 100%;">
    <van-tabs v-model="activeName" >
      <van-tab title="推荐" name="a">内容 1</van-tab>
      <van-tab title="官方" name="b">内容 2</van-tab>
      <!-- 精品 -->
      <van-tab title="精品" name="c">
        <van-cell  title-style="color:#000000; font-weight: 600; margin-left:-15%;"  title="全部" is-link value="筛选" />
        <div v-for="ao in ao" style="float: left; width: 30%;margin-top: 5px;margin: 5.2px;margin-bottom: 10px;">
          <div>
            <img style="border-radius: 15px;" :src="ao.coverImgUrl" />
            <p style="color: #000000;overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;">{{ao.name}}</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="华语" name="d">内容 4</van-tab>


    </van-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'c',
        ao: []
      }
    },
    methods: {
      on() {
        history.back();
      },
    },
    created() {
      var _this = this;
      var List = this.$route.query.search; //接收参数
      this.$axios({
          methods: 'post',
          url: 'https://tree.xingyuncm.cn//top/playlist/highquality',
          params: {

          }
        })
        .then(function(ao) {
          _this.ao = ao.data.playlists;
          console.log(ao.data.playlists)
        })
    }
  }
</script>

<style >
  .van-nav-bar__text{
    color: #000000;
  }
</style>

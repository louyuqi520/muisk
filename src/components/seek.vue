<template>
  <div>
    <van-nav-bar title="搜索列表" left-text="返回" right-text=">"  @click-left="onClickLeft"/>
    <div v-for="Tist in Tist" style="display: flex;justify-content: space-around;height: 55px;padding-top: 17px; box-shadow: 1px 1px 0px 0px #BFBFBF;">
      <div style="width: 30%;   overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;">{{Tist.name}}</div>
      <div style="width: 20%;">{{Tist.artists[0].name}}</div>
      <div @click="bf(Tist.mvid)">播放MV</div>
      <button @click="ok(Tist.id)" style="margin-top: -5px; height: 30px; border-radius: 30px;">点击播放</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Tist: [],
      };
    },
    methods: {
      bf(aa,bb) {
        this.$router.push({
          path: '/bf',
          query: {
           mvid:aa,
          },
        })
      },
      onClickLeft() {
        history.back();
      },
      ok(a) {
        this.$router.push({
          path: '/musicok',
          query: {
            id: a
          },
        })
        console.log(a)
      }

    },
    created() {
      var search = this.$route.query.search;
      console.log(search)
      var _this = this;
      this.$axios({
          method: 'post',
          url: 'https://tree.xingyuncm.cn//search',
          params: {
            keywords: search
          }
        })
        .then(function(se) {
          _this.Tist = se.data.result.songs
          console.log(se.data.result.songs)
        })
    }
  };
</script>

<style scoped>
  van-nav-bar__title van-ellipsis {
    color: #000000;
  }
</style>

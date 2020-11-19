<template>
  <div>
    <van-nav-bar title="我喜欢的音乐" left-text="返回" right-text=">" @click-left="onClickLeft"/>
    <div v-for="jist in jist" style="display: flex;justify-content: space-around;height: 30px; border: 1px solid #AAAAAA;padding-top: 5px;margin-bottom: 2px;">
    <p style="width: 33%;">{{jist.name}}</p>
    <p style="width: 33%;">{{jist.ar[0].name}}</p>
    <p @click="bo(jist.id)" style="width: 33%;">播放</p></div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        jist: '',

      }
    },
    methods: {
      bo(q) {
        this.$router.push({
          path:'/musicok',
          query:{
            id: q
          }
        })
      },
    onClickLeft() {
      history.back();
    },
    },
    created() {

      var _this = this;
      var id = this.$route.query.id; //接收参数
      console.log(id)
      //获取音乐我的生活歌单
      			this.$axios({
      					methods: 'post',
      					url: 'https://tree.xingyuncm.cn//playlist/detail',
      					params: {
      						id:id
      					}
      				})
      				.then(function(res) {
      					_this.jist = res.data.playlist.tracks;
      					console.log(res.data.playlist.tracks);
      				})

    }
  }
</script>

}

<style>
  audio{
    height: 50px;
  }
</style>

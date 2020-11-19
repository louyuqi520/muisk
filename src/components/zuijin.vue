<template>
<div>
  <div style="display: flex;justify-content: space-around;height: 30px;background-color: #C8C9CC;padding-top: 5px;">
    <div>歌手</div>
    <div>作者</div>
    <div>播放</div>
  </div>
  <div v-for="di in di" style="display: flex;justify-content: space-around;">
    <div>{{di.song.name}}</div>
    <div>{{di.song.ar[0].name}}</div>
    <div @click="fang(di.song.id)">播放</div>
  </div>
</div>
</template>
<script>
 export default {
    data() {
      return {

        di: []
      }
    },
    methods: {
           fang(d) {
             this.$router.push({
               path:'/musicok',
               query:{
                 id:d
               }
             })
           }
    },
    created() {
      var _this = this;
      var id= this.$route.query.id; //接收参数
      this.$axios({
          methods: 'post',
          url: 'https://tree.xingyuncm.cn//user/record',
          params: {
             uid: id,
             type: 0

          }
        })
        .then(function(di) {
          _this.di = di.data.allData;
          console.log(di.data.allData)
        })
    }
  }
</script>

<style>
</style>

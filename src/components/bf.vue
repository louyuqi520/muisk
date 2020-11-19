<template>
  <div style="background-color:#1ABC9C;">
    <video :src="se.url" controls></video>
    <div v-for=" o in o" style="color: white; display: flex;justify-content: space-around; height: 180px; border: white  1px solid;">
      <div style="width: 30%;">
        <img style="width: 50%;" :src="o.user.avatarUrl"/>
        <div></div>
        <div>{{o.user.nickname}}</div>
      </div>
      <div></div>
      <div style="width: 80%;">{{o.content}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        se:[],
          o: []
      };
    },
    methods: {

    },
    created() {
  var mvid = this.$route.query.mvid;
      // console.log(mvid)
      var _this = this;
      this.$axios({
          method: 'post',
          url: 'https://tree.xingyuncm.cn//mv/url',
          params: {
            id:mvid
          }
        })
        .then(function(se) {
          _this.se = se.data.data;
          console.log(se.data.data)
        }),
        this.$axios({
            methods: 'post',
            url: 'https://tree.xingyuncm.cn//comment/mv',
            params: {
              id:mvid
            }
          })
          .then(function(o) {
            _this.o = o.data.comments;
            console.log(o.data.comments);
          })
    }
  };
</script>

<style>
</style>

<template>
  <div style="background-color: #1BBC9B;">
    <!-- 标题 -->
    <van-nav-bar title="歌曲详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div v-for="music in music">
      <div style="width: 100%;margin-top: -40px;"><img :src="music.al.picUrl" /></div>

      <div style="width: 100%;padding-top: 5px;">
        <p style="font-size: 15px;">歌名：{{music.name}}</p>
        <p style="font-size: 15px;">作者：{{music.ar[0].name}}</p>
        <div v-for="url in url">
          <audio :src="url.url" controls @timeupdate="tim"></audio>
        </div>
      </div>

    </div>
    <div class="niu">
      <div class="content" ref="cont">
        <p style="font-size: 15px;font-weight: 550; color: # #CCCCCC;" v-for="(x,i) in Lyrics" :ref="'Lyrics'+i" :style="{color: LyricsIndex == i ? 'white' : 'black'}">{{x.words}}</p>
      </div>
    </div>
    </br> </br> </br> </br>
    <div v-for=" o in o" style="color: white; display: flex;justify-content: space-around; height: 180px; border: white  1px solid;">
      <div style="width: 30%;margin-top: -50px; ">
        <img style="width: 50%;" :src="o.user.avatarUrl" />
        <div></div>
        <div>{{o.user.nickname}}</div>
      </div>
      <div></div>
      <div style="width: 80%;">{{o.content}}</div>
    </div>
  </div>
</template>

<script>
  import Lyric from 'lrc-file-parser'
  export default {

    data() {
      return {
        music: [],
        url: [],
        o: [],
        Lyrics: [],
        musick: [],
        LyricsIndex: 0
      }
    },
    methods: {
      onClickLeft() {
        history.back();
      },
      //调用处理过的歌单参数并传过来
      dealwith(par) {
        var arr = []; //创建一个存放歌词的新数组
        arr = par.split("\n"); //对字符串进行分割,par 处理文件
        // console.log(arr);

        for (var i = 0; i < arr.length; i++) {
          var obj = {} //声明一个对象
          var words = arr[i].split("]"); //将歌词里的】进行删除
          // console.log(words);
          obj.words = words ? words[1] : ""; //进行容错处理，判断歌词是否存在，如果存在元素添加，如果没有就是空字符


          var time = words[0].slice(1, 10); //截取不需要的字符
          obj.time = time ? this.formatLyricsTime(time) : ""; //把时间赋给时间的time
          console.log(this.Lyrics)
          this.Lyrics.push(obj)
          console.log(obj);
        }
      },
      tim(par) {
        console.log(par.target.currentTime)
        var current = par.target.currentTime;
        for (var i = 0; i < this.Lyrics.length; i++) {
          if (current < this.Lyrics[i].time) {
            var nowIndex = i - 1
            this.LyricsIndex = nowIndex;
            console.log(this.Lyrics[i].words)
            var height = 20 - nowIndex * 30;
            this.$refs.cont.style.transform = "translateY(" + height + "px)"
            break
          }
        }
      },

      formatLyricsTime(time) { //格式化歌词时间 转换成sss：ms
        const regSec = /:.*\./

        const min = parseInt(time.split(':')[0])
        let sec = parseInt(time.match(regSec)[0].slice(1, 3))
        const ms = parseInt(time.split('.')[1])
        if (min !== 0) {
          sec += min * 60
        }
        return Number(sec + '.' + ms)
      }
    },
    created() {
      var id = this.$route.query.id;
      console.log(id);
      var _this = this;
      var that = this
      //请求歌曲详情
      this.$axios({
          methods: 'post',
          url: 'https://tree.xingyuncm.cn//song/detail',
          params: {
            ids: id
          }
        })
        .then(function(res) {
          _this.music = res.data.songs;
          console.log(res.data.songs);
        })
      //请求音乐url
      this.$axios({
          methods: 'post',
          url: 'https://tree.xingyuncm.cn//song/url',
          params: {
            id: id
          }
        })
        .then(function(res) {
          _this.url = res.data.data;
          console.log(res.data.data);
        })
      // 提交音乐id 获取歌词
      this.$axios({
          methods: 'post',
          url: 'https://tree.xingyuncm.cn//lyric',
          params: {
            id: id
          }
        })
        .then(function(wo) {
          var Lyrics = wo.data.lrc.lyric;
          that.dealwith(Lyrics);
        })
      //提交音乐id 获取评论
      this.$axios({
          methods: 'post',
          url: 'https://tree.xingyuncm.cn//comment/music',
          params: {
            id: id
          }
        })
        .then(function(o) {
          _this.o = o.data.comments;
          console.log(o.data.comments);
        })
    }
  }
</script>

<style scoped>
  .niu {
    height: 500px;
    overflow: hidden;
    padding: 10px;
  }

  .content {
    transform: translateY(30px);
  }

  .lyricPanel {
    width: 250px;
    height: 400px;
    border: 1px solid red;
    overflow-y: scroll;
  }

  audio {
    height: 35px;
  }

  img {
    width: 150px;
    border-radius: 50%;
    margin-top: 50px;
    -webkit-animation: rotateImg 10s linear infinite;
    vertical-align: middle;
  }

  @keyframes rotateImg {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotateImg {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  p {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 900;
  }

  audio {
    margin-top: 20px;
  }
</style>

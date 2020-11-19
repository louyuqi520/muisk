<template>
  <div  style="margin-top: 58px;">
    <div class="hello" style="background-image: url(../../static/109951162868128395.jpg);background-size: 100%; width: 100%; height:200px;margin-top: -60px; ">
      <!-- 标题 -->
      <!-- <van-nav-bar title="网易云音乐" left-arrow style="background-color: #000000;">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar> -->
      <!-- 侧滑导航 -->
      <div style="height: 40px; width: 8%;margin-left:4px;margin-top: 10px;">
        <van-icon style="margin-top: 7px;" name="wap-nav" @click="showPopup" />
        <van-popup v-model="show" position="left" :style="{ width:'30%',height:'100%' } " />
      </div>
      <!-- 导航-->
      <van-tabs title-active-color="white" v-model="activeName" background="#000000" style=" width: 83%;margin-left: 31px;margin-top: -40px; color: white;">
        <!-- 我的//内容-->
        <van-tab title="我的" name="a">
          <div style="display: flex;justify-content: space-around;margin-top: 10px;">
            <img style="width: 55px; border-radius:50%;margin-left: -7px;" :src="list.avatarUrl" />
            <div style="font-size: 14px;margin-top: 5px;">{{list.nickname}}
              <p><img style="width: 23px;" src="../../static/svip.png"></p>
            </div>
            <div style="color: #CCCCCC;margin-top: 21px; font-size: 12px; margin-left: 50px;">开通黑胶vip ></div>
          </div>
          <!-- 切换登录 -->
          <div style="display: flex;justify-content: space-between;margin-top: 1px; font-size: 12px; margin-left:0%; width: 100%; color: #CCCCCC;">
            <div @click="tiao()">切换//登录</div>
            <div></div>
            <div></div>
          </div>
          <!-- 九宫 -->
          <div style="display: flex;justify-content: space-around; margin-top: 7px; margin-left: 10px; ">
            <div style="font-size: 10px;">
              <img style="width: 60%;" src="../../static/音乐.png">
              <p>本地音乐</p>
            </div>
            <div style="font-size: 10px;">
              <img style="width: 60%;" src="../../static/下载.png">
              <p>下载管理</p>
            </div>
            <div style="font-size: 10px;">
              <img style="width: 60%;" src="../../static/收听.png">
              <p>我的电台</p>
            </div>
            <div style="font-size: 10px;">
              <img style="width: 60%;" src="../../static/我的收藏.png">
              <p>我的收藏</p>
            </div>
            <div style="font-size: 10px;">
              <img style="width: 60%;" src="../../static/关注.png">
              <p>关注新歌</p>
            </div>
            <!-- 搜索按钮 -->
            <van-icon @click="dianji()" style="margin-left:85%; font-size: 17px; position: fixed; margin-top:-118px; height: 20px;"
              name="search" />
            <van-search style="position: fixed; width: 90%;margin-top: -134px;margin-left: 4.5%; height: 40px;background-color: #000000;" v-model="value"   v-show="isshow"  show-action placeholder="请输入搜索关键词" @search="onSearch">
              <template #action>
                <div style="color: white;" @click="onSearch">搜索</div>
              </template>
            </van-search>

          </div>
          <!-- //我的音乐 -->
          <van-cell style=" width: 110%;margin-left: -6.5%; margin-top: 11px; border-radius: 15px 15px 0px 0px;" title="我的音乐" is-link value=""
            title-style="color:#000000; font-weight: 600; margin-left:-15%" />
            <div id="love" style=" display: flex;justify-content: space-around;margin-top: 2px;">
              <img @click="mylove(liste[0].id)" src="../../static/喜欢.png" />
              <img src="../../static/私人.png" />
              <img src="" />
            </div>
            <!-- 最近播放 -->
            <van-cell style=" width: 110%;margin-left: -5%; margin-top: 11px;" title="最近播放" is-link value="更多"
              title-style="color:#000000; font-weight: 600; margin-left:-15%" />
              <div style="display: flex;justify-content: space-around;">
              <div id="zuijin" style=" width: 50%; margin-top: 5px; color: #AAAAAA; display: flex;justify-content: space-around;">
                <img @click="e()" src="/static/风景%20(2).png" />
                <div>
                  <p style="font-size: 12px;">全部已播歌曲</p>
                  <p style="margin-top: 10px;">100首</p>
                </div>
                <div ></div>
              </div>
              <div id="zuijin" style=" margin-top: 5px; color: #AAAAAA; display: flex;justify-content: space-around;width: 50%;">
                <img src="/static/风景%20(1).png" />
                <div>
                  <p style="font-size: 12px;">歌单：热歌榜</p>
                </div>
                <div ></div>
              </div>
              </div>
              <!-- 新创歌单 -->
              <van-cell style=" width: 110%;margin-left: -5%; margin-top: 5px;" title="创建歌单" is-link value="更多"
                title-style="color:#000000; font-weight: 600; margin-left:-15%" />
                <div id="jin" style=" margin-top: 5px; color: #AAAAAA; display: flex;justify-content: space-around;margin-left: -1%;">
                  <img  src="../../static/QQ图片20200717180236.jpg" />
                  <div>
                    <p style="font-size: 12px;">热血澎湃</p>
                  </div>
                  <div style="width: 53%;"></div>
                </div>
        </van-tab>
        <!-- 我的页面结束 -->

        <!-- 发现页面 -->
        <van-tab title="发现" name="b">
          <!-- 轮播图 -->
          <div style="width: 120%;margin-left: -11.5%;">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../../static/默认文件1595127433973.png"></van-swipe-item>
            <van-swipe-item><img  src="../../static/默认文件1595127533058.png"></van-swipe-item>
            <van-swipe-item><img src="../../static/默认文件1595139660752.png"></van-swipe-item>
          </van-swipe>
          </div>
          <van-grid :border="false" :column-num="4" style="color: #000000;">
          <van-grid-item>
            <van-image src="../../static/日历.png" />
            <p style="font-size: 12px;margin-top:5px;">每日推荐</p>
          </van-grid-item>
          <van-grid-item @click="ge()">
            <van-image src="../../static/查询列表 (1).png" />
            <p style="font-size: 12px;margin-top:5px;">歌单</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="../../static/查询列表.png" />
            <p style="font-size: 12px;margin-top:5px;">排行榜</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="../../static/音乐形式（pitch on） (1).png" />
            <p style="font-size: 12px;margin-top:5px;">电台</p>
          </van-grid-item>

          </van-grid>
        </van-tab>
        <!-- 云村页面 -->
        <van-tab title="云村" name="c">
         <div style="background-color: white; position: absolute;width: 120%;margin-left: -11.5%;">
         <div v-for="a in a" style="width: 45%; float: left; margin:7.7px;margin-bottom: 10px;">
           <div>
             <img style="width: 230px;height: 185px;" :src="a.simpleResourceInfo.songCoverUrl"/>
             <p style="color: #000000;overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;">{{a.content}}</p>
           </div>
         </div>
         </div>
        </van-tab>
        <!-- 云村页面结束 -->
        <van-tab title="视频" name="d">内容 4</van-tab>
      </van-tabs>
    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {

        activeName: 'a',
        mojin: '',
        show: false,
        dot: true,
        isshow: false,
        vars: '',
        list: '',
        liste:'',
        value:'',
        a:[]


      }
    },
    methods: {

      e() {
        this.$router.push({
          path:'/zuijin',
          query:{
            id: this.id
          }
        })
      },
      ge() {
        this.$router.push({
          path:'/plaza',
          query:{
            search: this.List
          }
        })
      },
      onSearch(val) {
        this.$router.push({
          path: '/seek',
          query: {
            search: this.value
          }
        })

        console.log(val);
      },
      mylove(y) {
        this.$router.push({
          path:'/music',
          query: {
            id: y
          },
        })
        console.log(y)
      },
      tiao() {
        this.$router.push({
          path: '/register'
        })
      },
      showPopup() {
        this.show = true;
      },
      dianji() {
        this.isshow = !this.isshow
      },
      onCancel() {
        var jiji = document.getElementById('jiji');
        jiji.style.display = "none";
      },
    },
    created() {
      var _this = this;
      var List = this.$route.query.search; //接收参数
      console.log(List)
       _this.id = List;
      this.$axios({
          methods: 'post',
          url: 'https://tree.xingyuncm.cn//user/detail',
          params: {
            uid: List
          }
        })
        .then(function(yuan) {
          _this.list = yuan.data.profile;
          console.log(yuan.data.profile)
        }),
        //用户歌单
        this.$axios({
            methods: 'post',
            url: 'https://tree.xingyuncm.cn//user/playlist',
            params: {
              uid: List
            }
          })
          .then(function(hah) {
            _this.liste = hah.data.playlist;
            console.log(hah.data.playlist)
          })
          this.$axios({
              methods: 'post',
              url: 'https://tree.xingyuncm.cn//comment/hotwall/list',
              params: {
              }
            })
            .then(function(a) {
              _this.a = a.data.data;
              console.log(a.data.data)
            })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .van-cell--clickable{width: 120%; margin-left: -11.4%;}
  .van-grid{width: 120%;margin-left: -11.6%;}
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 140px;
      text-align: center;
    }
    .van-swipe-item{
      height: 140px;
    }
    .van-swipe-item img{
      height: 157px;
    }
  #zuijin img{
    width: 40%;
  }
  #jin img{
    width: 19.7%;
  }
  .van-search{background-color: #000000;}
  #love img {
 width: 80px;
  }

  .van-tabs__line {
    background-color: #000000;
  }

  [class*=van-hairline]::after {
    border: 0px;


  }



  .van-icon-wap-nav::before {
    font-size: 30px;
    color: white;
    width: 10%;
    margin-left: -10%;
    display: flex;
    justify-content: flex-start;
  }


  .van-icon-arrow-left::before {
    color:#000000;
  }

  .van-icon-search::before {
    color: white;
  }
</style>

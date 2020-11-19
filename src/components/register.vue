<template>

  <div>
    <!-- 手机号 -->
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <!-- 密码 -->
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <!-- 按钮 -->
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit" @click="didi">
        提交
      </van-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        list:'',

      };
    },
    methods: {
      didi() {
        var _this = this;
        this.$axios({
            methods: 'post',
            url: 'https://tree.xingyuncm.cn//login/cellphone',
            params: {
               phone:this.username,
               password:this.password
            }
          })
          .then(function(yuan) {
            _this.list = yuan.data.account.id;
            console.log(yuan.data.account.id)
            // 异步传值
            _this.$router.push({
              path: '/',
              query: {
                search: _this.list,
              },
            })
          })
      },
    },
  };
</script>

<style>
</style>

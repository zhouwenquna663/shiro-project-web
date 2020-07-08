<template>
  <div class="left">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"

          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="goTo('user')">账号列表</el-menu-item>
              <el-menu-item index="1-2">角色管理</el-menu-item>
              <el-menu-item index="1-3">权限管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      goTo(path){
          this.$router.replace(path);
      }
  }
}
</script>
<style scoped>
.left{
    width: 200px;
    height: 100%;
    background-color: rgb(129, 183, 238);
}
.left /deep/ .el-menu{
    border: none;
}
</style>
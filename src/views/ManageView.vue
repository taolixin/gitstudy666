<template>
   <div>
    <el-container>
      <el-header>
        <h2>点餐平台</h2>
        <h2>管理</h2>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <span class="el-dropdown-link">
              欢迎：18742518888
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <div class="demo-type">
              </div>
              <el-dropdown-item>登录</el-dropdown-item>
              <el-dropdown-item>注册</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>

            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo"  router>

            <el-menu-item index="/">
              <el-icon><HomeFilled /></el-icon>
              <span>主页</span>
            </el-menu-item>
            <el-menu-item index="/food">
              <el-icon>
                <document />
              </el-icon>
              <span>菜品</span>
            </el-menu-item>
            <el-menu-item index="/order">
              <el-icon><MessageBox /></el-icon>
              <span>订单</span>
            </el-menu-item>
            <el-menu-item index="/manage">
              <el-icon><HelpFilled /></el-icon>
              <span>管理</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <el-icon><Avatar /></el-icon>
              <span>关于</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          管理
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script >
  export default{
    name:"ManageView"
  }

</script>

<style lang="scss" scoped>
.el-header {
  background: #b3c0d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.el-aside {
  background: #d3dce6;
  height: calc(100vh - 60px)
}

.el-main {
  background: url(../../public/1.jpg);
  opacity: .5;
}
.el-dropdown-link{
  display: flex;
  align-items: center;
}
.el-menu-item{
  background: #d3dce6;
}
</style>
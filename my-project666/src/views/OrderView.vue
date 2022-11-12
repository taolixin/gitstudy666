<template>
  <div>
    <el-container>
      <el-header>
        <h2>点餐平台</h2>
        <h2>订单</h2>
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
          <el-menu default-active="2" class="el-menu-vertical-demo" router>
            <el-menu-item index="/">
              <el-icon>
                <HomeFilled />
              </el-icon>
              <span>主页</span>
            </el-menu-item>
            <el-menu-item index="/food">
              <el-icon>
                <document />
              </el-icon>
              <span>菜品</span>
            </el-menu-item>
            <el-menu-item index="/order">
              <el-icon>
                <MessageBox />
              </el-icon>
              <span>订单</span>
            </el-menu-item>
            <el-menu-item index="/manage">
              <el-icon>
                <HelpFilled />
              </el-icon>
              <span>管理</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <el-icon>
                <Avatar />
              </el-icon>
              <span>关于</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <nav class="orderNav">
            <h4 class="all">订单号<span></span></h4>
          </nav>
          <div class="box">
            <table>
              <tr>
                <td>序号</td>
                <td>菜名</td>
                <td>价格</td>
                <td>
                  数量
                </td>
                <td>小计</td>
                <td>品类</td>
                <td>删除</td>

              </tr>
              <tr v-for="(item,index) in this.dataList" v-bind:key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <button @click="handleDown(index)">-</button>
                  <input type="text" v-model="item.num">
                  <button @click="handleUp(index)">+</button>
                </td>
                <td>{{ item.num * item.price }}</td>
                <td>{{ item.classify }}</td>
                <td><a href="#"  @click="remove(index)">删除</a></td>
              </tr>
            </table>
            <!-- <div>总金额：<span>{{all}}</span></div> -->
            <div class="zongji">总计：<input type="text" :value="all"></div>
            <el-button type="primary" class="submit">提交结算</el-button>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script >

export default {
  name: "OrderView",
  data() {
    return {
      dataList: [{
        "name": "口水鸡", "id": "1", "price": "38", "classify": "凉菜", "redu": "5", 'num': '1'
      },
      {
        "name": "土豆丝", "id": "2", "price": "12", "classify": "凉菜", "redu": "5", 'num': '1'
      },
      {
        "name": "拌黄瓜", "id": "3", "price": "16", "classify": "凉菜", "redu": "5", 'num': '1'
      },
      ]

    }
  },
  methods: {
    handleDown(index) {
      if (this.dataList[index].num > 1) {
        this.dataList[index].num--
      }
    },
    handleUp(index) {
      this.dataList[index].num++
    },
    remove:function(index){
         this.dataList.splice(index,1)
       }
  },
  computed: {
    all() {
      let ret = 0;
       this.dataList.forEach((v) => {
        ret += Number(v.num * v.price)
       })
      return ret
    }
  }
    
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
  opacity: .8;
}

.orderNav {
  text-align: center
}

// table{align: center;}
.el-dropdown-link {
  display: flex;
  align-items: center;
}

.el-menu-item {
  background: #d3dce6;
}

.all {
  list-style: none;
}

.all h4 {
  margin: 0 auto;
  width: 100%;
  opacity: 1;
}



table {
  width: 800px;
  margin: 0 auto;
  border: 1px solid #000000;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #000000;
  text-align: center;
}
.submit,.zongji{width: 300px;margin-left: 40%;margin-top: 20px;}

</style>
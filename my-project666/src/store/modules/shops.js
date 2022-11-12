//状态管理规划可以减少Ajax请求    在页面初始化就发请求，把数据第一次拿回来，就存入状态管理。如果后面页面需要这个数据可以直接用
// import http from '@utils/http'
const state={};
const getters={};
const mutations={};
const actions={};




export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
import axios from '../utils/request'
/**
 * 路径地址
 */
const base = {
    baseUrl: "http://localhost:5566",
    homehot1: "/api/home/hot1",
    homehot2: "/api/home/hot2"
}


/**
 * 请求方法
 */
const api = {
    //获取首页热门产品
    getHomtHot1() {
        return axios.get(base.baseUrl + base.homehot1)
    },
    getHomtHot2() {
        return axios.get(base.baseUrl + base.homehot2)
    }
}

export default api;
import React, { useState,useEffect } from "react";
import api from '../../../../api'
import HomeHotView from "../HomeHotView";


const HomeHotList = () => {

    const [hot1List, setHot1List] = useState([])
    const [hot2List, setHot2List] = useState([])

    useEffect(() => {
        api.getHomtHot1().then(res => {
            if (res.data.status === 200) {
                setHot1List(res.data.result)
            }
        })
    }, [])

    useEffect(() => {
        api.getHomtHot2().then(res => {
            if (res.data.status === 200) {
                setHot2List(res.data.result)
            }
        })
    }, [])
    return (
        <div>
            {
                hot1List.length > 0 ?
                    <HomeHotView data={hot1List} title={"热门商品"}/> :
                    <div>等待数据加载</div>
            }
            {
                hot2List.length > 0 ?
                    <HomeHotView data={hot2List} title={"新品推荐"}/> :
                    <div>等待数据加载</div>
            }
        </div>
    )
}

export default HomeHotList
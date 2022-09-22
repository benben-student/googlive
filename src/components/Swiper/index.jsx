import React, { useState } from "react"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'

const Swiper = (props) => {

    const [index, setIndex] = useState(0)

    function handleChangeIndex(index) {
        console.log(index);
    }

    return (
        <div >
            <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                <div >
                    <img src={banner1} alt="" />
                </div>
                <div >
                    <img src={banner2} alt="" />
                </div>
                <div >
                    <img src={banner3} alt="" />
                </div>
            </AutoPlaySwipeableViews>
        </div>
    )
}

export default Swiper
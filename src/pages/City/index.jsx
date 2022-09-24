import React, { useState } from "react";
import CityHeader from '../../components/PubHeader'
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";

const City = () => {

    const [city, setCity] = useState("北京")

    function onCityEvent(city) {
        setCity(city)
    }

    return (
        <div>
            <CityHeader title={"城市选择"} />
            <CurrentCity city={city} />
            <CityList onEvent={onCityEvent} />
        </div>
    )
}

export default City
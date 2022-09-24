import { INIT_CITY, CHENAGE_CITY } from "../constants"

const defaultState = {
    cityName: "北京"
}

const City = (state = defaultState, action) => {
    switch (action.type) {
        case INIT_CITY:
            return {
                cityName: action.cityName
            }
        case CHENAGE_CITY:
            return
        default:
            return state
    }
}

export default City
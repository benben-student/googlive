import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../pages/Home"
import LifeService from "../pages/LifeService"
import Shop from "../pages/Shop"
import User from "../pages/User"
import BottomNav from "../components/BottomNav"

const AppRouter = () => {
    return (
        <Router>
            <BottomNav />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/life" component={LifeService}></Route>
                <Route path="/shop" component={Shop}></Route>
                <Route path="/user" component={User}></Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
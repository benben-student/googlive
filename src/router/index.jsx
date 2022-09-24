import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Layout from "../pages/Main/Layout"
import Home from "../pages/Main/Home"
import LifeService from "../pages/Main/LifeService"
import Shop from "../pages/Main/Shop"
import User from "../pages/Main/User"
import BottomNav from "../components/BottomNav"
import City from "../pages/City"
const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/city" component={City}></Route>
                <Layout path="/">
                    <BottomNav />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/life" component={LifeService}></Route>
                        <Route path="/shop" component={Shop}></Route>
                        <Route path="/user" component={User}></Route>
                    </Switch>
                </Layout>
            </Switch>
        </Router>
    )
}

export default AppRouter
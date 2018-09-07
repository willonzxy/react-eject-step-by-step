/*
 * @Author: willon 
 * @Date: 2018-09-06 15:22:58 
 * @Last Modified by: willon tel:13189679384
 * @Last Modified time: 2018-09-07 14:31:39
 */
import React from "react"
import { Router,Route,IndexRoute,browserHistory } from 'react-router'

/** 引入呈现组件 */
import App from '../App'
import Test from '../view/Test'
import Test2 from '../view/Test2'

/** 路由组件配置 */
const Routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Test} />
            <Route path="test" component={Test}/>
            <Route path="test2" component={Test2}/>
        </Route>
    </Router>
)

export default Routes
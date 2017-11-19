import React,{Component} from 'react';
import {Router,Route,IndexRoute,hashHistory,browserHistory,Redirect} from 'react-router';

import App from './components/App'
import Home from './components/Home'
import MachineList from './components/MachineList'
import About from './components/About'
import Salemycar from './components/Salemycar'
import Srdz from './components/Srdz'
import Pop from './components/Pop'
import Error from './components/Error'
import Member from "./components/Member";
import Detail from "./components/Detail";
import ShopCar from "./components/ShopCar";


const RouterConfig=()=>(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="machineList" component={MachineList}/>
      <Route path="shopCar" component={ShopCar}/>
      <Route path="detail" component={Detail}>
        <IndexRoute component={Detail}/>
        <Route path=":aid" component={Detail}/>
      </Route>
      <Route path="about" component={About}/>
      <Route path="salemycar" component={Salemycar}/>
      <Route path="srdz" component={Srdz}/>
      <Route path="member" component={Member}/>
      <Route path="pop" component={Pop}>
        {/*<Route path="login" component={Login}/>
        <IndexRoute component={Login}/>
        <Route path="reg" component={Reg}/>*/}
      </Route>
      <Route path="*" component={Error}/>
    </Route>
  </Router>
);

export default RouterConfig;
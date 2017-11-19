import React,{Component} from 'react';
import NavBar from './NavBar'
import HeaderSearch from './HeaderSearch'
import FootBar from './FootBar'
import Rightbar from './Rightbar'
import Pop from "./Pop";
import '../assets/css/index.css';

class App extends Component{
  render(){
    return (
      <div>
        <NavBar/>
        <HeaderSearch/>
        <Pop/>
        {/*路由展示区*/}
        {this.props.children}
        <FootBar/>
        <Rightbar/>
      </div>
    );
  }
}
export default App;
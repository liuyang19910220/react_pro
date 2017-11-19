import React, {Component} from 'react';
import {Link} from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div id="header">
          <div className="top">
            <div className="wrap clearfix"><a href="#" className="logo left"><img src="/src/assets/images/logo.png"/></a>
              <div className="nav left dInline" id="headerMenu">
                <Link to="/home" activeClassName="on">首页</Link>
                <Link to="/about" activeClassName="on">关于亿金</Link>
                <Link to="/machineList" activeClassName="on">我要买车</Link>
                <Link to="/salemycar" activeClassName="on">我要卖车</Link>
                <Link to="/srdz" activeClassName="on">私人定制</Link>
                <Link to="/member" id="MemberMenuChange" activeClassName="on">会员中心</Link>
              </div>
              <span className="right" id="rightMenuHtml">
                {/*在此点击-->弹出框---状态管理来处理*/}
				        <a href="javascipt:;" className="b-login" >登录</a>|
                <a href="javascipt:;" id="b-regist">注册</a>
                |&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="/src/assets/images/tel.png"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
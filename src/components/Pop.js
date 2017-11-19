import React, {Component} from 'react';
import '../assets/css/about.css';
import {Link} from 'react-router';

class Pop extends Component {
  constructor(props){
    super(props);
    this.state={
      showPop:false,
      currentIndex:0,
      login:'block',
      reg:'none'
    }
  }

  changeIndex(index){
    this.setState({currentIndex:index});
    index==0 ? this.state.login='block' : this.state.login='none';
    index==1 ? this.state.reg='block' : this.state.reg='none'
  }

  handleHide(ev){
    this.setState({
      showPop:!this.state.showPop
    })
  }

 /* componentDidMount(){

  }*/

  render() {
    return (
      <div>
        {this.state.showPop &&<div id="popBox" ref="popBox">
          <div className="popCont">
            <a className="p_closed" onClick={this.handleHide.bind(this)}>关闭</a>

            <div className="p-tab">
              <a onClick={this.changeIndex.bind(this,0)} id="b-login" href="javascipt:;" className={this.state.currentIndex==0 ? 'on':''  }>会员登录</a>
              <a onClick={this.changeIndex.bind(this,1)} href="javascipt:;" className={this.state.currentIndex==1 ? 'on':''  }>会员注册</a>
            </div>
            <div className="p-detail">
              {/*login    0*/}
              <div className="p-dl" style={{display:this.state.login}}>
                <form   encType="multipart/form-data" method="post" name="form" id="form">
                  <ul className="login-items">
                    <li>
                      <label>用户名(手机号)</label>
                      <input className="input" type="text" value="" maxLength="32"  name="username" placeholder="请输入您的手机号"/>
                    </li>
                    <li>
                      <label>密码</label>
                      <input className="input" type="password" value="" maxLength="16"  name="password"/>
                    </li>
                  </ul>
                  <div className="login-check">
                    <input type="checkbox" name="checkbox" style={{ width:'auto'}} />
                    <label>记住我</label>
                    <a href="javascript:;">忘记登录密码？</a>
                  </div>
                  <div className="login-button">
                    <input type="hidden" value="" name="carid" className="ordercarid" />
                    <input type="hidden" value="" name="carstatus" className="orderstatus" />
                    <input type="button"  value="登&nbsp;&nbsp;&nbsp;&nbsp;陆" className="fM"  />
                  </div>

                </form>
              </div>
              {/*reg*/}
              <div className="p-dl" style={{display:this.state.reg}}>
                <form className="registForm"  encType="multipart/form-data" method="post" name="reg" id="reg">
                  <ul className="login-items">
                    <li className="clearfix">
                      <input className="input" name="mobile" id="mobile" type="text" value="" placeholder="手机号码（登录帐号）"/>
                    </li>
                    <li className="clearfix">
                      <input className="input left" type="text" value=""  name="verify" placeholder="输入验证码" style={{width:'100px'}} />
                      <div id="send"><a href="#" className="send_code right">获取验证码</a></div>
                    </li>
                    <li className="clearfix">
                      <input className="input" type="text" value=""  name="realname" placeholder="姓名"/>
                    </li>
                    <li className="clearfix sex">
                      <input type="radio" checked="" name="gender" value="M" /> 男&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="gender" value="F" /> 女
                    </li>
                    <li className="clearfix">
                      <input id="" className="input" type="password" name="password" value="" placeholder="输入密码（六位字符）"/>
                    </li>
                  </ul>

                  <div className="login-button">
                    <input type="hidden" value="" name="carid" className="ordercarid" />
                    <input type="hidden" value="" name="carstatus" className="orderstatus" />
                    <input type="button"  value="立即注册" className="fM"  />
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>}


      </div>

    )
  }
}

export default Pop;
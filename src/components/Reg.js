import React, {Component} from 'react';
import '../assets/css/about.css';
import {Link} from 'react-router';

class Pop extends Component {
  render() {
    return (

      <div className="p-dl">
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



    )
  }
}

export default Pop;
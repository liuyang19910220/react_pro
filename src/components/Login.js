import React, {Component} from 'react';
import '../assets/css/about.css';
import {Link} from 'react-router';

class Pop extends Component {
  render() {
    return (


      <div className="p-dl">
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




    )
  }
}

export default Pop;
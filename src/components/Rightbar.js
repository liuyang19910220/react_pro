import React, {Component} from 'react';

class Rightbar extends Component{
  render() {
    return (

        <div id="miniBus" style={{right: '-270px'}}>
          <div className="mini-bar">
            <div className="mini-barlist">
              <ul>
                <li className="miItem">
                  <div className="mini-mi browse">
                    <i className="mini-ease"></i>
                    <code></code>
                    <span>最近浏览</span>
                  </div>
                </li>
                <li className="miItem">
                  <div className="mini-mi collec">
                    <i className="mini-ease"></i>
                    <code></code>
                    <span>我的收藏</span>
                  </div>
                </li>
                <li>
                  <div className="mini-mi service">
                    <i className="mini-ease" id="BizQQWPA"></i>
                    <code></code>
                    <span>在线客服</span>

                  </div>
                </li>
                <li className="callItem">
                  <div className="mini-mi callback">
                    <i className="mini-ease"></i>
                    <code></code>
                    <span>意见反馈</span>
                  </div>
                </li>
                <li className="miItem">
                  <div className="mini-mi shopping">
                    <i className="mini-ease"></i>
                    <code></code>
                    <span>对比车辆</span>
                    <abbr id="Dbnumber">0</abbr>
                  </div>
                </li>
              </ul>
            </div>
            <a className="mini-gotop"></a>
            <a className="wx1"><img src="/src/assets/images/wx_1.png"/></a>
            <div className="wmImg hide">
              <img src="/src/assets/images/wx_2.png"/>
            </div>
          </div>

          <div className="mini-cont">
            <div className="mini-contlist">
              <div className="mini-ni">
                <div className="mini-h clearfix">
                  <a className="mini-close mini-ease lf-fl"></a>
                  <span className="lf-fr"><code>最近浏览</code></span>
                </div>
                <div className="miList" id="Liulan">
                  <ul>
                  </ul>
                </div>
              </div>
              <div className="mini-ni">
                <div className="mini-h clearfix">
                  <a className="mini-close mini-ease lf-fl"></a>
                  <span className="lf-fr"><code>我的收藏</code></span>
                </div>
                <div className="miList" id="shoucang">
                  <ul>
                  </ul>
                  <a href="javascript:void(0)" className="mini-fav b-login">查看更多收藏</a>
                </div>
              </div>

              <div className="mini-ni" id="shopping">
                <div className="mini-h clearfix">
                  <a className="mini-close mini-ease lf-fl"></a>
                  <span className="lf-fr"><code>对比车辆</code></span>
                  <span className="lf-fr" style={{margin: 'auto 10px', 'fontSize': '26px', 'fontWeight': 'bolder'}}
                        id="deletealldb"><a><code>×</code></a></span>
                </div>
                <div className="miList" id="Carduibi">
                  <ul>
                  </ul>
                  <a href="#" className="mini-fav">立即对比</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lf-view" id="lf-view">
            <form  encType="multipart/form-data" method="post" name="leaveMess"
                  id="leaveMess">
              <b>您对我们的看法~</b>
              <div>
                <textarea placeholder="您的声音对我们很重要哟(必填)~" name="bankAuthSrc"></textarea>
              </div>
              <div>
                <a id="viewSubmit" ></a>
                <input type="text" placeholder="请留下您的手机号码(必填)" id="viewAbout" name="mobile"/>
              </div>
            </form>
            <a id="viewClose"></a>
            <i id="viewIcon"></i>
            <p id="viewSign"></p>
          </div>
        </div>

  );
  }
  }

  export default Rightbar;
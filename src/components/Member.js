import React, {Component} from 'react';
import '../assets/css/hurst.css';

class Member extends Component {
  render() {
    return (
      <div>

        <div id="about">
          <div className="mTags wrap">
            <a href="#">亿金名车广场</a>><a href="javascript:;">会员中心</a>
          </div>
          <div className="mebBox">
            <div className="meb-cont clearfix wrap">
              <div className="meb-nav left dInline">
                <ul className="clearfix">
                  <li className="on"><a href="会员中心首页.html">会员中心</a></li>
                  <li ><a href="会员中心_我的需求.html">我的需求</a></li>
                  <li><a href="会员中心_我的车.html">我的车</a></li>
                  <li><a href="会员中心_账户管理.html">账户管理</a></li>
                </ul>
              </div>
              <div className="meb-right right dInline">
                <div className="mr-top">
                  <div className="mr-top-div clearfix">
        <span className="left">
            <img src="/src/assets/images/photo.png"/>
        </span>
                    <div className="mr-infor left dInline">
                      <h2>中午好，尊敬的会员 <b>董平运</b></h2>
                      <p>
                        手机：15138911875   邮箱：  |  [ <a href="/Member/manage/channel/7/list/15">管理账户信息</a> ]
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mr-detail">
                  <div className="me-box">
                    <div className="mx-a">
                      <ul className="clearfix">
                        <li>
                          <img src="/src/assets/images/hu1.png"/>
                          <span>您目前有 <a href="/Member/need/channel/7/list/11"><b>1</b></a> 个订单未付定金</span>
                        </li>
                        <li>
                          <img src="/src/assets/images/hu2.png"/>
                          <span>您共有 <a href="/Member/need/channel/7/list/11/tpl/4"><b>1</b></a> 个收藏的车型</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mx-b">
                      <ul>
                        <li className="clearfix">
									<span className="left">
										<img src="/src/assets/images/hu3.png"/>
									</span>
                          <div className="mb-txt left dInline">
                            <h2>马上参加 <a href="/Tailor/index/channel/4.html">私人定制</a> </h2>
                            <p>没有您满意的车型吗，马上参加量身定制可预订指定车型，亿金名车为您量身定制</p>
                          </div>
                        </li>
                        
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

  )
  }
  }

  export default Member;
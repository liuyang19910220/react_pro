import React,{Component} from 'react';
import {Link} from 'react-router';
class FootBar extends Component{
  render(){
    return (
      <div className="foot-btn" >

        <div id="footer">
          <div className="foot-a1">
            <div className="wrap">
              <ul className="clearfix">
                <li><img src="/src/assets/images/db1.png"/>
                  <p>365项检测认证</p>
                </li>
                <li><img src="/src/assets/images/db2.png"/>
                  <p>5000公里无需保养</p>
                </li>
                <li><img src="/src/assets/images/db3.png"/>
                  <p>1年或两万公里无忧质保</p>
                </li>
                <li><img src="/src/assets/images/db4.png"/>
                  <p>7天无忧退换</p>
                </li>
                <li><img src="/src/assets/images/db5.png"/>
                  <p> 置换有增值</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-a">
            <div className="wrap clearfix">
              <div className="fDl left dInline "><strong>亿金承诺</strong>
                <ul>
                  <li><a href="#">365项严苛检测</a></li>
                  <li><a href="#">5000公里无需保养</a></li>
                  <li><a href="#">一年或两万公里质保</a></li>
                  <li><a href="#">7天退换</a></li>
                </ul>
              </div>
              <div className="fDl left dInline "><strong>买卖二手车指南</strong>
                <ul>
                  <li><a href="#" target="_blank">“禁止长时间停车”到底能</a></li>
                  <li><a href="#" target="_blank">20年前开桑塔纳的大款们，</a></li>
                  <li><a href="#" target="_blank">豪华入门跨界车之争,奔驰G</a></li>
                  <li><a href="#" target="_blank">像初恋一样爱它，该给它怎</a></li>
                  <li><a href="#" target="_blank">常开车不等于会开车 你的</a></li>
                </ul>
              </div>
              <div className="fDl left dInline "><strong>售后服务</strong>
                <ul>
                  <li><a href="#">24小时道路救援</a></li>
                  <li><a href="#">豪车凹陷修复</a></li>
                  <li><a href="#">定期上门维修保养服务</a></li>
                  <li><a href="#">预约保养工时优惠</a></li>
                </ul>
              </div>
              <div className="fDl left dInline "><strong>关于亿金</strong>
                <ul>
                  <li><a href="#" target="_blank">亿金动态</a></li>
                  <li><a href="#" target="_blank">亿金荣誉</a></li>
                  <li><a href="#" target="_blank">亿金优势</a></li>
                  <li><a href="#" target="_blank">联系亿金</a></li>
                  <li><a href="#" target="_blank">评估团队</a></li>
                </ul>
              </div>
              <div className="fDl left dInline "><strong>亿金文化</strong>
                <ul>
                  <li><a href="#">中原文化</a></li>
                  <li><a href="#">立天下</a></li>
                  <li><a href="#">改变、规范、引领一方市场</a></li>
                  <li><a href="#">颠覆中原人购车理念</a></li>
                </ul>
              </div>
              <div className="fDl left dInline fDl1">
                <div className="dLx"><img src="/src/assets/images/dLx.jpg"/></div>
                <div style={{height:'50px'}}></div>
              </div>
            </div>
          </div>
          <div className="foot-b"> Copyright © 2015 qcauto All Rights Reserved 河南亿金有限公司 版权所有 豫ICP备123456789号<br/>
            地址：郑州市管城区紫荆山东大街裕鸿花园 服务热线：400-888-6666<br/>
          </div>
        </div>

      </div>
    );
  }
}
export default FootBar;
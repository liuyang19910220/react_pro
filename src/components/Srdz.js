import React, {Component} from 'react';
import '../assets/css/ding.css';

class Salemycar extends Component {
  render() {
    return (
      <div>

        <div id="about">
          <div className="mTags">
            <div className="wrap"> <a href="#">亿金汽车</a>><a href="4.html">私人定制</a> </div>
          </div>
          <div className="dBox">
            <div className="dzDetail">
              <div className="wrap clearfix">
                <div className="dzLeft left dInline"> <strong>私人定制</strong>
                  <p> 私人定制是根据您对车辆品牌、车型、颜色、内饰、配置、年限、公里数等的需求进行定制化服务，公司将全国范围内搜寻相匹配的优质车源，供您挑选，让爱车真正成为您的专属座驾。 </p>
                </div>
                <input type="hidden" id="ckmobile" value="1" />
                <div className="diForm">
                  <form id="dForm" name="dForm" method="post" >
                    <h3>提交信息，帮您量身定制！</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td><select className="Smakeid" name="makeid"  id="" placeholder="所属品牌">
                            <option value=""> 选择品牌（必选）</option>
                            <option value="9" > A 奥迪</option>
                            <option value="92" > A 阿尔法·罗密欧</option>
                          </select></td>
                        </tr>
                        <tr>
                          <td><div id="xlselect">
                            <select className="" name="modeid"  id="" placeholder="所属车型">
                              <option value=""> 选择车系（必选）</option>
                            </select>
                          </div></td>
                        </tr>
                        <tr>
                          <td><select name="years">
                            <option value="不限">选择使用年限</option>
                            <option value="1年以内">1年以内</option>
                            <option value="2年以内">2年以内</option>
                            <option value="3年以内">3年以内</option>
                            <option value="3-5年">3-5年</option>
                            <option value="5年以上">5年以上</option>
                          </select></td>
                        </tr>
                        <tr>
                          <td><input type="text" value="" placeholder="计划购买时间" style={{padding:0}} className="form_datetime dateTxt" name="buytime" data-date-format="yyyy-mm"/></td>
                        </tr>
                        <tr>
                          <td><label className="f14">购买预算</label>
                            <input name="dprice" type="text" style={{padding:0}} className="ysTxt" />
                            <span>-</span>
                            <input name="hprice" type="text" style={{padding:0}} className="ysTxt" />
                            <label>万元</label></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td colSpan="2"><textarea name="content" className="f14" placeholder="其他要求（例如车身和内饰颜色、行驶里程要求等）"></textarea></td>
                        </tr>
                        <tr>
                          <td colSpan="2" style={{textAlign:'right'}}><input id="input-phone" type="hidden" name="mobile" value="" />
                            <input id="input-verify" type="hidden" name="verify" value="" />
                            <a href="javascript:void(0)" className="btn" id="sendMESS">参加私人定制</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
            <div style={{textAlign:'center',padding:"150px 0"}}> <img src="/src/assets/images/dz1.jpg"/> </div>
          </div>
        </div>


      </div>

  )
  }
  }

  export default Salemycar;
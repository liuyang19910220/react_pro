import React, {Component} from 'react';
import '../assets/css/sell.css';
import '../assets/css/alert.css';

class Salemycar extends Component {
  render() {
    return (
      <div>

        <div id="about">
          <div className="mTags wrap">
            <a href="#">亿金名车广场</a>><a href="3.html">我要卖车</a>
          </div>
          <div className="sellBox">
            <div className="sellTop">
              <div className="wrap">
                <div className="selDetail">
                  <div className="sel-a left dInline">
                    <ul className="clearfix">
                      <li>
                        <img src="/src/assets/images/sell1_1.png"/>
                        <strong>流程简单</strong>
                      </li>
                      <li>
                        <img src="/src/assets/images/sell1_2.png"/>
                        <strong>快速回款</strong>
                      </li>
                      <li className="last">
                        <img src="/src/assets/images/sell1.png" style={{color:"#000"}}/>
                        <strong>诚信服务</strong>
                      </li>
                    </ul>
                    <p>
                      <strong style={{fontSize:'24px'}}>亿金标准</strong><br/><br/>
                      车龄不超过4年<br/>
                      行驶里程不超过80000公里<br/>
                      无结构性损伤，非事故车、泡水车或火烧车<br/>
                      具有完备、合法的车辆手续
                    </p>
                  </div>
                  <div className="sell-form right dInline">
                    <form encType="multipart/form-data" action="" method="post" name="forms" id="forms"
                          >
                      <h3>登记您的爱车信息</h3>
                      <div className="sell-info" style={{marginTop:"5px"}}>
                        <div className="select-item clearfix">
                          <select className="select car-select" name="makeid" id="makeCar" style={{width:'100%'}}>
                            <option value="">请选择品牌</option>
                            <option value="9">A 奥迪</option>
                            <option value="92">A 阿尔法·罗密欧</option>
                            <option value="97">A 阿斯顿·马丁</option>
                            <option value="184">B 保斐利</option>
                            <option value="82">B 保时捷</option>
                            <option value="127">B 别克</option>
                            <option value="163">B 北京</option>
                            <option value="14">B 北汽制造</option>
                            <option value="168">B 北汽威旺</option>
                            <option value="211">B 北汽幻速</option>
                            <option value="216">B 北汽新能源</option>
                            <option value="195">B 北汽绅宝</option>
                            <option value="59">B 奔腾</option>
                            <option value="2">B 奔驰</option>
                            <option value="3">B 宝马</option>
                            <option value="157">B 宝骏</option>
                            <option value="85">B 宾利</option>
                            <option value="172">B 巴博斯</option>
                            <option value="135">B 布加迪</option>
                            <option value="26">B 本田</option>
                            <option value="5">B 标致</option>
                            <option value="15">B 比亚迪</option>
                            <option value="221">C 成功</option>
                            <option value="129">C 昌河</option>
                            <option value="21">C 长城</option>
                            <option value="159">C 长安商用</option>
                            <option value="230">C 长安跨越</option>
                            <option value="136">C 长安轿车</option>
                            <option value="179">D DS</option>
                            <option value="29">D 东南</option>
                            <option value="27">D 东风</option>
                            <option value="235">D 东风·郑州日产</option>
                            <option value="205">D 东风小康</option>
                            <option value="215">D 东风御风</option>
                            <option value="197">D 东风风度</option>
                            <option value="141">D 东风风神</option>
                            <option value="115">D 东风风行</option>
                            <option value="8">D 大众</option>
                            <option value="106">D 大宇</option>
                            <option value="165">D 大通MAXUS</option>
                            <option value="113">D 道奇</option>
                            <option value="7">F 丰田</option>
                            <option value="91">F 法拉利</option>
                            <option value="208">F 福汽启腾</option>
                            <option value="17">F 福特</option>
                            <option value="128">F 福田</option>
                            <option value="67">F 福迪</option>
                            <option value="40">F 菲亚特</option>
                            <option value="199">F 飞驰商务车</option>
                            <option value="109">G GMC</option>
                            <option value="110">G 光冈</option>
                            <option value="147">G 广汽传祺</option>
                            <option value="63">G 广汽吉奥</option>
                            <option value="182">G 观致汽车</option>
                            <option value="44">H 华普</option>
                            <option value="112">H 华泰</option>
                            <option value="225">H 华颂</option>
                            <option value="196">H 哈弗</option>
                            <option value="31">H 哈飞</option>
                            <option value="181">H 恒天汽车</option>
                            <option value="108">H 悍马</option>
                            <option value="45">H 汇众</option>
                            <option value="170">H 海格</option>
                            <option value="32">H 海马</option>
                            <option value="149">H 海马商用车</option>
                            <option value="58">H 红旗</option>
                            <option value="52">H 黄海</option>
                            <option value="4">J Jeep</option>
                            <option value="152">J 九龙</option>
                            <option value="34">J 吉利汽车</option>
                            <option value="98">J 捷豹</option>
                            <option value="38">J 江南</option>
                            <option value="35">J 江淮</option>
                            <option value="37">J 江铃</option>
                            <option value="224">J 江铃集团轻汽</option>
                            <option value="39">J 金杯</option>
                            <option value="51">K 克莱斯勒</option>
                            <option value="220">K 凯翼</option>
                            <option value="107">K 凯迪拉克</option>
                            <option value="213">K 卡威</option>
                            <option value="188">K 卡尔森</option>
                            <option value="241">K 康迪</option>
                            <option value="150">K 开瑞</option>
                            <option value="145">K 科尼赛克</option>
                            <option value="218">K 科瑞斯的</option>
                            <option value="86">L 兰博基尼</option>
                            <option value="76">L 力帆</option>
                            <option value="80">L 劳斯莱斯</option>
                            <option value="95">L 林肯</option>
                            <option value="153">L 猎豹汽车</option>
                            <option value="166">L 理念</option>
                            <option value="146">L 莲花</option>
                            <option value="200">L 蓝海房车</option>
                            <option value="83">L 路特斯</option>
                            <option value="96">L 路虎</option>
                            <option value="16">L 铃木</option>
                            <option value="36">L 陆风</option>
                            <option value="229">L 雷丁电动</option>
                            <option value="94">L 雷克萨斯</option>
                            <option value="99">L 雷诺</option>
                            <option value="79">M MG</option>
                            <option value="81">M MINI</option>
                            <option value="93">M 玛莎拉蒂</option>
                            <option value="55">M 美亚</option>
                            <option value="183">M 迈凯伦</option>
                            <option value="88">M 迈巴赫</option>
                            <option value="18">M 马自达</option>
                            <option value="155">N 纳智捷</option>
                            <option value="104">O 欧宝</option>
                            <option value="171">O 欧朗</option>
                            <option value="84">O 讴歌</option>
                            <option value="Q1441684582">Q 亿金</option>
                            <option value="156">Q 启辰</option>
                            <option value="42">Q 奇瑞</option>
                            <option value="43">Q 庆铃</option>
                            <option value="28">Q 起亚</option>
                            <option value="30">R 日产</option>
                            <option value="142">R 瑞麒</option>
                            <option value="78">R 荣威</option>
                            <option value="89">s smart</option>
                            <option value="25">S 三菱</option>
                            <option value="137">S 世爵</option>
                            <option value="50">S 双环</option>
                            <option value="102">S 双龙</option>
                            <option value="209">S 山姆</option>
                            <option value="111">S 斯巴鲁</option>
                            <option value="10">S 斯柯达</option>
                            <option value="103">S 萨博</option>
                            <option value="169">S 陕汽通家</option>
                            <option value="54">T 天马</option>
                            <option value="202">T 泰卡特</option>
                            <option value="189">T 特斯拉</option>
                            <option value="175">T 腾势</option>
                            <option value="56">T 通田</option>
                            <option value="46">W 万丰</option>
                            <option value="132">W 五十铃</option>
                            <option value="48">W 五菱</option>
                            <option value="186">W 威兹曼</option>
                            <option value="140">W 威麟</option>
                            <option value="19">W 沃尔沃</option>
                            <option value="207">W 潍柴英致</option>
                            <option value="57">X 厦门金龙</option>
                            <option value="71">X 新凯</option>
                            <option value="65">X 新大地</option>
                            <option value="62">X 新雅途</option>
                            <option value="174">X 星客特</option>
                            <option value="13">X 现代</option>
                            <option value="87">X 西雅特</option>
                            <option value="49">X 雪佛兰</option>
                            <option value="6">X 雪铁龙</option>
                            <option value="53">Y 一汽</option>
                            <option value="47">Y 仪征</option>
                            <option value="41">Y 依维柯</option>
                            <option value="75">Y 永源</option>
                            <option value="100">Y 英菲尼迪</option>
                            <option value="138">Y 野马汽车</option>
                            <option value="33">Z 中兴</option>
                            <option value="60">Z 中华</option>
                            <option value="64">Z 中客华北</option>
                            <option value="167">Z 中欧奔驰房车</option>
                            <option value="72">Z 中顺</option>
                            <option value="77">Z 众泰</option>
                            <option value="233">Z 知豆</option>
                          </select>
                        </div>
                        <div className="select-item clearfix">
                          <select className="select car-select" name="modeid" id="modeCar" style={{width:'100%'}}>
                            <option value="">请选择车系</option>
                          </select>
                        </div>
                        <div className="select-item clearfix">
                          <select className="select car-select" name="styleid" id="styleCar" style={{width:'100%'}}>
                            <option value="">请选择车型</option>
                          </select>
                        </div>

                        <div className="select-item clearfix">
                          <input type="text" value="" placeholder="上牌时间" className="form_datetime cPut" id="buytimeval"
                                 name="buytime" data-date-format="yyyy-mm" style={{float:'left', width:'150px'}}/>
                          <input type="text" name="mile" placeholder="行驶里程" value="" className="cPut" id="mialval"
                                 style={{float:"right"}}/>
                          <div className="unit">万公里</div>
                        </div>
                        <div className="seBtn">
                          <input id="input-phone" type="hidden" name="mobile" value=""/>
                          <input id="input-verify" type="hidden" name="verify" value=""/>
                          <a href="#showDiv" className="gj_btn">估一下价</a>
                          <a href="javascript:void(0)" id="sendMESS">提交</a>

                        </div>
                      </div>
                    </form>
                    <input type="hidden" id="ckmobile" value="1"/>

                  </div>
                </div>
              </div>
            </div>
            <div className="sell-a">
              <div className="wrap">
                <h2>二手车须知及流程</h2>
                <div className="sa-list">
                  <ul className="clearfix">
                    <li>
                      <img src="/src/assets/images/sell2_1.png"/>
                      <h4>准备手续</h4>
                      <p>

                        机动车登记证、行驶证、保养手册、身份证复印件等车辆资料
                      </p>
                    </li>
                    <li>
                      <img src="/src/assets/images/sell2_2.png"/>
                      <h4>上门评估</h4>
                      <p>
                        可以通过电话、网络提交评估需求，我们专业评估团队会及时联系您约上门评估时间和地点。

                      </p>
                    </li>

                    <li>
                      <img src="/src/assets/images/sell2_4.png"/>
                      <h4>确定价格</h4>
                      <p>
                        评估师根据车况反馈评估价格，结合车主售车意愿确定车辆价格。
                      </p>
                    </li>
                    <li className="last">
                      <img src="/src/assets/images/sell2_4.png"/>
                      <h4>手续办理</h4>
                      <p>
                        确定交易的车辆准备好相关手续，由车主本人现场签字办理相关手续。

                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="main-a">
              <div className="mDiv sell-b">
                <img src="/src/assets/images/sell3.jpg"/>
              </div>
            </div>
          </div>
          <div id="popBoxYzm" style={{display:'none'}}>
            <div className="popForm">
              <div className="p-detail">
                <form action="" encType="multipart/form-data" method="post" name="yzmcheck" id="yzmcheck">
                  <ul className="login-items" style={{width:"100%"}}>
                    <li>
                      <label>手机号</label>
                      <input type="text" value="" maxLength="32" name="mobile" id="shoujihao" style={{width:'120px'}}/>
                        <input type="checkbox" name="remembermobile" style={{ width:'auto', margin:'10px 20px 0'}} id="remembermobile"/>
                        <label>记住此号</label>
                    </li>
                    <li>
                      <label>验证码</label>
                      <input type="text" value="" maxLength="16" name="verify" id="yanzhengma"
                             style={{width:'120px', marginRight:'20px'}}/>
                        <img src="/src/assets/images/jzgu.png" id="yzcode" width="100" height="42" alt="点击切换"/>

                    </li>
                  </ul>
                  <div className="login-button">
                    <input type="button" value="立即提交" className="fM"  style={{lineHeight:"20px"}}/>
                  </div>
                </form>
              </div>
              <a className="closed">×</a>
            </div>
          </div>
          <div style={{display:'none'}}>
            <div id="showDiv">
              <div className="guBox">
                <h3>您的爱车</h3>
                <p>欧蓝德(进口) 2014款欧蓝德(进口)2.4L四驱豪华超值版7座 </p>
                <span>上牌时间：<font> 2014-12</font> </span><span>行驶里程： <font>1万公里</font></span>
                <h3>评估价：<strong>￥18.14万</strong></h3>
              </div>
              <img src="/src/assets/images/jzgu.png" className="s_gu"/>
            </div>
          </div>

        </div>


      </div>

  )
  }
  }

  export default Salemycar;
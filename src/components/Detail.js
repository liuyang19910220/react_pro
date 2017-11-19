import React, {Component} from 'react';
import '../assets/css/quanju.css';
import {Link} from 'react-router';
import $ from 'jquery'
class Detail extends Component {
  constructor() {
    super();
    this.state = {
      detail: {}
    }
  }

  componentDidMount() {
    console.log(this.props.location)
    let dataName = this.props.params.aid;//0,1,2,3,4,5
    fetch('/src/data/index.json').then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setTimeout(() => {
            this.setState({
              detail: data[dataName]
            })
          }, 500)
        })
      }
    }).catch((res) => {
      console.log('fetch error')
    });

   //放大镜切换图片

  }

  render() {
    return (
      <div>

        <div id="about">
          <div className="mTags wrap"><a href="#">亿金名车广场</a>><a href="#">我要买车</a>><a href="#">路虎 发现(进口) 2014 款 3.0T 自动
            四代SDV6
            HSE</a> <span className="right">对这辆车不满意，我要 <a href="#">私人订制</a></span></div>
          <div className="wrap clearfix buyTop" style={{paddingBottom: '40px'}}>
            <div className="left dInline" style={{width: "592px"}}>

              <div id="play">
                <ul className="img_ul">
                  {//条件渲染（三元运算符）
                    this.state.detail.img ?
                      (this.state.detail.img.map((val, index) => {
                        return (
                          <li key={index}><a className="img_a"><img src={val}/></a></li>
                        )
                      })) :""
                  }

                </ul>
                <a href="javascript:void(0)" className="prev_a change_a" title="上一张"> <span></span></a>
                <a href="javascript:void(0)" className="next_a change_a" title="下一张"> <span
                  style={{display: "inline "}}></span> </a>
              </div>
              {/*---------------fetch----------------*/}
              <div className="img_hd">
                <ul className=" clearfix1">
                    {//条件渲染（三元运算符）
                      this.state.detail.img ?
                        (this.state.detail.img.map((val, index) => {
                          return (
                            <li key={index}><a className="img_a"><img src={val}/></a></li>
                          )
                        })) :""
                    }

                </ul>
                <a className="bottom_a prev_a" style={{opacity: 0.7}}></a>
                <a className="bottom_a next_a" style={{opacity: 0.7}}></a>
              </div>

            </div>
            {/*--------------fetch------------------*/}
            <div className="buyTxt right dInline">
              <h1>{this.state.detail.title}</h1>
              <div className="byDl clearfix">
                <div className="price" style={{width: '235px'}}>
                  <p>亿金
                    一口 价：</p>
                  <span className="num nBlue"> {this.state.detail.price}</span> <font>万元</font>
                  <p style={{paddinTop: '6px'}}>{this.state.detail.newcarprice} <span style={{color: "#666"}}> (含89090元购置税)</span></p>
                  <div className="" style={{color: "#2e71b8"}}> {this.state.detail.saveprice}</div>
                </div>
                <div className="right dInline jPrice" style={{lineHeight: '22px'}}> 诺信汽车金融分期付款方案<br/>
                  <span>{this.state.detail.firstpay}</span> 此方案只针对经审核后确定资质合格的用户<br/>

                </div>
              </div>
              <div className="byDl clearfix byDl_tab"> <span className="left bItem">
        <div> 上牌时间
          <p>{this.state.detail.time?(this.state.detail.time).substr(5,7):''}</p>
        </div>
        </span> <span className="left bItem">
        <div> 行驶里程
          <p>2.6万公里</p>
        </div>
        </span> <span className="left bItem">
        <div> 排量
          <p>3.0T</p>
        </div>
        </span> <span className="left bItem">
        <div> 排放标准
          <p>国四</p>
        </div>
        </span></div>
              <div className="byBtn clearfix"><a className="by_qd b-login" href="javascript:void(0)">立即抢定</a> <a
                href="javascript:void(0)" className="balance_2">加入对比</a>
                <div className="jiathis_style_32x32"><a href="http://www.jiathis.com/share?uid=2069164" title="分享"
                                                        className="jiathis "
                                                        style={{
                                                          textDecoration: 'none',
                                                          textAlign: 'center',
                                                          display: 'inline-block',
                                                          height: '35px',
                                                          marginRight: "12px"
                                                        }}>分享</a>
                </div>


                <input type="hidden" className="CarValue_2"
                       value="{img:'/Uploads/PhotoGalley/2015-08-31/55e40527bdbd9.JPG-thumb.JPG',id:'2',price:'74.8',status:'加入对比',title:'路虎 发现(进口) 2014 款 3.0T 自动 四代SDV6 HSE',url:'/Cars/index/channel/2/id/2.html'}"/>
              </div>
              <div className="b_ly clearfix"><img src="/src/assets/images/tel1.png"/> 看车电话 <b>销售热线 (400-888-666)</b>
                <span className="right"> <a
                  id="QQZXFR" name=""><img src="/src/assets/images/qq1.png"/> 在线咨询</a>

        <a className="xsWx"> <img src="/src/assets/images/wx1.png"/> 微信咨询
        <div className="wx-img"> <img src="/src/assets/images/55e40d5761eac.jpg"/> </div>
        </a> </span>
                <div className="l_dizhi" style={{lineHeight: '35px', fontSize: '13px'}}> >看车地址：郑州市金水区花园北路与天伦路口东50米
                  <a><img src="/src/assets/images/address_01.png" width="12"/>[查看地图]</a></div>
              </div>
            </div>

          </div>
          <div className="wrap speciality lazy-mod" id="speciality">
            <ul className="clearfix unstyled">
              <li className="notbad" style={{width: "148px"}}><span> <i></i> </span> <em>杜绝事故车</em></li>
              <li className="choiceness" style={{width: "148px"}}><span> <i></i> </span> <em>精选优质名车</em></li>
              <li className="check_360" style={{width: "148px"}}><span> <i></i> </span> <em>365项检测认证</em></li>
              <li className="new_car_standa" style={{width: "148px"}}><span> <i></i> </span> <em>准新车上市车标准</em></li>
              <li className="O2O" style={{width: "148px"}}><span> <i></i> </span> <em>待售车辆专人护理</em></li>
              <li className="km" style={{width: '148px'}}><span> <i></i> </span> <em>5千公里无需保养</em></li>

              <li className="one_year_ok" style={{width: "148px"}}><span> <i></i> </span> <em>一年或2万公里无忧质保</em></li>

              <li className="hover_24" style={{width: '148px'}}><span> <i></i> </span> <em>24小时道路救援</em></li>
            </ul>
          </div>
          <div className="wrap">
            <div className="buyDetail">
              <div className="b_tab_nav">
                <div className="b-tab"><a className="on b_ta" href="#cBox1" data-scroll
                                          data-speed="1000">基本信息<i></i></a> <a
                  href="#cBox3" data-scroll data-speed="1000" className="b_ta">图片赏析<i></i></a>
                  <span
                    style={{float: 'right', fontSize: '14px', color: ' #2e71b8', marginRight: '30px'}}><b>看车电话：销售部 (400-888-666)</b></span>
                </div>
              </div>
              <div className="b-cont">
                <div id="cBox1" className="c_box">
                  <h2>路虎 发现(进口) 2014 款 3.0T 自动 四代SDV6 HSE</h2>
                  <div className="cbox-a">
                    <div className="ca-table">
                      <table>
                        <tbody>
                        <tr>
                          <td className="ca-td1">上牌时间</td>
                          <td>2014-07</td>
                          <td className="ca-td1">年检到期时间</td>
                          <td>2016-07</td>
                          <td className="ca-td1">强险到期时间</td>
                          <td>2016-07</td>
                          <td className="ca-td1">车辆编号</td>
                          <td>720214</td>
                        </tr>
                        <tr>
                          <td className="ca-td1">车身颜色</td>
                          <td>咖啡色</td>
                          <td className="ca-td1">车体形式</td>
                          <td>SUV</td>
                          <td className="ca-td1">变速箱</td>
                          <td></td>
                          <td className="ca-td1">排量</td>
                          <td>3.0T</td>
                        </tr>
                        <tr>
                          <td colSpan="8"><p>亿金名车，您身边的二手车专家！</p></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ca-dl"><span className="caItem on">基本信息</span>
                      <div className="clearfix">
                        <div className="jb_infor left">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">排放标准</td>
                              <td>国四</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">联系人</td>
                              <td className="ca-td1">销售热线 (15737112660)</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="jb_infor right">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">行驶里程</td>
                              <td>2.6万公里</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">车源状态</td>
                              <td className="ca-td1">已售</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="jb_infor left">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">内饰颜色</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="ca-td1">出厂日期</td>
                              <td className="ca-td1">2014-05</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="jb_infor right">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">驱动形式</td>
                              <td>不限</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">产地</td>
                              <td className="ca-td1">进口</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="jb_infor left">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">商业险到期日</td>
                              <td>已过期或暂无</td>
                            </tr>
                            <tr></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="ca-dl" id="cBox2"><span className="caItem on">配置信息</span>
                      <div className="clearfix">
                        <div className="jb_infor left">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">导航系统</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">中控台液晶屏</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">自动头灯</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">后视镜加热</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">发动机启停</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">防抱死制动系统</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">前驻车雷达</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">后倒车雷达</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">氙气大灯</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">倒车影像系统</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">驾驶员座椅电动调节</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">副驾驶座椅电动调节</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">大灯清洗</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">电动折叠后视镜</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">定速巡航</td>
                              <td>有</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="jb_infor right">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">座位数</td>
                              <td>5</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">排气量</td>
                              <td className="ca-td1">3.0T</td>
                            </tr>
                            <tr>
                              <td width="270">燃料形式</td>
                              <td>柴油</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">变速箱</td>
                              <td className="ca-td1">AT自动</td>
                            </tr>
                            <tr>
                              <td width="270">驱动方式</td>
                              <td>全时四驱</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">无钥匙进入</td>
                              <td className="ca-td1"></td>
                            </tr>
                            <tr>
                              <td width="270">无钥匙启动</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">全景天窗</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">真皮座椅</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">前排座椅加热</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">后排座椅加热</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">前排座椅通风</td>
                              <td className="ca-td1"></td>
                            </tr>
                            <tr>
                              <td width="270">后排座椅通风</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="ca-td1">前排座椅记忆</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">后排座椅记忆</td>
                              <td></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="ca-dl"><span className="caItem on">手续信息</span>
                      <div className="clearfix">
                        <div className="jb_infor left">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">购置税</td>
                              <td>已征收</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">行驶证</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            <tr>
                              <td width="270">新车质保</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="ca-td1">登记证</td>
                              <td className="ca-td1">有</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="jb_infor right">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">新车发票</td>
                              <td>有</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">钥匙（把）</td>
                              <td className="ca-td1">2</td>
                            </tr>
                            <tr>
                              <td width="270">过户次数</td>
                              <td>1</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">过户票</td>
                              <td className="ca-td1"></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="ca-dl"><span className="caItem on">销售信息</span>
                      <div className="clearfix">
                        <div className="jb_infor left">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">销售价</td>
                              <td>74.8（万）</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">含过户费</td>
                              <td className="ca-td1">是</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="jb_infor right">
                          <table>
                            <tbody>
                            <tr>
                              <td width="270">价格类型</td>
                              <td>一口价</td>
                            </tr>
                            <tr>
                              <td className="ca-td1">支持分期</td>
                              <td className="ca-td1">是</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="ca-dl"><span className="caItem on">详细描述</span>
                      <div className="clearfix">
                        <table>
                          <tbody>
                          <tr>
                            <td colSpan="8"><p>
                              亿金名车广场，5S二手名车综合服务商，拥有一座10000多平米的双层豪华展厅。主营奥迪、宝马、奔驰、路虎、保时捷、等几十种高档精品二手名车。业务涵盖车辆买卖、车辆置换、名车定制、新车销售、金融按揭、保险、保养维修等，并为客户代办车辆上牌、过户、违章处理、年检等贴心一站式服务。自成立以来，公司秉承&quot;
                              诚立中原、信达天下&quot;的经营理念，坚持&quot;一口价&quot;销售理念，引进&quot;认证车&quot;
                              管理模式。所有车辆均经过资深技师365项专业检测，以杜绝销售事故车，泡水车为原则，为客户承诺所售车辆7天退换，一年或2万公里无忧质保，在售车辆5000公里无需保养的诚信二手车企业。
                              亿金名车广场 咨询电话 0371-56536666 网上展厅：www.qcauto.com 看车地址：郑州市金水区花园北路与天伦路口东50米</p></td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div id="cBox3" className="c_box">
                  <ul className="cPic clearfix">
                    <li className="left"><img height="342" src="/src/assets/images/56cebafc4787e.JPG-thumb.JPG"/></li>
                    <li className="right"><img height="342" src="/src/assets/images/56cebafc4787e.JPG-thumb.JPG"/></li>
                    <li className="left"><img height="342" src="/src/assets/images/56cebafc4787e.JPG-thumb.JPG"/></li>
                    <li className="right"><img height="342" src="/src/assets/images/56cebafc4787e.JPG-thumb.JPG"/></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="y_like">
              <h1>您可能会喜欢</h1>
              <ul className="clearfix">
                <li style={{width: '250px', height: '333px'}}><a href="1164.html"
                                                                 style={{width: 'auto', padding: '40px 20px'}}><img
                  src="/src/assets/images/xiangguan.JPG-thumb.JPG" height="120"/>
                  <h3>奔驰S级(进口) 2014 款 3.0T 自动 S320L商务型</h3>
                  <div className="price"> 寄售
                    价 <span className="num nBlue">77.9</span> 万 <font> 省：￥ 25.28 万</font></div>
                  <p>2015-05 | 1.1万公里 | 3.0T | 国四</p>
                </a></li>
                <li style={{width: '250px', height: '333px'}}><a href="1163.html"
                                                                 style={{width: 'auto', padding: '40px 20px'}}><img
                  src="/src/assets/images/xiangguan.JPG-thumb.JPG" height="120"/>
                  <h3>宝马X5(进口) 2014 款 3.0T 自动 xDrive35i领先型</h3>
                  <div className="price"> 一口 价 <span className="num nBlue">73.6</span> 万 <font> 省：￥ 29.58 万</font></div>
                  <p>2014-11 | 1.6万公里 | 3.0T | 国四</p>
                </a></li>
                <li style={{width: '250px', height: '333px'}}><a href="1135.html"
                                                                 style={{width: 'auto', padding: '40px 20px'}}> <img
                  src="/src/assets/images/xiangguan.JPG-thumb.JPG" height="120"/>
                  <h3>奔驰S级(进口) 2014 款 3.0T 自动 S320L商务型</h3>
                  <div className="price"> 寄售
                    价 <span className="num nBlue">77.9</span> 万 <font> 省：￥ 25.28 万</font></div>
                  <p>2015-05 | 1.0万公里 | 3.0T | 国四</p>
                </a></li>
                <li style={{width: '250px', height: '333px'}}><a href="946.html"
                                                                 style={{width: 'auto', padding: '40px 20px'}}> <img
                  src="/src/assets/images/xiangguan.JPG-thumb.JPG" height="120"/>
                  <h3>雷克萨斯GX 2014 款 4.0L 自动 400尊贵版</h3>
                  <div className="price"> 一口 价 <span className="num nBlue">73.8</span> 万 <font> 省：￥ 27.73 万</font></div>
                  <p>2014-05 | 3.2万公里 | 4.0L | 国四</p>
                </a></li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Detail;
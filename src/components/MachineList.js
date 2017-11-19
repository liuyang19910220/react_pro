import React, {Component} from 'react';
import '../assets/css/machinelist.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class MachineList extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }
  componentDidMount(){
    fetch('/src/data/index.json').then((res)=>{
      if(res.ok){
        res.json().then((data)=>{
            /*this.setState({
              list:data
            })*/
            //action请求，更新状态管理state中的list数据
            this.props.updateList(data);
          },50);
      }
    }).catch((res)=>{
      console.log('home component error')
    });
  }

  render() {
    let {list,add}=this.props;
    console.log(list)
    return (
      <div>
        <div id="about">
          <div className="mTags" style={{marginBottom: '20px'}}>
            <div className="wrap"><a href="#">亿金名车广场</a>><a href="#">我要买车</a></div>
          </div>
          <div className="wrap text-left">
            <div className="carfliter-box">
              <div className="carfl-tit clearfix">
                <div className="result-box left dInline" style={{height: 'auto'}}><span className="left">您的当前选择：</span>
                  <form className="s-form left clearfix">
                    <p className="left">
                      <label className="left">关键字</label>
                      <input type="text" className="left" id="keyword" value=""/>
                      <span className="close right" id="clear"></span></p>
                    <input type="hidden" value="" id="urlform"/>
                    <input type="submit" value="确定" className="right" id="tjkey" style={{lineHeight: "10px"}}/>
                  </form>
                  <div className="s-form left clearfix" style={{whiteSpace: 'normal', width: 'auto'}}><p
                    className="left" style={{width: 'auto'}}>    &nbsp;A 奥迪<span className="close right"></span></p>
                  </div>
                </div>
                <a href="srdz.html" className="dBtn right">在线私人订制</a></div>
              <div className="condition">
                <ul>
                  <li className=""><span className="c-name left">品牌：</span>
                    <div className="spec-moudle left dInline">
                      <a href="#"><img src="/src/assets/images/55a46160eac22.png" style={{height: '32px'}}/></a>
                      <a href="#"><img src="/src/assets/images/55a4613f6aab9.png" style={{height: '32px'}}/></a>
                      <a href="#"><img src="/src/assets/images/55c8639f1aa89.png" style={{height: '32px'}}/></a>
                      <a href="#"><img src="/src/assets/images/567a3b2190d9f.png" style={{height: '32px'}}/></a>
                      <a href="#"><img src="/src/assets/images/567a3cdb8bf68.png" style={{height: '32px'}}/></a>
                      <a href="#"><img src="/src/assets/images/55a4afc65ed32.png" style={{height: '32px'}}/></a>
                      <a href="#"><img src="/src/assets/images/55a34e9dcd43a.png" style={{height: '32px'}}/></a>
                      <a href="#"><img src="/src/assets/images/567a3d20d7df1.png" style={{height: '32px'}}/></a>

                      <div className="pro_smore">
                        <div className="clearfix ps-a">
                          <select className="left" name="makeid" id="Smakeid" placeholder="所属品牌">
                            <option value=""> 选择品牌</option>
                            <option value="9"> A 奥迪</option>
                            <option value="82"> B 保时捷</option>
                            <option value="127"> B 别克</option>
                            <option value="2"> B 奔驰</option>
                            <option value="3"> B 宝马</option>
                            <option value="85"> B 宾利</option>
                            <option value="172"> B 巴博斯</option>
                            <option value="26"> B 本田</option>
                            <option value="5"> B 标致</option>
                            <option value="8"> D 大众</option>
                            <option value="113"> D 道奇</option>
                            <option value="7"> F 丰田</option>
                            <option value="17"> F 福特</option>
                            <option value="4"> J Jeep</option>
                            <option value="98"> J 捷豹</option>
                            <option value="51"> K 克莱斯勒</option>
                            <option value="107"> K 凯迪拉克</option>
                            <option value="80"> L 劳斯莱斯</option>
                            <option value="96"> L 路虎</option>
                            <option value="94"> L 雷克萨斯</option>
                            <option value="81"> M MINI</option>
                            <option value="93"> M 玛莎拉蒂</option>
                            <option value="18"> M 马自达</option>
                            <option value="155"> N 纳智捷</option>
                            <option value="30"> R 日产</option>
                            <option value="89"> s smart</option>
                            <option value="25"> S 三菱</option>
                            <option value="111"> S 斯巴鲁</option>
                            <option value="19"> W 沃尔沃</option>
                            <option value="13"> X 现代</option>
                            <option value="49"> X 雪佛兰</option>
                            <option value="100"> Y 英菲尼迪</option>
                          </select>
                          <select className="left" name="modeid" id="Smodeid" placeholder="所属车型">
                            <option value=""> 选择车系</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className=""><span className="c-name left">价格：</span>
                    <div className="spec-moudle left dInline"><a href="#">30万以内</a> <a href="#">30-50万</a> <a href="#">50-100万</a>
                      <a href="#">100万以上</a>
                      <div className="pro_smore">
                        <div className="clearfix ps-b">
                          <table>
                            <tbody>
                            <tr>
                              <td><input type="text" className="sTxt" id="price_L" value=""/></td>
                              <td>-</td>
                              <td><input type="text" className="sTxt" id="price_R" value=""/></td>
                              <td>万元</td>
                              <td><input type="submit" value="确定" className="sBtn" id="tjprice"
                                         style={{lineHeight: '10px'}}/></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="" style={{height: '48px'}}><span className="c-name left">车型：</span>
                    <div className="spec-moudle left dInline" style={{height: 'auto'}}><a href="#"><img
                      src="/src/assets/images/c1.gif" height="30"/><br/>
                      小型</a> <a href="#"><img src="/src/assets/images/c2.gif" height="30"/><br/>
                      轿车</a> <a href="#"><img src="/src/assets/images/c3.gif" height="30"/><br/>
                      跑车</a> <a href="#"><img src="/src/assets/images/c4.gif" height="30"/><br/>
                      SUV</a> <a href="#"><img src="/src/assets/images/c5.gif" height="30"/><br/>
                      MPV</a> <a href="#"><img src="/src/assets/images/c6.gif" height="30"/><br/>
                      房车</a></div>
                  </li>
                  <li className=""><span className="c-name left">车龄：</span>
                    <div className="spec-moudle left dInline"><a href="#" id="0-1">1年以内</a> <a href="#"
                                                                                               id="0-2">2年以内</a> <a
                      href="#" id="0-3">3年以内</a> <a href="#" id="3-5">3-5年</a> <a href="#" id="5-0">5年以上</a>
                      <div className="pro_smore">
                        <div className="clearfix ps-b">
                          <table>
                            <tbody>
                            <tr>
                              <td><input type="text" className="sTxt" id="cheling_L" value=""/></td>
                              <td>-</td>
                              <td><input type="text" className="sTxt" id="cheling_R" value=""/></td>
                              <td>年</td>
                              <td><input type="submit" value="确定" className="sBtn" id="tjcheling"
                                         style={{lineHeight: '10px'}}/></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className=""><span className="c-name left">里程：</span>
                    <div className="spec-moudle left dInline"><a href="#" id="0-1">一万公里以内</a> <a href="#" id="1-3">1-3万公里</a>
                      <a href="#" id="3-6">3-6万公里</a> <a href="#" id="6-0">6万公里以上</a>
                      <div className="pro_smore">
                        <div className="clearfix ps-b">
                          <table>
                            <tbody>
                            <tr>
                              <td><input type="text" className="sTxt" id="licheng_L" value=""/></td>
                              <td>-</td>
                              <td><input type="text" className="sTxt" id="licheng_R" value=""/></td>
                              <td>万公里</td>
                              <td><input type="submit" value="确定" className="sBtn" id="tjlicheng"
                                         style={{lineHeight: '10px'}}/></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className=""><span className="c-name left">排放标准：</span>
                    <div className="spec-moudle left dInline"><a href="#" id="1">国四</a> <a href="#" id="2">国五</a></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aWrap clearfix wrap">
            <div className="left dInline aLeft">
              <div className="carSou">
                <div className="cs-tit">
                  <div className="clearfix">
                    <div className="ctLeft left dInline">
                      <div className="ct-a left dInline"><a className="on" href="#"><i>全部</i></a> <a
                        href="2/sta/B/ord/A/url_form.html"><i>在途</i>(13)</a> <a
                        href="2/sta/C/ord/A/url_form.html"><i>在售</i>(307)</a> <a href="2/sta/E/ord/A/url_form.html"><i>预订</i>(22)</a>
                        <a href="2/sta/D/ord/A/url_form.html"><i>已售</i>(744)</a></div>
                      <div className="cs_sub"> 排序： <a className="cs-a1" href="#">默认<img
                        src="/src/assets/images/down.gif"/></a> <a href="2/sta/A/ord/B/url_form.html">点击量<img
                        src="/src/assets/images/down.gif"/></a> <a href="2/sta/A/ord/C/url_form.html">收藏量<img
                        src="/src/assets/images/down.gif"/></a> <a href="2/sta/A/ord/E/url_form.html">价格<img
                        src="/src/assets/images/up.gif"/></a> <a href="2/sta/A/ord/F/url_form.html">里程<img
                        src="/src/assets/images/up.gif"/></a></div>
                    </div>
                    <div className="right cpages"> 1/32 <a href="#">&lt;</a><a href="2/sta/A/ord/A/p/2.html">&gt;</a>
                    </div>
                  </div>
                  <div className="cs-tit1"></div>
                </div>
                <div className="cs-list">
                  <ul>
                    {/*数据渲染*/}
                    {
                      //list是状态管理中的数据，否则this.state.list
                      list.map((item,index)=>{
                        return (
                          //item==undefined，为什么不报错？
                          <li key={item.id} className="clearfix" style={{position: 'relative'}}>
                            <span className="carImg left dInline">
                              {/*路由参数表明对应商品*/}
            <Link  to={{pathname:'/detail/'+item.id}} >
              <div className="car_bg"> </div>
              <img src={item.img[0]} style={{width:'300px'}}/>
            </Link>
                    </span>
                            <div className="carTxt right dInline">
                              <h2><Link to="detail">{item.title}</Link></h2>
                              <p><span>{item.time}</span> <span>{item.runtime}</span> <span>{item.pailiang}</span> <span>{item.paifangbiaozhun}</span>
                              </p>
                              <div className="price clearfix" style={{margin: '8px 0'}}>
                                <div className="left dInline pNum" style={{width: '110px'}}><font>一口价</font><br/>
                                  <span className="num nBlue">{item.price} </span><font> 万元</font></div>
                                <span className="num1 left" style={{height: '43px', width: '450px', paddingTop: '10px'}}><em>{item.newcarprice}</em><br/>
                                  {item.saveprice} <font><a href="#" target="_blank">{item.firstpay}</a></font>
                  <input type="hidden" className="CarValue_1165"
                         value="{img:'/Uploads/PhotoGalley/2016-02-22/56caabd482cc0.JPG-thumb.JPG',id:'1165',price:'22.8',status:'加入对比',title:'奔驰C级 2013 款 1.8T 自动 C260 CGI时尚型',url:'/Cars/index/channel/2/id/1165.html'}"/>
                  </span></div>
                              <div className="cs_bt clearfix" style={{paddingTop: '7px'}}>
                                <Link onClick={add.bind(null,item.id)} to="/shopCar" activeClassName="cs-q b-login" id="Order_1165">加入购物车</Link>
                                <a href="javascript:void(0)" className="balance_1165">加入对比</a>
                                <a href="javascript:void(0)"
                                   className="b-login"
                                   id="collection_1165">收藏</a>
                                <span>已有188人关注此车</span></div>
                            </div>

                          </li>
                        );
                      })
                    }

                  </ul>
                  <div className="pages"><a className="on" href="#">1</a><a className="" href="#">2</a><a className=""
                                                                                                          href="#">3</a><a
                    className="" href="#">4</a><a className="" href="#">5</a> <a href="#">>></a> <a href="#">32</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right dInline aRight">
              <div id="d_gd">
                <div className="gd_box">

                  <div className="txtMarquee-top">
                    <div className="sameCar bd">
                      <h4>在途同类型车源<a style={{float: 'right', color: "#FFF"}}
                                    href="2/sta/B/ord/STA/url_form/.html">更多>></a></h4>
                      <ul className="infoList">
                        <li><a href="2/id/1175.html">宝马X3(进口) 2014 款 2.0T 自动 xDrive28i X设计套装</a></li>
                        <li><a href="2/id/1174.html">宝马3系 2014 款 2.0T 自动 320i时尚型</a></li>
                        <li><a href="2/id/1173.html">宝马3系GT(进口) 2014款 2.0T 自动 320i 领先型</a></li>
                        <li><a href="2/id/1172.html">奔驰E级 2015 款 2.0T 自动 E260L运动型(改款）</a></li>
                        <li><a href="2/id/1171.html">别克 昂科威 2014 款 2.0T 自动 28T四驱全能运动旗舰型</a></li>
                        <li><a href="2/id/1170.html">奥迪A6L 2014 款 2.0T TFSI舒适型</a></li>
                        <li><a href="2/id/1167.html">大众 Tiguan 2011 款 2.0T 自动 TSI R-Line</a></li>
                        <li><a href="2/id/1169.html">宝马5系 2014 款 2.0T 自动 528Li豪华设计套装</a></li>
                        <li><a href="2/id/1168.html">宝马X3(进口) 2013 款 2.0T 自动 xDrive20i豪华型(改款)</a></li>
                        <li><a href="2/id/1166.html">宝马5系 2014 款 2.0T 自动 525Li豪华设计套装</a></li>
                        <li><a href="2/id/1091.html">宝马X5(进口) 2013款 3.0T xDrive35i（美规）</a></li>
                        <li><a href="2/id/1090.html">路虎 揽胜 2014 款 3.0T 自动 V6 SC Vogue</a></li>
                        <li><a href="2/id/1089.html">宝马5系 2013 款 2.0T 自动 525Li领先型</a></li>
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
//拿状态
const mapStateToProps=(state)=>{
  // console.log('mapStateToProps')
  return{
    list:state.list
  }
}
//发送action，改变状态
const mapDispatchToProps=(dispatch)=>{
  return{
    updateList:(list)=>{
      dispatch({
        type:'UPDATE_LIST',
        payload:list
      });
    },
    //添加入购物车
    add:(id)=>{
      dispatch({
        type:'ADD_ITEM',
        payload:id
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineList);

import React, {Component} from 'react';
//home中banner中的searchbox样式要求index.css在layout前面
// import '../assets/css/index.css';
// import '../assets/css/layout.css';
import Banner from './Banner'


class Home extends Component {
  componentDidMount(){
    this.props.router.replace("/home");

  }
  render() {
    return (
      <div>
        <Banner/>

        <div id="choose-nav">
          <div className="wrap clearfix">
            <div className="item-brand c-item">
              <div className="trigger-icon"></div>
              <div className="brand-wrapper">
                <div className="hd cBlue">品牌</div>
                <div className="bd clearfix">
                  <a href="#" className="brand-item" target="_blank"><img src="/src/assets/images/55a46160eac22.png"
                                                                          alt="奥迪"/><span>奥迪</span></a>
                  <a href="#" className="brand-item" target="_blank"><img src="/src/assets/images/55a4613f6aab9.png"
                                                                          alt="奔驰"/><span>奔驰</span></a>
                  <a href="#" className="brand-item" target="_blank"><img src="/src/assets/images/55c8639f1aa89.png"
                                                                          alt="宝马"/><span>宝马</span></a>
                  <a href="#" className="brand-item" target="_blank"><img src="/src/assets/images/567a3b2190d9f.png"
                                                                          alt="路虎"/><span>路虎</span></a>
                  <a href="#" className="brand-item" target="_blank"><img src="/src/assets/images/567a3cdb8bf68.png"
                                                                          alt="保时捷"/><span>保时捷</span></a>
                  <a href="#" className="brand-item" target="_blank"><img src="/src/assets/images/55a4afc65ed32.png"
                                                                          alt="丰田"/><span>丰田</span></a>
                  <a href="#" className="brand-item" target="_blank"><img src="/src/assets/images/55a34e9dcd43a.png"
                                                                          alt="大众"/><span>大众</span></a>
                </div>
              </div>
              <div className="brand-all clearfix">
                <div className="title">所有品牌</div>
                <div className="brand-list clearfix">
                  <div className="left-list">
                    <div className="brand-item-l clearfix">
                      <div className="letter">A</div>
                      <div className="brand-letter"><a target="_blank" href="pp9" className="brand-item">奥迪</a></div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">B</div>
                      <div className="brand-letter"><a target="_blank" href="pp2" className="brand-item">奔驰</a> <a
                        target="_blank"
                        href="pp3"
                        className="brand-item">宝马</a>
                        <a target="_blank" href="pp82" className="brand-item">保时捷</a> <a target="_blank" href="pp172"
                                                                                         className="brand-item">巴博斯</a>
                        <a
                          target="_blank" href="pp26" className="brand-item">本田</a> <a target="_blank" href="pp127"
                                                                                       className="brand-item">别克</a> <a
                          target="_blank"
                          href="pp85"
                          className="brand-item">宾利</a>
                        <a target="_blank" href="pp5" className="brand-item">标致</a></div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">D</div>
                      <div className="brand-letter"><a target="_blank" href="pp8" className="brand-item">大众</a> <a
                        target="_blank"
                        href="pp113"
                        className="brand-item">道奇</a>
                      </div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">F</div>
                      <div className="brand-letter"><a target="_blank" href="pp7" className="brand-item">丰田</a> <a
                        target="_blank"
                        href="pp17"
                        className="brand-item">福特</a>
                      </div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">J</div>
                      <div className="brand-letter"><a target="_blank" href="pp4" className="brand-item">Jeep</a> <a
                        target="_blank"
                        href="pp98"
                        className="brand-item">捷豹</a>
                      </div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">K</div>
                      <div className="brand-letter"><a target="_blank" href="pp107" className="brand-item">凯迪拉克</a> <a
                        target="_blank"
                        href="pp51"
                        className="brand-item">克莱斯勒</a>
                      </div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">L</div>
                      <div className="brand-letter"><a target="_blank" href="pp96" className="brand-item">路虎</a> <a
                        target="_blank"
                        href="pp80"
                        className="brand-item">劳斯莱斯</a>
                        <a target="_blank" href="pp94" className="brand-item">雷克萨斯</a></div>
                    </div>
                  </div>
                  <div className="right-list">
                    <div className="brand-item-l clearfix">
                      <div className="letter">M</div>
                      <div className="brand-letter"><a target="_blank" href="pp93" className="brand-item">玛莎拉蒂</a> <a
                        target="_blank"
                        href="pp81"
                        className="brand-item">MINI</a>
                        <a target="_blank" href="pp18" className="brand-item">马自达</a></div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">N</div>
                      <div className="brand-letter"><a target="_blank" href="pp155" className="brand-item">纳智捷</a></div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">R</div>
                      <div className="brand-letter"><a target="_blank" href="pp30" className="brand-item">日产</a></div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">S</div>
                      <div className="brand-letter"><a target="_blank" href="pp25" className="brand-item">三菱</a> <a
                        target="_blank"
                        href="pp111"
                        className="brand-item">斯巴鲁</a>
                      </div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">W</div>
                      <div className="brand-letter"><a target="_blank" href="pp19" className="brand-item">沃尔沃</a></div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">X</div>
                      <div className="brand-letter"><a target="_blank" href="pp49" className="brand-item">雪佛兰</a> <a
                        target="_blank"
                        href="pp13"
                        className="brand-item">现代</a>
                      </div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">Y</div>
                      <div className="brand-letter"><a target="_blank" href="pp100" className="brand-item">英菲尼迪</a>
                      </div>
                    </div>
                    <div className="brand-item-l clearfix">
                      <div className="letter">s</div>
                      <div className="brand-letter"><a target="_blank" href="pp89" className="brand-item">smart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="choose_model" className="item-model c-item">
              <div className="trigger-icon"></div>
              <div className="model-wrapper">
                <div className="hd cBlue">车型</div>
                <div className="bd"><a href="_cx1/ord/A/sta/A.html" className="model-item" target="_blank">
                  <div className="car-modal-img modal-tinyCar"></div>
                  <span className="car-modal-name">小型</span></a><a href="_cx2/ord/A/sta/A.html" className="model-item"
                                                                   target="_blank">
                  <div className="car-modal-img modal-PremiumMidsize"></div>
                  <span className="car-modal-name">轿车</span></a><a href="_cx3/ord/A/sta/A.html" className="model-item"
                                                                   target="_blank">
                  <div className="car-modal-img modal-SportsCar"></div>
                  <span className="car-modal-name">跑车</span></a><a href="_cx4/ord/A/sta/A.html" className="model-item"
                                                                   target="_blank">
                  <div className="car-modal-img modal-SUV"></div>
                  <span className="car-modal-name">SUV</span></a><a href="_cx5/ord/A/sta/A.html" className="model-item"
                                                                    target="_blank">
                  <div className="car-modal-img modal-MPV"></div>
                  <span className="car-modal-name">MPV</span></a><a href="_cx6/ord/A/sta/A.html" className="model-item"
                                                                    target="_blank">
                  <div className="car-modal-img modal-compactCar"></div>
                  <span className="car-modal-name">房车</span></a></div>
                <div className="model-all clearfix">
                  <div className="models-line"><a className="models-item-m">小型</a><a target="_blank" href="#"
                                                                                     className="models-item">宝马1系(进口)</a><a
                    target="_blank" href="#" className="models-item">奔驰A级(进口)</a></div>
                  <div className="models-line"><a className="models-item-m">轿车</a><a target="_blank" href="#"
                                                                                     className="models-item">奥迪A6L</a><a
                    target="_blank"
                    href="#"
                    className="models-item">宝马5系</a><a
                    target="_blank" href="xl1987_pp2.html" className="models-item">奔驰E级</a><a target="_blank"
                                                                                              href="xl2593_pp9.html"
                                                                                              className="models-item">奥迪A4L</a><a
                    target="_blank" href="xl2364_pp2.html" className="models-item">奔驰C级</a></div>
                  <div className="models-line"><a className="models-item-m">跑车</a><a target="_blank"
                                                                                     href="xl2751_pp3.html"
                                                                                     className="models-item">宝马Z4(进口)</a><a
                    target="_blank"
                    href="xl2610_pp8.html"
                    className="models-item">尚酷(进口)</a><a
                    target="_blank" href="xl2068_pp9.html" className="models-item">奥迪TT(进口)</a><a target="_blank"
                                                                                                  href="xl3570_pp111.html"
                                                                                                  className="models-item">斯巴鲁BRZ(进口)</a><a
                    target="_blank" href="xl2759_pp49.html" className="models-item">科迈罗(进口)</a></div>
                  <div className="models-line"><a className="models-item-m">SUV</a><a target="_blank"
                                                                                      href="xl2087_pp96.html"
                                                                                      className="models-item">发现</a><a
                    target="_blank"
                    href="xl2855_pp9.html"
                    className="models-item">奥迪Q5</a><a
                    target="_blank" href="xl3528_pp2.html" className="models-item">奔驰GLK级</a><a target="_blank"
                                                                                                href="xl2032_pp3.html"
                                                                                                className="models-item">宝马X5(进口)</a><a
                    target="_blank" href="xl2871_pp8.html" className="models-item">途观</a></div>
                  <div className="models-line"><a className="models-item-m">MPV</a><a target="_blank"
                                                                                      href="xl1825_pp127.html"
                                                                                      className="models-item">别克GL8</a><a
                    target="_blank"
                    href="xl3038_pp2.html"
                    className="models-item">福建奔驰威霆</a><a
                    target="_blank" href="xl2970_pp2.html" className="models-item">唯雅诺</a><a target="_blank"
                                                                                             href="xl1877_pp2.html"
                                                                                             className="models-item">奔驰R级(进口)</a><a
                    target="_blank" href="xl2379_pp8.html" className="models-item">大众迈特威(进口)</a></div>
                  <div className="models-line"><a className="models-item-m">房车</a><a target="_blank"
                                                                                     href="xl3038_pp2.html"
                                                                                     className="models-item">福建奔驰威霆</a><a
                    target="_blank"
                    href="xlQ1449469092_pp17.html"
                    className="models-item">E350</a><a
                    target="_blank" href="xl2970_pp2.html" className="models-item">唯雅诺</a></div>
                </div>
              </div>
            </div>


            <div className="item-price">
              <div className="hd cBlue">价格</div>
              <div className="bd"><a target="_blank" href="jg0-30.html" className="price-item"
                                     style={{width: 'auto'}}>30万以下</a> <a
                target="_blank" href="jg30-50.html" className="price-item" style={{width: 'auto'}}>30-50万</a> <a
                target="_blank"
                href="jg50-100.html"
                className="price-item"
                style={{width: 'auto'}}>50-100万</a>
                <a target="_blank" href="jg100-0.html" className="price-item" style={{width: 'auto'}}>100万以上</a></div>
            </div>
          </div>
        </div>

        <div id="main">
          <div className="main-a mDiv" id="box1">
            <div className="wrap">
              <div className="in-tit clearfix">
                <h1 className="left dInline"> 今日推荐 </h1>

              </div>
              <div className="inBox clearfix">
                <div className="thPic left dInline pve tBox"><a href="#" target="_blank"> <img
                  src="/src/assets/images/56b01c412ea24.jpg"
                  className="imgVt"/> <span
                  className="icon icon_hd"></span></a></div>
                <div className="tBox right pve dInline thPicRight">
                  <div className="thPic1 left dInline pve">
                    <ul className="clearfix">
                      <li className="pve"><a href="#" target="_blank"> <span className="icon icon_th"></span>
                        <div className="car-pic"><img src="/src/assets/images/56a0941ba3dc9.png"/></div>
                        <div className="price"><font>一口价</font> <span className="num nBlue">21.8 </span>
                          <font>&nbsp;&nbsp;
                            万元</font>
                        </div>
                        <p>奔驰A级(进口) 2015 款 1.6T 双离合 A200时尚型</p>
                      </a></li>

                      <li className="pve"><a href="#" target="_blank"> <span className="icon icon_th"></span>
                        <div className="car-pic"><img src="/src/assets/images/56a0941ba3dc9.png"/></div>
                        <div className="price"><font>一口价</font> <span className="num nBlue">21.8 </span>
                          <font>&nbsp;&nbsp;
                            万元</font>
                        </div>
                        <p>奔驰A级(进口) 2015 款 1.6T 双离合 A200时尚型</p>
                      </a></li>

                      <li className="pve"><a href="#" target="_blank"> <span className="icon icon_th"></span>
                        <div className="car-pic"><img src="/src/assets/images/56a0941ba3dc9.png"/></div>
                        <div className="price"><font>一口价</font> <span className="num nBlue">21.8 </span>
                          <font>&nbsp;&nbsp;
                            万元</font>
                        </div>
                        <p>奔驰A级(进口) 2015 款 1.6T 双离合 A200时尚型</p>
                      </a></li>

                      <li className="pve"><a href="#" target="_blank"> <span className="icon icon_th"></span>
                        <div className="car-pic"><img src="/src/assets/images/56a0941ba3dc9.png"/></div>
                        <div className="price"><font>一口价</font> <span className="num nBlue">21.8 </span>
                          <font>&nbsp;&nbsp;
                            万元</font>
                        </div>
                        <p>奔驰A级(进口) 2015 款 1.6T 双离合 A200时尚型</p>
                      </a></li>

                    </ul>
                  </div>
                  <div className="pve right dInline hdPic"><a href="pp96_/ord/sta.html" target="_blank"> <img
                    src="/src/assets/images/55ed9e88063ae.jpg" className="imgVt"/> <span
                    className="icon icon_hd"></span></a></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mDiv" id="box2">
            <div className="wrap">
              <div className="in-tit clearfix">
                <h1 className="left dInline"> 最新到店 </h1>
              </div>
              <div className="inBox clearfix">
                <div className="tBox left pve dInline thPicRight">
                  <div className="thPic1 left dInline pve">
                    <ul className="clearfix">
                      <li className="pve"><a href="#" target="_blank"> <span className="icon icon_npro"></span>
                        <div className="car-pic"><img src="/src/assets/images/5688cddeae512.png"/></div>
                        <div className="price"><font>一口价</font> <span className="num nBlue">28.99 </span>
                          <font>&nbsp;&nbsp;
                            万元</font>
                        </div>
                        <p>宝马3系 2014 款 2.0T 自动 320Li豪华设计套装</p>
                      </a></li>

                      <li className="pve"><a href="#" target="_blank"> <span className="icon icon_npro"></span>
                        <div className="car-pic"><img src="/src/assets/images/5688cddeae512.png"/></div>
                        <div className="price"><font>一口价</font> <span className="num nBlue">28.99 </span>
                          <font>&nbsp;&nbsp;
                            万元</font>
                        </div>
                        <p>宝马3系 2014 款 2.0T 自动 320Li豪华设计套装</p>
                      </a></li>

                      <li className="pve"><a href="#" target="_blank"> <span className="icon icon_npro"></span>
                        <div className="car-pic"><img src="/src/assets/images/5688cddeae512.png"/></div>
                        <div className="price"><font>一口价</font> <span className="num nBlue">28.99 </span>
                          <font>&nbsp;&nbsp;
                            万元</font>
                        </div>
                        <p>宝马3系 2014 款 2.0T 自动 320Li豪华设计套装</p>
                      </a></li>

                      <li className="pve liHd"><a href="Cars/index/channel/2/id/949.html" target="_blank"> <img
                        src="/src/assets/images/56c56f308b591.jpg" className="imgVt"/> <span
                        className="icon icon_hd"></span></a></li>

                      <li className="pve"><a href="Cars/index/channel/2/id/1092.html" target="_blank"> <span
                        className="icon icon_npro"></span>
                        <div className="car-pic"><img src="/src/assets/images/5688cddeae512.png"/></div>
                        <div className="price"><font>一口价</font> <span className="num nBlue">34.8 </span>
                          <font>&nbsp;&nbsp;
                            万元</font>
                        </div>
                        <p>凯迪拉克SRX(进口) 2014 款 3.0L 自动 精英型</p>
                      </a></li>
                    </ul>
                  </div>
                </div>
                <div className="thPic right dInline pve tBox"><a href="pp2_/ord/sta.html" target="_blank"> <img
                  src="/src/assets/images/55ed9ec02ac8d.jpg" className="imgVt"/> <span className="icon icon_hd"></span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="mDiv main-a">
            <div className="wrap">
              <div className="in-tit clearfix">
                <h1 className="left dInline"> 精品车源 </h1>
              </div>
              <div className="jpBox">
                <div className="jpTit">
                  <a className="on"> <img src="/src/assets/images/cLogo.png"/> <span>推荐车源</span> <i></i></a>
                  <a> <img src="/src/assets/images/55a46160eac22.png" width="50" height="38"/> <span>奥迪</span>
                    <i></i></a>
                  <a> <img src="/src/assets/images/55a4613f6aab9.png" width="50" height="38"/> <span>奔驰</span>
                    <i></i></a>
                  <a> <img src="/src/assets/images/55c8639f1aa89.png" width="50" height="38"/> <span>宝马</span>
                    <i></i></a>
                  <a> <img src="/src/assets/images/567a3b2190d9f.png" width="50" height="38"/> <span>路虎</span>
                    <i></i></a>
                  <a> <img src="/src/assets/images/567a3cdb8bf68.png" width="50" height="38"/> <span>保时捷</span> <i></i></a>
                  <a> <img src="/src/assets/images/55a4afc65ed32.png" width="50" height="38"/> <span>丰田</span>
                    <i></i></a>
                  <a className="last"> <img src="/src/assets/images/55a34e9dcd43a.png" width="50" height="38"/>
                    <span>大众</span> <i></i></a>
                </div>
                <div className="jpCont">
                  <div className="jpDl" style={{display: 'block'}}>
                    <ul className="clearfix">
                      <li className="clearfix" style={{position: 'relative'}}>
                        <a href="#" target="_blank">
                          <div className="carImg left dInline">
                            <img src="/src/assets/images/56caabd482cc0.JPG-thumb.JPG" width="266"/>
                          </div>

                          <div className="right carTxt dInline pve">
                            <div className="c-txt">
                              <h3>
                                <a href="#" target="_blank">奔驰C级 2013 款 1.8T 自动 C260 CGI时尚型</a>
                              </h3>

                              <p>2013-08 | 4.5万公里 | 1.8T | 国四</p>
                              <div className="price">
                                <p>亿金一口价：</p>
                                <i>￥</i> <span className="num nBlue">22.8 </span><font> 万元</font> <font> 省：￥ 18.77
                                万</font>
                              </div>

                            </div>
                          </div>

                        </a>
                      </li>

                      <li className="clearfix" style={{position: 'relative'}}><a href="#" target="_blank">
                        <div className="carImg left dInline"><img src="/src/assets/images/56caabd482cc0.JPG-thumb.JPG"
                                                                  width="266"/></div>
                        <div className="right carTxt right dInline pve">
                          <div className="c-txt">
                            <h3><a href="#" target="_blank">奔驰C级 2013 款 1.8T 自动 C260 CGI时尚型</a></h3>
                            <p>2013-08 | 4.5万公里 | 1.8T | 国四</p>
                            <div className="price">
                              <p>亿金一口价：</p>
                              <i>￥</i> <span className="num nBlue">22.8 </span><font> 万元</font> <font> 省：￥ 18.77
                              万</font>
                            </div>
                          </div>
                        </div>
                      </a></li>

                      <li className="clearfix" style={{position: 'relative'}}><a href="#" target="_blank">
                        <div className="carImg left dInline"><img src="/src/assets/images/56caabd482cc0.JPG-thumb.JPG"
                                                                  width="266"/></div>
                        <div className="right carTxt right dInline pve">
                          <div className="c-txt">
                            <h3><a href="#" target="_blank">奔驰C级 2013 款 1.8T 自动 C260 CGI时尚型</a></h3>
                            <p>2013-08 | 4.5万公里 | 1.8T | 国四</p>
                            <div className="price">
                              <p>亿金一口价：</p>
                              <i>￥</i> <span className="num nBlue">22.8 </span><font> 万元</font> <font> 省：￥ 18.77
                              万</font>
                            </div>
                          </div>
                        </div>
                      </a></li>

                      <li className="clearfix" style={{position: 'relative'}}><a href="#" target="_blank">
                        <div className="carImg left dInline"><img src="/src/assets/images/56caabd482cc0.JPG-thumb.JPG"
                                                                  width="266"/></div>
                        <div className="right carTxt right dInline pve">
                          <div className="c-txt">
                            <h3><a href="#" target="_blank">奔驰C级 2013 款 1.8T 自动 C260 CGI时尚型</a></h3>
                            <p>2013-08 | 4.5万公里 | 1.8T | 国四</p>
                            <div className="price">
                              <p>亿金一口价：</p>
                              <i>￥</i> <span className="num nBlue">22.8 </span><font> 万元</font> <font> 省：￥ 18.77
                              万</font>
                            </div>
                          </div>
                        </div>
                      </a></li>

                    </ul>
                    <div className="proMore"><a href="Cars/index/channel/2.html" target="_blank">查看更多>></a></div>
                  </div>

                  <div className="jpDl">
                    <ul className="clearfix">
                      <li className="clearfix" style={{position: 'relative'}}><a href="#" target="_blank">
                        <div className="carImg left dInline"><img src="/src/assets/images/56caabd482cc0.JPG-thumb.JPG"
                                                                  width="266"/></div>
                        <div className="right carTxt right dInline pve">
                          <div className="c-txt">
                            <h3><a href="#" target="_blank">奔驰C级 2013 款 1.8T 自动 C260 CGI时尚型</a></h3>
                            <p>2013-08 | 4.5万公里 | 1.8T | 国四</p>
                            <div className="price">
                              <p>亿金一口价：</p>
                              <i>￥</i> <span className="num nBlue">22.8 </span><font> 万元</font> <font> 省：￥ 18.77
                              万</font>
                            </div>
                          </div>
                        </div>
                      </a></li>

                      <li className="clearfix" style={{position: 'relative'}}><a href="#" target="_blank">
                        <div className="carImg left dInline"><img src="/src/assets/images/56caabd482cc0.JPG-thumb.JPG"
                                                                  width="266"/></div>
                        <div className="right carTxt right dInline pve">
                          <div className="c-txt">
                            <h3><a href="#" target="_blank">奔驰C级 2013 款 1.8T 自动 C260 CGI时尚型</a></h3>
                            <p>2013-08 | 4.5万公里 | 1.8T | 国四</p>
                            <div className="price">
                              <p>亿金一口价：</p>
                              <i>￥</i> <span className="num nBlue">22.8 </span><font> 万元</font> <font> 省：￥ 18.77
                              万</font>
                            </div>
                          </div>
                        </div>
                      </a></li>


                    </ul>
                    <div className="proMore"><a href="Cars/index/channel/2.html" target="_blank">查看更多>></a></div>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="mDiv">
            <div className="wrap">
              <div className="in-tit clearfix">
                <h1 className="left dInline"> 亿金榜单 </h1>
              </div>
              <div className="bdBox clearfix">
                <div className="left dLeft dInline">
                  <ul className="clearfix">
                    <li><a href="#" target="_blank"> <img src="/src/assets/images/55d2c89756ef2.jpg"/></a></li>
                    <li><a href="#" target="_blank"> <img src="/src/assets/images/55d2c8be18345.jpg"/></a></li>
                    <li><a href="#" target="_blank"> <img src="/src/assets/images/55d2c8d1f2f42.jpg"/></a></li>
                    <li><a href="#" target="_blank"> <img src="/src/assets/images/55d2c8e954f6f.jpg"/></a></li>
                  </ul>
                </div>
                <div className="left dRight dInline">

                  <form className="dForm" name="dForm" id="dForm" method="post" encType="multipart/form-data">

                    <h2>私人订制</h2>
                    <p>专业车辆顾问为您服务</p>
                    <table>
                      <tbody>
                      <tr>
                        <td><select className="Smakeid" name="makeid" id="" placeholder="所属品牌">
                          <option value=""> 选择品牌（必选）</option>
                          <option value="9"> A 奥迪</option>
                          <option value="92"> A 阿尔法·罗密欧</option>
                          <option value="97"> A 阿斯顿·马丁</option>

                        </select></td>
                      </tr>
                      <tr>
                        <td>
                          <div id="xlselect">
                            <select name="modeid">
                              <option>选择车系(必选)</option>
                            </select>
                          </div>
                        </td>
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
                        <td><input type="text" name="dprice" placeholder="最少预算" value="" className="cInput"/>

                          <input type="text" name="hprice" placeholder="最多预算" value="" className="cInput"/>

                          万元
                        </td>
                      </tr>
                      <tr>
                        <td><input type="text" value="" placeholder="计划购买时间" style={{width: '95%'}}
                                   className="form_datetime cInput"
                                   name="buytime" data-date-format="yyyy-mm"/></td>
                      </tr>
                      <tr>
                        <td><textarea name="content" placeholder="其他要求（例如车身和内饰颜色、行驶里程要求等）"></textarea></td>
                      </tr>
                      <tr>
                        <td>
                          <input id="input-phone" type="hidden" name="mobile" value=""/>
                          <input id="input-verify" type="hidden" name="verify" value=""/>
                          <input type="button" value="提交需求" className="sBtn" style={{padding: 0}} id="sendMESS"/>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </form>
                  <div id="popBoxYzm" style={{display: 'none'}}>
                    <div className="popForm">
                      <div className="p-detail">
                        <form action="" encType="multipart/form-data" method="post" name="yzmcheck" id="yzmcheck">
                          <ul className="login-items" style={{width: '100%'}}>
                            <li>
                              <label>手机号</label>
                              <input type="text" value="" maxLength="32" name="mobile" id="shoujihao"
                                     style={{width: '120px'}}/>
                              <input type="checkbox" name="remembermobile"
                                     style={{width: 'auto', margin: '10px 20px 0'}}
                                     id="remembermobile"/>
                              <label>记住此号</label>
                            </li>
                            <li>
                              <label>验证码</label>
                              <input type="text" value="" maxLength="16" name="verify" id="yanzhengma"
                                     style={{width: '120px', marginRight: '20px'}}/>
                              <img id="yzcode" width="100" height="42" alt="点击切换"/></li>
                          </ul>
                          <div className="login-button">
                            <input type="button" value="立即提交" className="fM" style={{lineHeight: '20px'}}/>

                          </div>
                        </form>
                      </div>
                      <a className="closed">×</a>
                    </div>
                  </div>
                  <input type="hidden" id="ckmobile" value="1"/>

                </div>
              </div>
            </div>
          </div>
          <div className="mDiv main-a">
            <div className="wrap">
              <div className="in-tit clearfix">
                <h1 className="left dInline"> 亿金新闻 </h1>
              </div>
              <div className="in-news clearfix">
                <div className="new-left dInline left">
                  <h3>动态</h3>
                  <div className="clearfix">
                    <div className="new-dl left dInline"><a href="#" className='aImg'><img
                      src="/src/assets/images/56ca7a0e6d9c4.jpg" width='262'
                      height='170'/></a>
                      <ul>
                        <li>·<a href="#">【亿金名车】抬头猜灯谜，低头拆红包，一大...</a></li>
                        <li>·<a href="#">闹元宵，猜灯谜，亿金名车邀您来抢现金红包...</a></li>
                        <li>·<a href="#">金猴欢跃报春至，亿金名车开门红</a></li>
                        <li>·<a href="#">亿金名车广场祝全国人民新春快乐，猴年大吉...</a></li>
                        <li>·<a href="#">亿金名车再次被省商务厅等18部门评为“诚信...</a></li>
                      </ul>
                      <a style={{float: 'right'}} href="#" target="_blank">更多>></a></div>
                    <div className="new-dl right dInline"><a href="#" className='aImg'><img
                      src="/src/assets/images/56b0235b6e66e.jpg" width='262'
                      height='170'/></a>
                      <ul>
                        <li>·<a href="#">过年啦！亿金名车广场为全体员工发放年货福...</a></li>
                        <li>·<a href="#">嗨翻了！亿金名车广场圣诞狂欢夜火热举办！</a></li>
                        <li>·<a href="#">冬至到，饺子俏：亿金名车暖意融融过冬至！</a></li>
                        <li>·<a href="#">售后部首届技术比武大赛</a></li>
                        <li>·<a href="#">亿金售后部9月微笑之星、技术之星、服务之...</a></li>
                      </ul>
                      <a style={{float: 'right'}} href="#" target="_blank">更多>></a></div>
                  </div>
                </div>

                <div className="nKe left dInline">
                  <div className="kTit">
                    <h2>客户留言</h2>
                  </div>
                  <div className="slide">
                    <div className="hd"><a className="prev"><img src="/src/assets/images/in_l.jpg"/></a>
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                      </ul>
                      <a className="next"><img src="/src/assets/images/in_r.jpg"/></a></div>
                    <div className="bd">
                      <ul>
                        <li className="clearfix">
                          <div className="bd-dl"><a href="#" className="aImg"> <img
                            src="/src/assets/images/5631c2b4596bc.jpg" width="242"
                            height="170"/> </a>
                            <h4>当漂移车手 遇见限量A8</h4>
                            <p>今年夏天亿金名车广场的明星车辆、全省唯一一辆橙色奥迪A8L，他的买家是一位身份特殊的勇士，一位知名的专业漂移赛车手，有“河南</p>
                            <div ><a href="#" className="cMore">查看详情</a></div>
                          </div>

                          <div className="bd-dl"><a href="#" className="aImg"> <img
                            src="/src/assets/images/5631c24f293bb.jpg" width="242"
                            height="170"/> </a>
                            <h4>青藏川藏 曲水流觞</h4>
                            <p>在亿金2年的发展历程中，与很多朋友结下了缘分，这些朋友大多成为了我们的车主和会员，他们有着不同的人生经历，用各自的方式追寻着</p>
                            <div ><a href="#" className="cMore">查看详情</a></div>
                          </div>
                        </li>

                        <li className="clearfix">
                          <div className="bd-dl"><a href="#" className="aImg"> <img
                            src="/src/assets/images/5631c2b4596bc.jpg" width="242"
                            height="170"/> </a>
                            <h4>当漂移车手 遇见限量A8</h4>
                            <p>今年夏天亿金名车广场的明星车辆、全省唯一一辆橙色奥迪A8L，他的买家是一位身份特殊的勇士，一位知名的专业漂移赛车手，有“河南</p>
                            <div ><a href="#" className="cMore">查看详情</a></div>
                          </div>


                        </li>

                        <li className="clearfix">
                          <div className="bd-dl"><a href="#" className="aImg"> <img
                            src="/src/assets/images/5631c2b4596bc.jpg" width="242"
                            height="170"/> </a>
                            <h4>当漂移车手 遇见限量A8</h4>
                            <p>今年夏天亿金名车广场的明星车辆、全省唯一一辆橙色奥迪A8L，他的买家是一位身份特殊的勇士，一位知名的专业漂移赛车手，有“河南</p>
                            <div ><a href="#" className="cMore">查看详情</a></div>
                          </div>

                          <div className="bd-dl"><a href="#" className="aImg"> <img
                            src="/src/assets/images/5631c24f293bb.jpg" width="242"
                            height="170"/> </a>
                            <h4>青藏川藏 曲水流觞</h4>
                            <p>在亿金2年的发展历程中，与很多朋友结下了缘分，这些朋友大多成为了我们的车主和会员，他们有着不同的人生经历，用各自的方式追寻着</p>
                            <div ><a href="#" className="cMore">查看详情</a></div>
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

export default Home;
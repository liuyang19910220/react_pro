import React, {Component} from 'react';
import {Link} from 'react-router';

  class Searchbox extends Component {
  render() {
    return (
      <div>

          <div className="head-search">
            <div className="wrap clearfix">
              <div className="yjxj clearfix left" action="/index/keyword/" method="post" >
                <input type="text" name="keyword" placeholder="请输入您想要的品牌、车系或车辆编号搜索" className="left"/>
                <input type="submit" value="搜 索" className="right"/>
              </div>
              <div className="hotWords left dInline"> 热门品牌：<a href="#">奥迪A6L</a><a href="#">宝马5系</a><a href="#">奔驰E级</a><a
                href="#">奥迪A4L</a><a href="#">奔驰C级</a></div>
            </div>
          </div>

      </div>
    );
  }
}

export default Searchbox;
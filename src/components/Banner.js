import React, {Component} from 'react';

class Banner extends Component {
  render() {
    return (
      <div>

        <div id="banner">
          <div className="banShow clearfix" style={{'width':'100%'}}>
            <a href="#" className="bDiv" style={{'background': 'url(/src/assets/images/y77.jpg) no-repeat center top'}}></a>
            <a href="#" className="bDiv" style={{'background':'url(/src/assets/images/1.jpg) no-repeat center top'}}></a>
          </div>
          <div className="b_btn wrap"></div>

          <div className="searchBox">
            <div className="xbg"></div>
            <div className="xnrj">
              <img src="/src/assets/images/in1.png"/>
              <form className="clearfix" action="/index/keyword/" method="post" >
                <input type="text"  name="keyword" placeholder="请输入您想要的品牌、车系或车辆编号搜索" className="left" />
                <input type="submit" value="" className="right" />
              </form>
            </div>
          </div>
        </div>


      </div>

    )
  }
}

export default Banner;
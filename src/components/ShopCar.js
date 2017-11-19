import React, {Component} from 'react';
import '../assets/css/machinelist.css';
import '../assets/css/sell.css';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class ShopCar extends Component {
  render() {
    let {buycar, del, delAll} = this.props;
    return (
      <div>
        <div id="about">
          <div className="mTags">
            <div className="wrap">
              <a href="/">亿金名车广场</a>><a href="/cars/index/channel/2.html">立即抢订</a>
            </div>
          </div>
          {/*循环此处*/}
          {
            buycar.map((item, index) => {
              console.log(item)
              return (
                <div key={item.id} style={{'borderBottom':'3px solid #ededed'}} id="xDan" className="wrap clearfix">
                  <div className="xdImg left dInline">
                    <div className="car_bg"></div>
                    <a href="#"><img src={item.img[0]} width="400"/></a>
                  </div>
                  <div className="buyTxt right dInline">
                    <h1>{item.title}</h1>
                    <div className="byDl clearfix byDl_tab">
				<span className="left byPrice bItem">亿金寄售价<br/>
          <b>{item.price}</b> 万元
				</span>
                      <span className="left bItem">
					上牌时间
					<p>{item.time}</p>
				</span>
                      <span className="left bItem">
					行驶里程
					<p>{item.runtime}</p>
				</span>
                      <span className="left bItem">
					排量
					<p>1.6T</p>
				</span>
                      <span className="left bItem">
					排放标准
					<p>国四</p>
				</span>
                    </div>
                    <div className="byPay clearfix">
				<span className="left">
					预付定金：<strong>￥17380</strong> 元
				</span>

                    </div>
                    <form>
                      <input type="hidden" value="1180" name="carid"/>
                      <a className="payBtn" href="JavaScript:;">
                        确认提交
                      </a>
                    </form>
                  </div>
                </div>
              )
            })
          }
          {buycar.length?<button onClick={delAll} style={{display:'block',marginLeft:'45%',width:'100px',height:'50px',background:'red',font:'20px/50px ""',color:'white'}} href="JavaScript:;">
            删除全部
          </button>:''}
        </div>
      </div>

    )
  }
}

const mapStateToProps=(state)=>{
  return {
    buycar:state.buycar
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    del:(id)=>{
      dispatch({
        type:'REMOVE_ITEM',
        payload:id
      });
    },
    delAll:()=>{
      alert('确定删除全部？')
      dispatch({
        type:'REMOVE_ALL',
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopCar);
import React,{Component} from 'react'
import Nav from './Nav'
import '../css/header.css'
import '../css/iconfont/iconfont.css'
class Header extends Component{
    constructor(){
        super();
        this.state={
            flag:false
        }
    }
    changeFlag(){
        this.setState({
            flag:!this.state.flag
        })
    }
    render(){
        var a;
        if(this.state.flag==false){
            var a=null
        }else{
            a=<Nav />
        }
        return(
            <div className="ppp">
            <div className="header">
                <div onClick={this.changeFlag.bind(this)}>
                        <span><i className="iconfont icon-liebiao"></i></span>
                        <span>卖座电影</span>
                </div>
                <div>
                    <span>地址</span>
                    <span><i className="iconfont icon-jingjiren"></i></span>
                </div>
                
            </div>
            {a}
            </div>
        )
    }
}

export default Header;
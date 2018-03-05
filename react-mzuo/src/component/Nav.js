import React,{Component} from 'react'
import '../css/iconfont/iconfont.css'
import '../css/nav.css'


class Nav extends Component{
    render(){
        return(
            <div className="nav">
                <ul>
                    <li>
                        <span>首页</span>
                        <span><i className="iconfont icon-xiangyoujiantou"></i></span>
                    </li>
                    <li>
                        <span>影片</span>
                        <span><i className="iconfont icon-xiangyoujiantou"></i></span>
                    </li>
                    <li>
                        <span>影院</span>
                        <span><i className="iconfont icon-xiangyoujiantou"></i></span>
                    </li>
                    <li>
                        <span>商城</span>
                        <span><i className="iconfont icon-xiangyoujiantou"></i></span>
                    </li>
                    <li>
                        <span>我的</span>
                        <span><i className="iconfont icon-xiangyoujiantou"></i></span>
                    </li>
                </ul>
                <div className="master">

                </div>
            </div>
        )
    }
}

export default Nav;
import React,{Component} from 'react'
import Header from './Header'
import axios from 'axios'
import '../css/detail.css'

class Detail extends Component{

    constructor(){
        super();
        this.state={
            details:null
        }
    }
    
    componentDidMount(){
        var id=this.props.match.params.fid
        axios.get(`/v4/api/film/${id}?__t=1519785859988`).then((res)=>{
            console.log(res)

            this.setState({
                details:res.data.data.film
            })
        })
    }
    render(){
        var riqi=
        console.log(this.state.details)
        var data=this.state.details
        var a;
        
        if(data==null){
            a=null;
        }else{
            a=<div>
                    <div>
                        <img src={data.cover.origin} alt=""/>
                    </div>
                    <div>
                        <h2>{data.name}</h2>
                        <h3>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span>{data.director}</span></h3>
                        <h3>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：
                        {data.actors.map((item,index)=>{
                            return(
                                <span key={item.name}>
                                    {item.name}&nbsp;|
                                </span>
                            )
                        })}</h3>
                        <h3>地区语言：{data.nation}({data.language})</h3>
                        <h3>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：<span>{data.category}</span></h3>
                        <h3>上映日期：{data.nation}({data.language})</h3>
                        <p>{data.synopsis}</p>
                    </div>
            </div>   
        }
        return(
            <div className="detail">
                  <Header />
                {a}
                <div className="bottom">
                    <button className="btn">立即购票</button>
                </div>
            </div>
        )
    
    }
}


export default Detail
import React,{Component} from 'react'
import axios from 'axios'
import Swiper from 'swiper'
import '../css/swiper.min.css'
import '../css/lunbo.css'

class Lunbo extends Component{
    constructor(){
        super();
        this.state={
            films:[]
        }  
    }
    
    componentDidMount(){
        axios.get("/v4/api/billboard/home?__t=1519726914018").then((res)=>{
            this.setState({
                 films:res.data.data.billboards 
            })
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,
                loop:true
              })
        })
    }
    render(){
        return(
            <div className="lunbo">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                           {
                               this.state.films.map(function(item,index){
                                    return(
                                        <div className="swiper-slide"  key={item.name}>
                                            <img src={item.imageUrl}alt=""/>
                                        </div>
                                    )
                               })
                           }
                    </div>
                </div>
            </div>
        )
    }
}

export default Lunbo
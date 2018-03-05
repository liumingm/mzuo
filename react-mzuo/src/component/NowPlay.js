import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../css/nowplay.css'


class NowPlay extends Component{
    constructor(){
        super();
        this.state={
            films:[]
        }
    }
    componentDidMount(){
        axios.get("/v4/api/film/now-playing?__t=1519733987912&page=1&count=5").then((res)=>{
            console.log(res)
            this.setState({
                 films:res.data.data.films 
            })
        })
    }
    render(){
        return(
            <div className="nowplay">
             <ul>
               {
                this.state.films.map(function(item,index){
                    return(
                       
                            <li key={item.name}>
                            <Link to={"/Detail/"+item.id}>
                                <img src={item.cover.origin} alt=""/>
                                <div>
                                <h4>{item.name}</h4>
                                <h5>{item.cinemaCount}影院上映<span>{item.watchCount}购票</span></h5>
                                </div>
                                <p>
                                    {item.grade}
                                </p>
                            </Link>
                            </li>
                       
                    )
                }) 
               }
               </ul>
            </div>
        )
    }
}


export default NowPlay
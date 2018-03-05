import React, { Component } from 'react';
import App from '../App'
import Detail from './Detail'
import '../css/index.css'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

class Index extends Component{
    render(){
        return(
            <Router>
                <div className="index">
               
                
                <Route exact path="/" component={App}/>
                <Route path="/Detail/:fid" component={Detail}/>
                </div>
            </Router> 
        )
    }
}
export default Index;
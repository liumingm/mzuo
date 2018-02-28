import React, { Component } from 'react';
import App from '../App'
import Detail from './Detail'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

class Index extends Component{
    render(){
        return(
            <Router>
                <div>
                <Link to="/"></Link>
                
                <Route exact path="/" component={App}/>
                <Route path="/Detail" component={Detail}/>
                </div>
            </Router> 
        )
    }
}
export default Index
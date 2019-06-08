import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Routers from './index';

class Router extends Component{
    constructor(props){
        super(props);
    }

    render(){
        function RouterItem(){
            return Routers.map((item,index)=>{
                return (<Route exact={item.exact} key={item.path} path={item.path} component={item.component}></Route>)
            })
        }
        return (
            <>
                <RouterItem></RouterItem>
            </>
        )
    }
}

export default Router;
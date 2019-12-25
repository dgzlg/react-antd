import React, { Component } from 'react'; 
import Bheader from './B-header.js'
import Bbody from './B-body1.js'
import B2 from './B-body2.js'
import B3 from './B-body3.js'
import {Link,Route,HashRouter} from 'react-router-dom'
class RightContent extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div className="Content">
                <Bheader/>
                <Route path='/page1' component={Bbody}/>
                <Route path='/page2' component={B2}/>
                <Route path='/page3' component={B3}/>
            </div>
        );
    }
}
 
export default  RightContent;
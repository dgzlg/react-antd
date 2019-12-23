import React, { Component } from 'react';
 
import Bheader from './B-header.js'
import Bbody from './B-body.js'
class RightContent extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (
            <div className="Content">
                <Bheader/>
                <Bbody/>
            </div>
        );
    }
}
 
export default  RightContent;
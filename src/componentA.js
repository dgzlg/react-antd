import React from 'react'
export class Headers extends React.Component{
    render(){
    if(this.props.hh){
    return <div>组件A{this.props.hh}</div>
    }
    return <div>默认渲染的组件</div> 
}
}

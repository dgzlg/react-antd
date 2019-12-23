import React from 'react'
import ReactDOM from 'react-dom'

import Siderbar from './A.js'
import Rightcontent from './B.js'
import './list.less'
const app=document.getElementById('app')
let Dom=<div className="main"><Siderbar/><Rightcontent/></div>
ReactDOM.render(
  Dom,
  app
)

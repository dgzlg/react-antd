import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Link,Route} from 'react-router-dom'

import Siderbar from './A.js'
import Rightcontent from './B.js'
import './list.less'
const app=document.getElementById('app')
let Dom=<HashRouter><div className="main"><Siderbar/><Rightcontent/></div></HashRouter>
ReactDOM.render(
  Dom,
  app
)

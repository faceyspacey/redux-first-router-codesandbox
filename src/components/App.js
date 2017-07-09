import React from 'react'
import DevTools from './DevTools'
import Sidebar from './Sidebar'
import Switcher from './Switcher'
import '../css/App.css'

export default () =>
  <div>
    <div className='app'>
      <Sidebar />
      <Switcher />
    </div>

    <DevTools />
  </div>

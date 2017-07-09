import React from 'react'
import { connect } from 'react-redux'
import '../css/DevTools.css'

const DevTools = () =>
  <div className='container'>
    <div className='titleBar'>
      <span>ACTIONS</span>
      <span>DEV-TOOLS</span>
      <span>STATE</span>
    </div>

    <div className='devTools'>
      <ActionsBox />
      <StateBox />
    </div>
  </div>

const ActionsBoxComponent = ({ actions }) =>
  <div className='actionsBox'>
    <pre>{JSON.stringify(actions, null, 1)}</pre>
  </div>

const mapState1 = ({ actions }) => ({ actions })
const ActionsBox = connect(mapState1)(ActionsBoxComponent)

const StateBoxComponent = state =>
  <div className='stateBox'>
    <pre>{JSON.stringify(state, null, 1)}</pre>
  </div>

const mapState2 = state => ({ ...state, actions: undefined })
const StateBox = connect(mapState2)(StateBoxComponent)

export default DevTools

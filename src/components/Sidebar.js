import React from 'react'
import { connect } from 'react-redux'
import Link, { NavLink } from 'redux-first-router-link'
import { goToPage } from '../actions'
import '../css/Sidebar.css'

const Sidebar = ({ onClick, path }) =>
  <div className='sidebar'>
    <h2>SEO-FRIENDLY LINKS</h2>

    <NavLink activeClassName='active' exact to='/'>HOME</NavLink>

    <NavLink activeClassName='active' to='/list/db-graphql'>
      DB & GRAPHQL
    </NavLink>

    <NavLink activeClassName='active' to={['list', 'react-redux']}>
      REACT & REDUX
    </NavLink>

    <NavLink activeClassName='active' to={{ type: 'LIST', payload: { category: 'fp' } }}>
      FP
    </NavLink>

    <div style={{ height: 20 }} />
    <h2>EVENT HANDLERS</h2>

    <span className={active(path, '/')} onClick={() => onClick('HOME')}>
      HOME
    </span>

    <span
      className={active(path, '/list/db-graphql')}
      onClick={() => onClick('LIST', 'db-graphql')}
    >
      DB & GRAPHQL
    </span>

    <span
      className={active(path, '/list/react-redux')}
      onClick={() => onClick('LIST', 'react-redux')}
    >
      REACT & REDUX
    </span>

    <span
      className={active(path, '/list/fp')}
      onClick={() => onClick('LIST', 'fp')}
    >
      FP
    </span>

    <div style={{height: 40 }} />

    <Link to={{ type: 'ADMIN' }}>ADMIN</Link>
  </div>

const active = (currentPath, path) =>
  currentPath === path ? 'link active' : 'link'

const mapDispatch = { onClick: goToPage }
const mapState = ({ location }) => ({ path: location.pathname })
export default connect(mapState, mapDispatch)(Sidebar)


// NOTE: there's an example using <Link /> instead of <Nav Link /> for your reference :)
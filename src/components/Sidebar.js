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

    <div style={{height: 14 }} />

    <Link to='https://github.com/faceyspacey/redux-first-router' target='_blank' style={{padding: 7}}>
      <GithubLogo />
      {' RFR on Github'}
    </Link>

    <div style={{height: 5 }} />

    <Link to={{ type: 'ADMIN' }} className={active(path, '/admin')}>ADMIN</Link>
  </div>

const active = (currentPath, path) =>
  currentPath === path ? 'link active' : 'link'

const mapDispatch = { onClick: goToPage }
const mapState = ({ location }) => ({ path: location.pathname })
export default connect(mapState, mapDispatch)(Sidebar)

// NOTE: there's an example using <Link /> instead of <Nav Link /> for your reference :)


const GithubLogo = () =>
  <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" style={{verticalAlign: 'middle', position: 'relative', top: -1}}>
    <g>
      <path d="m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z"></path>
    </g>
  </svg>
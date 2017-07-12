import React from 'react'
import '../css/Home.css'

const Home = () =>
  <div className='home'>
    <h1>HOME</h1>

    <h2>
      NOTE: The top set of links are real links made like this:
    </h2>

    <span style={{color: 'rgb(200,200,200)', marginTop: 20}}>HREF STRING:</span>
    <span>{"<Link to='/list/db-graphql'>DB & GRAPHQL</Link>"}</span>

    <span style={{color: 'rgb(200,200,200)', marginTop: 20}}>PATH SEGMENTS:</span>
    <span>{"<Link to={['list', 'react-redux']}>REACT & REDUX</Link>"}</span>

    <span style={{color: 'rgb(200,200,200)', marginTop: 20}}>ACTION:</span>
    <span>{"<Link to={{ type: 'LIST', payload: {slug: 'fp'} }}>FP</Link>"}</span>

    <h1 style={{margin: 20}}>EVENT HANDLERS DISPATCH ACTION</h1>

    <pre>
      {`
onClick: () => dispatch({
  type: 'LIST',
  payload: { category: 'react-redux' }
})
      `}
    </pre>

    <div>
      <span style={{color: '#c5af8f', display: 'inline'}}>DIRECTIONS: </span>
      <span className='directions'>
        {`inspect the sidebar tabs to see the top set are real <a> tag links and the
        bottom set not, yet the address bar changes for both. The decision is up to you.
        When using the <Link /> component, if you provide an action as the \`href\` prop, you never
        need to worry if you change the static path segments (e.g: \`/list\`) in the routes passed 
        to \`connectRoutes\`.`}
      </span>
    </div>

    <h1 style={{marginTop: 25 }}>ARTICLES ABOUT REDUX-FIRST ROUTER:</h1>
    > <a className="articleLinks" href="https://medium.com/faceyspacey/redux-first-router-lookin-sexy-on-code-sandbox-d9d9bea15053">
      THINGS YOU YOU SHOULD PAY ATTENTION TO IN THIS SANDBOX
    </a>

    <br />
    <br />
    
    > <a className="articleLinks" href="https://medium.com/faceyspacey/pre-release-redux-first-router-a-step-beyond-redux-little-router-cd2716576aea">
      INITIAL LAUNCH ARTICLE THAT DESCRIBES HOW RFR CAME TO BE
    </a>
  </div>

export default Home

import React from 'react'
import '../css/Home.css'

const Home = () =>
  <div className='home'>
    <h1>HOME</h1>

    <h2>
      NOTE: The top set of links are real links made like this:
    </h2>

    <span style={{color: 'rgb(200,200,200)', marginTop: 8}}>HREF STRING:</span>
    <span>{"<Link to='/list/db-graphql'>DB & GRAPHQL</Link>"}</span>

    <span style={{color: 'rgb(200,200,200)', marginTop: 8}}>PATH SEGMENTS:</span>
    <span>{"<Link to={['list', 'react-redux']}>REACT & REDUX</Link>"}</span>

    <span style={{color: 'rgb(200,200,200)', marginTop: 8}}>ACTION:</span>
    <span>{"<Link to={{ type: 'LIST', payload: {slug: 'fp'} }}>FP</Link>"}</span>

    <h1 style={{margin: 20}}>EVENT HANDLERS DISPATCH ACTION (NO SEO BENEFITS)</h1>

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
  </div>

export default Home

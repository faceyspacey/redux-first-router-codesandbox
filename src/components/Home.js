import React from 'react'
import '../css/Home.css'

const Home = () =>
  <div className='home'>
    <h1>HOME</h1>

    <h2 style={{marginBottom: 50}}>
      NOTE: The top set of links are real links made like this:
    </h2>

    <span>
      {'HREF STRING: <Link to="/list/db-graphql">DB & GRAPHQL</Link>'}
    </span>
    <span>
      {"PATH SEGMENTS: <Link to={['list', 'react-redux']}>REACT & REDUX</Link>"}
    </span>
    <span>
      {
        "ACTION: <Link to={{ type: 'LIST', payload: { category: 'fp' } }}>FP</Link>"
      }
    </span>

    <h1 style={{margin: 40}}>EVENT HANDLERS DISPATCH ACTION (NO SEO BENEFITS)</h1>

    <pre>
      {`
onClick: () => dispatch({
  type: 'LIST',
  payload: { category: 'react-redux' }
})
      `}
    </pre>

    <div>
      <span style={{color: 'rgb(254, 209, 158)', display: 'inline'}}>DIRECTIONS: </span>
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

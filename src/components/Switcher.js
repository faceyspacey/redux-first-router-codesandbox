import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, Transition } from 'transition-group'
import universal from 'react-universal-component'
import '../css/Switcher.css'

const Switcher = ({ page, direction, isLoading }) =>
  <TransitionGroup
    className={`switcher ${direction}`}
    duration={500}
    prefix='slide'
  >
    <Transition key={page}>
      <UniversalComponent page={page} isLoading={isLoading} />
    </Transition>
  </TransitionGroup>

const mapState = ({ page, direction, videosByCategory }) => {
  const { category, categories } = videosByCategory
  const isLoading = page === 'List' && !categories[category]
  return { page, direction, isLoading }
}

export default connect(mapState)(Switcher)

const UniversalComponent = universal(props => import(`./${props.page}`), {
  chunkName: props => props.page,
  minDelay: 500,
  loading: () => <div className='spinner'><div /></div>,
  error: () => <div className='notFound'>PAGE NOT FOUND - 404</div>
})

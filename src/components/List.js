import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import '../css/List.css'

const List = ({ videos }) =>
  <div className='list'>
    {videos.map((video, key) => <Row {...video} key={key} />)}
  </div>

const Row = ({ slug, title, youtubeId, by, color, titleColor }) =>
  <Link
    className='row'
    to={`/video/${slug}`}
    style={{ backgroundImage: youtubeBackground(youtubeId) }}
  >
    <div className='avatar' style={{ backgroundColor: color }}>
      {initials(by)}
    </div>
    <span className='title' style={{background: titleColor}}>{title}</span>

    <div className='gradient' />
    <span className='by'>by: {by}</span>
  </Link>

const youtubeBackground = youtubeId =>
  `url(https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg)`

const initials = by => by.split(' ').map(name => name[0]).join('')

const mapState = ({ category, videosByCategory, videosHash }) => {
  const slugs = videosByCategory[category] || []
  const videos = slugs.map(slug => videosHash[slug])
  return { videos }
}

export default connect(mapState)(List)

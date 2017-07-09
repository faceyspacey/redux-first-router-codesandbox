import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import '../css/Video.css'

const Player = ({ playing, youtubeId, slug, color }) =>
  !playing
    ? <div
      className='heroContainer'
      style={{ backgroundImage: youtubeBackground(youtubeId) }}
    >
      <Link to={`/video/${slug}/play`}>
        <span className='ion-play' style={{ backgroundColor: color }} />
      </Link>
    </div>
    : <iframe
      className='iframe'
      frameBorder='0'
      title='programming video'
      allowFullScreen
      src={youtubeIframeSrc(youtubeId)}
    />

const youtubeBackground = youtubeId =>
  `url(https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg)`

const youtubeIframeSrc = youtubeId =>
  `https://www.youtube.com/embed/${youtubeId}?playlist=${youtubeId}&autoplay=1&rel=0&theme=dark&loop=1&color=white&controls=2&autohide=1&showinfo=0`

const mapState = ({ playing }) => ({ playing })
export default connect(mapState)(Player)

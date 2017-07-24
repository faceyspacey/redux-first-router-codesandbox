import { createSelector } from 'reselect'

export default createSelector([
    state => state.location.type,
    state => state.location.payload,
    state => state.videosHash,
    state => state.videosByCategory,
  ],
  (type, { slug, category }, videosHash, videosByCategory) => {
    if (type === 'VIDEO') return !videosHash[slug]
    if (type === 'LIST') return !videosByCategory[category]
  }
)
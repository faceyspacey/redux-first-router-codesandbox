export default (state = {}, action = {}) => {
  if (action.type === 'VIDEOS_FETCHED') {
    const { category, videos } = action.payload
    const slugs = videos.map(video => video.slug)
    return { ...state, [category]: slugs }
  }

  return state
}

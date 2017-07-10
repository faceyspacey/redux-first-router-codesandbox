import { redirect, NOT_FOUND } from 'redux-first-router'
import fetchData from './api'

// the primary thing to take note of on this page is the way "route thunks"
// allow you to fetch data in an identical way to dispatching thunks

export default {
  HOME: '/',
  LIST: {
    path: '/list/:category',
    thunk: async (dispatch, getState) => {
      const {
        location: { payload: { category } },
        videosByCategory: { categories }
      } = getState()

      if (categories[category]) return // has data in redux already
      const videos = await fetchData(`/api/videos/${category}`)

      // you can dispatch NOT_FOUND any time you want, just as the middleware
      // will automatically do so when no matching routes are found
      if (videos.length === 0) {
        return dispatch({ type: NOT_FOUND })
      }

      dispatch({ type: 'VIDEOS_FETCHED', payload: { videos, category } })
    }
  },
  VIDEO: {
    path: '/video/:slug',
    thunk: async (dispatch, getState) => {
      // TASK FOR YOU. YES, YOU!
      //
      // visit a VIDEO page in the app, then refresh the page, then make
      // this work when visited directly by copying the LIST route above and
      // using fetchData(`/api/video/${slug}`) and by dispatching
      // the corresponding action type which I'll leave up to you to find
      // in ../reducers/index.js :)
    }
  },
  PLAY: {
    path: '/video/:slug/play',
    thunk: (dispatch, getState) => {
      if (typeof window === 'undefined') {
        const { slug } = getState().location.payload
        const action = redirect({ type: 'VIDEO', payload: { slug } })

        // we don't let you visit the playing video page directly because in this case
        // it wouldn't be good UX, but we like it URL-ized while navigating the app
        dispatch(action)
      }
    }
  },
  LOGIN: '/login',
  ADMIN: {
    path: '/admin', // TRY: visit this path or dispatch ADMIN
    role: 'admin'   // + in reducers/index.js set the user's role to admin to get in
  }
}

// DON'T GO DOWN THERE!
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// ▼

// ANSWER: videoRoute.thunk.body:
/* HURRAY! You found the answers on the back of the cereal box!

thunk: async (dispatch, getState) => {
  const { location: { payload: { slug } } } = getState()
  const video = await fetchData(`/api/video/${slug}`)

  if (!video) {
    return dispatch({ type: NOT_FOUND })
  }

  dispatch({ type: 'VIDEO_FOUND', payload: video })
}
*/

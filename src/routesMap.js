import { redirect, NOT_FOUND } from 'redux-first-router'
import fetchData from './api'

// the primary thing to take note of on this page is the way "route thunks"
// allow you to fetch data in an identical way to dispatching thunks

const routesMap = {
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

// The purpose of the below options is to demonstrate auth filtering.
// onBeforeChange fires before going to a new route, and you can
// redirect if certian conditions aren't met.

export const options = {
  onBeforeChange: (dispatch, getState, action) => {
    const allowed = isAllowed(action.type, getState())

    if (!allowed) {
      const action = redirect({ type: 'LOGIN' })
      dispatch(action)
    }
  },
  onAfterChange: (dispatch, getState) => {
    const { type } = getState().location

    if (type === 'LOGIN') {
      setTimeout(() => {
        alert(
          "NICE, You're adventurous! First look in the 'src/routesMap.js' file to see how you got redirected to /login. Then try setting the user's role to 'admin' in reducers/index.js to get in access the Admin Panel. Then 'onBeforeChange' will let you in."
        )
      }, 1500)
    }
  }
}

const isAllowed = (type, state) => {
  const role = routesMap[type] && routesMap[type].role // you can put arbitrary keys in routes

  if (!role) return true
  if (!state.user) return false // in a real app, a user isn't always logged in

  return state.user.roles.includes(role)
}

export default routesMap


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

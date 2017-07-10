import { redirect } from 'redux-first-router'

// The purpose of the below options is to demonstrate auth filtering.
// onBeforeChange fires before going to a new route, and you can
// redirect if certian conditions aren't met.

export default {
  onBeforeChange: (dispatch, getState, action) => {
    const { user, location: { routesMap } } = getState()
    const allowed = isAllowed(action.type, user, routesMap)

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

const isAllowed = (type, user, routesMap) => {
  const role = routesMap[type] && routesMap[type].role // you can put arbitrary keys in routes

  if (!role) return true
  if (!user) return false // in a real app, a user isn't always logged in

  return user.roles.includes(role)
}
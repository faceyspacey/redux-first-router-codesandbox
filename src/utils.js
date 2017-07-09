import routesMap from './routesMap'

export const isAllowed = (type, state) => {
  const role = routesMap[type] && routesMap[type].role // you can put arbitrary keys in routes

  if (!role) return true
  if (!state.user) return false // in a real app, a user isn't always logged in

  return state.user.roles.includes(role)
}

export const capitalize = str =>
  str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

export const fakeDelay = ms => new Promise(res => setTimeout(res, ms))
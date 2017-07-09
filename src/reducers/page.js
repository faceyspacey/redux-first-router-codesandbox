import { NOT_FOUND } from 'redux-first-router'

export default (state = 'HOME', action = {}) =>
  components[action.type] || state

const components = {
  HOME: 'Home',
  LIST: 'List',
  VIDEO: 'Video',
  ADMIN: 'Admin',
  LOGIN: 'Login',
  [NOT_FOUND]: 'NotFound'
}

// NOTES: this is the primary reducer demonstrating RFR.
// Forget a switch, use a hash table for perf.
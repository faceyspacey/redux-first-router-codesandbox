export default (state = '', action = {}) =>
  action.type === 'VIDEO' ? action.payload.slug : state
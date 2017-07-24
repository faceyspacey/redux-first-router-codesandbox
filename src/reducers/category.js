const initialState = { category: '', categories: {} }

export default (state = initialState, action = {}) =>
  action.type === 'LIST' ? action.payload.category : state

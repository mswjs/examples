const users = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export default users

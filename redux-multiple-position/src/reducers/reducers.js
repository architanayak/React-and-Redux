const position_holders = [
  {
    email: 'admin',
    pass: 'admin'

  },
  {
    email: 'doctor',
    pass: 'doctor'
  },
  {
    email: 'user',
    pass: 'user'
  },
]

const initialState = {
  userRoles: position_holders
}

export default function (state = initialState, action) {
  return state
}
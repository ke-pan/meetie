export default function users(state = [], action) {
  switch (action.type) {
    case 'SIGN_UP':
          return state.concat([action.user]);
    default:
          return state;
  }
}

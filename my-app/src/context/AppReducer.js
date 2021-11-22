export default (state, action) => {
    switch(action.type) {
      case 'SEE_NOTIFICATION': 
        state.notifications.find(x => x.id === action.payload.id).seen = true
        return {
          ...state,
        }
      default:
        return state;
    }
  }
export default (state, action) => {
    switch(action.type) {
      case 'SEE_NOTIFICAION': 
        return {
          ...state,
          notifications: state.notifications.id.seen === true
        }
      default:
        return state;
    }
  }
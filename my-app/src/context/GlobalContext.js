import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    notifications: [{
        id: generateId(),
        notification: {
            category: 'analitic',
            value: 28
        },
        state: {
            seen: true
        },
        dateCreated: new Date()
    },
    {
        id: generateId(),
        notification: {
            category: 'analitic',
            positive: 44
        },
        state: {
            seen: false
        },
        dateCreated: new Date()
    }]
  }

  //Function Generate Random ID
  function generateId(){
      return Math.floor(Math.random()  * 1000000)
  }

  
  
  // Create context
  export const GlobalContext = createContext(initialState);
  
  // Provider component
  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Function "See Notification"
  function seeNotification(id){
    dispatch({
        type: 'SEE_NOTIFICATION',
        payload: id
      });
  }

  
    return (<GlobalContext.Provider value={{
      notifications: state.notifications,
      seeNotification
    }}>
      {children}
    </GlobalContext.Provider>);
  }
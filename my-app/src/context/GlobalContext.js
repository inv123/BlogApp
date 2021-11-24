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
    seen: true,
    dateCreated: new Date()
  },
  {
    id: generateId(),
    notification: {
      category: 'analitic',
      value: 44
    },
    seen: false,
    dateCreated: new Date()
  },
  {
    id: generateId(),
    notification: {
      category: 'analitic',
      value: -28
    },
    seen: false,
    dateCreated: new Date()
  }],

  
  tablesData: {
    posts: {
      year2020: [
        {january: 2000},
        {february: 1000},
        {march: 1000}
      ]
    },
    pages: {
      year2020: [
        {january: 1000},
        {february: 500},
        {march: 300}
      ]
    },
    comments: {
      year2020: [
        {january: 3000},
        {february: 1000},
        {march: 200}
      ]
    },
    newCustomers: {
      year2020: [
        {january: 2},
        {february: 3},
        {march: 4}
      ]
    },
    newSubscribers: {
      year2020: [
        {january: 5},
        {february: 10},
        {march: 15}
      ]
    }
  }
}

//Function Generate Random ID
function generateId() {
  return Math.floor(Math.random() * 1000000)
}



// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Function "See Notification"
  function seeNotification(id) {
    dispatch({
      type: 'SEE_NOTIFICATION',
      payload: {
        id,
        seen: true
      }
    });
  }


  return (<GlobalContext.Provider value={{
    notifications: state.notifications,
    tablesData: state.tablesData,
    seeNotification
  }}>
    {children}
  </GlobalContext.Provider>);
}
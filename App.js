import React, { useContext, useEffect, useReducer } from 'react'
import { AuthReducer } from './app/hooks/AuthReducer';
//import { AsyncStorage } from 'react-native';
//import { AuthReducer } from './app/hooks/AuthReducer';
//import AccountStack from './app/navigations/AccountStack';
import Navigation from './app/navigations/Navigation'
//import UserGuest from './app/screens/Account/UserGuest';
//import { AuthContext } from './app/hooks/AuthContext';
import Account from "./app/screens/Account/Account";

// const init = async () => {
//   return JSON.parse(await AsyncStorage.getItem('user')) || { logged: false }
// }

//const init = {user: "", logged: false}

export default function App() {

  const [user, dispatch] = useReducer(AuthReducer, {})

  return (
    
    user != "" ? <Account/> : <Navigation/>
    
  );

}

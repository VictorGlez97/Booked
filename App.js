import React, { useContext, useEffect, useReducer } from 'react'
import { AsyncStorage } from 'react-native';
import { AuthReducer } from './app/hooks/AuthReducer';
import AccountStack from './app/navigations/AccountStack';
import Navigation from './app/navigations/Navigation'
import UserGuest from './app/screens/Account/UserGuest';

const init = async () => {
  return JSON.parse(await AsyncStorage.getItem('user')) || { logged: false }
}

export default function App() {
  
  const [user, dispatch] = useReducer(AuthReducer, {}, init)

  useEffect( async () => {
    
    await AsyncStorage.getItem('user', JSON.stringify(user))

  }, [user])

  return (
    
    // { 
    //   user = null 
    //   ? 
      <UserGuest/> 
    //   :
    //   <AuthContext.Provider value={{ user, dispatch }}>
    //     <Navigation />
    //   </AuthContext.Provider> 
    // }
    
  );

}

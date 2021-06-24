import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Loading from '../../components/Loading'

import UserGuest from './UserGuest'
// import UserLogged from './UserLogged'

export default function Account() {
    
    // const [login, setlogin] = useState(null)
    
    // useEffect(() => {
    //     setlogin(false);
    //     console.log(login)
    // }, [])

    // if ( login === null ) return <Loading isVisible={ true } />

    // return login ? <UserLogged /> : <UserGuest />;

    return <UserGuest />
}

import React, { createContext, useState } from 'react'

export const initialState = {
    user: {
        name: '',
        lastname: '',
        email: '',
    },
    active: false,
}

const UserContext = createContext(initialState)

export default function UserProvider(props) {
    
    const [User, setuser] = useState(initialState)
    
    return(
        <UserContext.Provider value={initialState}>
            {props.children}
        </UserContext.Provider>
    )
}

// const userReducer = (state = initialState, payload) => {

//     switch (payload.type) {
//         case 'sign-in':
//             console.log(state)
//             return { ...state, user: payload.data, active: true }
//             break;

//         case 'sign':
//             console.log(state)
//             return
//             break;
    
//         case 'sign-out':

//             break;

//         default:
//             break;
//     }

// }

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import AccountStack from './AccountStack'
import DatesStack from './DatesStack'

const Drawer = createDrawerNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={ DatesStack }>
                <Drawer.Screen 
                    name='account'
                    component={ AccountStack } 
                    options={{ title: 'Cuenta' }}
                />
                
                <Drawer.Screen 
                    name='calendar' 
                    component={ DatesStack }
                    options={{ title: 'Calendario' }} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dates from '../screens/Dates';

const Stack = createStackNavigator();

export default function DatesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='calendar'
                component={ Dates }
                options={{ title: 'Calendario' }}
            />
        </Stack.Navigator>
    )
}

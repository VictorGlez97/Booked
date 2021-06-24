import React, { useState, useReducer } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
//import useFetch from "../hooks/useFetch";

export default function UserGuest() {
    
    //const [user, dispatch] = useReducer(AuthReducer, {}, init)

    const HandleInputChange = (e, inpt) => {
        setInput({
            ...input,
            [ inpt ] : e,
        })        
        // console.log( input )
    }

    const HandleSubmit = async () => {

        const url = 'https://apibooked.000webhostapp.com/User/index'; 

        const User = JSON.stringify([{
            'email': input.user,
            'password': input.password,
            'request': 'verify_user',
        }])

        const response = await fetch( url, {
            method: 'POST',
            body: User,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        const jsonResponse = await response.json();
        console.log(jsonResponse);

    }
    
    return (
        <View style={ styles.fondo }>


            <View style={ styles.form }>
                <Text style={ styles.title }> Booked </Text>
                
                {/* <Text style={ styles.label }> Usuario </Text> */}
                <TextInput 
                    style={ styles.input }
                    onChangeText={ ( e ) => HandleInputChange( e, 'user' ) }
                    placeholder='Usuario'
                    placeholderTextColor={'#45B39D'}
                />
                
                {/* <Text style={ styles.label }> Contraseña </Text> */}
                <TextInput 
                    style={ styles.input }
                    onChangeText={ ( e ) => HandleInputChange( e, 'password' ) }
                    secureTextEntry={true}
                    placeholder='Contraseña'
                    placeholderTextColor={'#45B39D'}
                />

                <Button 
                    title='Entrar'
                    onPress={ HandleSubmit }
                    containerStyle={ styles.btnContainer }
                    buttonStyle={ styles.btnLogin }
                    titleStyle={ styles.btnLoginTitle }
                />
            </View>

        </View>
    )
}

/* 
#0E6655
#ECF0F1
#A3E4D7 
#E8F8F5
#FDFEFE 
#17202A
*/

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#0E6655',
        height: '100%',
        fontWeight: 'bold',
    },
    title: {
        color: '#ECF0F1',
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 7,
    },
    form: {
        marginTop: '30%',
        //padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 50,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        borderColor: '#A3E4D7',
        padding: 3,
        fontSize: 25,
        fontWeight: 'bold',
        borderRadius: 18,
        color: '#E8F8F5',
        padding: 10,
    },
    btnContainer: {
        width: '85%',
        height: 90,
        margin: 20,
        color: '#17202A'
    },
    btnLogin: {
        backgroundColor: '#FDFEFE',
        color: '#17202A',
        borderRadius: 5,
    },
    btnLoginTitle: {
        color: '#17202A'
    }
})
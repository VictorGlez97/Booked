import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements/dist/overlay/Overlay'

export default function Loading() {
    return (
        <Overlay 
            isVisible={ isVisible }
            windowBackgroundColor="rgbs(0, 0, 0, 0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={ styles.overlay }
        >

            <ActivityIndicator size="large" color="#00A68A" />

        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        width: 200,
        height: 100,
        backgroundColor: "#FFF",
        borderColor: "#00a680",
        borderWidth: 2,
        borderRadius: 10,
    },
})
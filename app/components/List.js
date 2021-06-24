import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, ListItem, Icon } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler";

export default function List() {
    return (
        <ScrollView>
            <Card containerStyle={ styles.cards }>
                <ListItem>
                    {/* <Avatar /> */}
                    <ListItem.Content>
                        <ListItem.Title> { 'Victor' } </ListItem.Title>
                        <ListItem.Subtitle> { '20:00 - 21:00' } </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    {/* <Avatar /> */}
                    <ListItem.Content>
                        <ListItem.Title> { 'Victor' } </ListItem.Title>
                        <ListItem.Subtitle> { '20:00 - 21:00' } </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    {/* <Avatar /> */}
                    <ListItem.Content>
                        <ListItem.Title> { 'Victor' } </ListItem.Title>
                        <ListItem.Subtitle> { '20:00 - 21:00' } </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    {/* <Avatar /> */}
                    <ListItem.Content>
                        <ListItem.Title> { 'Victor' } </ListItem.Title>
                        <ListItem.Subtitle> { '20:00 - 21:00' } </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    {/* <Avatar /> */}
                    <ListItem.Content>
                        <ListItem.Title> { 'Victor' } </ListItem.Title>
                        <ListItem.Subtitle> { '20:00 - 21:00' } </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    {/* <Avatar /> */}
                    <ListItem.Content>
                        <ListItem.Title> { 'Victor' } </ListItem.Title>
                        <ListItem.Subtitle> { '20:00 - 21:00' } </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cards: {
        padding: 0,
    }
})

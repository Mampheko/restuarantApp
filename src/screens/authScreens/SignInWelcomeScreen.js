import React from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { colors, parameters, title } from '../../global/styles';



export default function SignInWelcomeScreen() {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 3, justifyContent: "flex-start", alignItems: "center", paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}>DISCOVER RESTAURANTS</Text>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}>IN YOUR AREA</Text>
           
            </View>
            </View>
       
    

        
    )
}

const styles = StyleSheet.create({
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent:"center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 50,
        paddingHorizontal: 20,
        borderColor:colors.buttons
    },
    createButtonTitle: {
        color:colors.grey1,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop:-3

    }
})
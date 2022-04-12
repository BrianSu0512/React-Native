import React from 'react';
import {ImageBackground, StyleSheet  } from 'react-native';

const blurRadiusValue = Platform.OS ==='android' ?0.2 :1;

function AppBackground({children}) {
    return (
        <ImageBackground
        style = {styles.back}
        source = {require("../assets/Background.png")}
        blurRadius={blurRadiusValue}>
            {children}
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    back:{
        flex:1,
        height:844,
        width:"100%"
    },
})

export default AppBackground;
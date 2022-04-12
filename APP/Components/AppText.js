import React from 'react';

import { Text,StyleSheet } from 'react-native';
import { Platform } from 'react-native-web';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AppColour from '../Components/AppColour';


function AppText({style, children}) {
    return (
       <Text style={[styles.text,style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:22,
        fontFamily:Platform.OS==='android' ?"monospace" :"Avenir-Roman",
        fontStyle:'italic',
        fontWeight:'bold',
        textTransform:'uppercase',
        color:AppColour.black,
    }
})

export default AppText;


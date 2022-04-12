import React from 'react';
import {StyleSheet, View} from 'react-native';

import{MaterialCommunityIcons}from'@expo/vector-icons';
import AppColour from './AppColour';

function AppIcon({name, size=40, iconColor,style}) {
    return (
       <View style={{width:size, height:size}}>
           <MaterialCommunityIcons
                name={name}
                size={size}
                color={iconColor}
                style={style}/>
       </View>
    );
}
const styles = StyleSheet.create({
    
})

export default AppIcon;
import React from 'react';
import { TouchableOpacity, StyleSheet,Image } from 'react-native';
import AppColour from './AppColour';

import AppIcon from './AppIcon';
import AppText from './AppText';



function AppPickerItem({onPress, label, image, backgroundColor}) {
    return (
        
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={image} style={styles.image}/>
            <AppText style={styles.text}> {label} </AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical: 10,
        width:"50%",
        alignItems:"center",
        justifyContent:'center',
        marginTop:20,
    },text:{
        fontSize:15,
    },
    image:{
        height:150,
        width:180,
        borderRadius:20

    },
})

export default AppPickerItem;
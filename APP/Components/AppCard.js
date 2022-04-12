import React from 'react';
import { Image, View, StyleSheet,TouchableOpacity} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import AppText from './AppText';


function AppCard({image,title,onPress}) {
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>

       <View style={styles.categries}>
        
        <Image source={image} style={styles.image}/>
           <AppText style={styles.text}>{title}</AppText>
         
       </View>
       </TouchableOpacity>
    </View>
   
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        overflow:'hidden',
        width:"45%",
        borderColor:'black',
        borderWidth:2,
        margin:10,
 
    },categries:{
        justifyContent:'center',
        alignItems:'center',

    },
    image:{
        height:150,
        width:200,

    },
    text:{
        fontSize: 20,
    }
    
})
export default AppCard;
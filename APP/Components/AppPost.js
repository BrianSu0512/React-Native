import React, {useState} from 'react';
import { Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AppIcon from './AppIcon';
import AppColour from './AppColour';
import AppText from './AppText';
import { Swipeable } from 'react-native-gesture-handler';


import DataManager from '../config/DataManager';

function AppPost({image,title,location,summary,tag,update,onSwipeLeft,onPress}) {
    const[count,setCount]=useState(1);

    const[heart,setHeart]=useState(<AppIcon
        name="heart"
        size={25}
        iconColor={AppColour.white}
        style={styles.icon}
    />)

    const colourIcon=()=>[setCount(preCount=>preCount+1),count %2 ===0 ?setHeart(<AppIcon
        name="heart"
        size={25}
        iconColor={AppColour.white}
        style={styles.icon}
    />):setHeart(<AppIcon
        name="heart"
        size={25}
        iconColor={AppColour.red}
        style={styles.icon}
    />)]
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
         <TouchableOpacity onPress={onPress}>
         <View style={styles.container}>
         {isFinite(image)?<Image source={image} style={styles.image}/>:<Image source={{url:image}} style={styles.image}/>}
           

           <View style={styles.postbar}>
           
            <AppText style={styles.text}>{title}</AppText>
            <TouchableOpacity onPress={colourIcon}>
                {heart}
            </TouchableOpacity>
           
           </View>

           <View style={styles.content} >
               <AppText style={styles.contentText}>Location: </AppText>
               <AppText style={styles.contentText}>{location}</AppText>
           </View>

           <View style={styles.content} >
               <AppText style={styles.contentText}>Summary: </AppText>
               <AppText style={styles.contentText}>{summary}</AppText>
           </View>

           <View style={styles.content} >
               <AppText style={styles.contentText}>Tag: </AppText>
               <AppText style={styles.contentText}>{tag}</AppText>
           </View>

           <View style={styles.content} >
               <AppText style={styles.contentText}>Update: </AppText>
               <AppText style={styles.contentText}>{update}</AppText>
           </View>
           
         </View>
        </TouchableOpacity>   
        
        </Swipeable>
       
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        overflow:'hidden',
        width:"80%",
        borderColor:'black',
        borderWidth:0.5,
        margin:10,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        
    },
    image:{
        height:180,
        width:"100%"
    },
    text:{
        color:AppColour.lightYellow,
        fontSize: 20,
    },
    postbar:{
        flexDirection:'row',
        justifyContent:'center',

  
    },
    icon:{
        paddingTop:3,
        marginLeft:30,
        height:30,
        width:30,
    },
    contentText:{
        fontSize: 12,
        textTransform:'none',
        color:AppColour.white,
        paddingBottom:3,
        width:"50%",

    },
    content:{
        flexDirection:'row',
        marginLeft:20,
        width:"80%",
  
    }
    
})
export default AppPost;
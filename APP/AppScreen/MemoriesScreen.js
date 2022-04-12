import React, { useState } from 'react';
import { View,Image,StyleSheet,FlatList,TouchableOpacity,Alert } from 'react-native';

import AppBackground from '../Components/AppBackground';
import AppCard from '../Components/AppCard';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';



const categories =[
    {
        id:1,
        name:"People",
        image:require("../assets/People.jpeg"),
    },
    {
        id:2,
        name:"Restaurant",
        image:require("../assets/Restaurant.jpeg"),
    },
    {
        id:3,
        name:"Activity",
        image:require("../assets/Activities.jpeg"),
    },
    {
        id:4,
        name:"Festival",
        image:require("../assets/Festival.jpeg"),
    },
    {
        id:5,
        name:"ScreenShot",
        image:require("../assets/ScreenShot.jpeg"),
    },
    {
        id:6,
        name:"Others",
        image:require("../assets/Others.jpeg"),
    },
]





function MemoriesScreen({navigation, route}) {

    const getUser = () => {
        let commonData = DataManager.getInstance();
        let id = commonData.getUserID();
        let users=commonData.users.find((u)=>u.id===id);
   
        return users.image;
        
    }
    const userImage=getUser();
    return (
        <AppScreen>
            <AppBackground>
                
                <View style={styles.heading}>

                <TouchableOpacity  onPress={()=>Alert.alert("G'day","Would you like to log out ?",
                    [{text:"Yes",onPress:()=>navigation.navigate("WelcomeScreen")},
                    {text:"NO"}])}>
                    {isFinite(userImage) ? <Image source={userImage} style={styles.userImage}/> :(userImage)=== undefined ? <AppIcon
                        name="account-circle"
                        size={55}
                        style={styles.icon}
                        />:<Image source={{uri: userImage}} style={styles.userImage}/>}
                </TouchableOpacity>    
                    
                
                <View>
                <Image style={{height:80}} source={require("../assets/Logo.png")}/>
                <AppText style={{fontSize:12,paddingLeft:13}} >Memories</AppText>
                </View>

                <TouchableOpacity onPress={()=>{navigation.navigate("NewPostsScreen")}}>
                <AppIcon name="plus" size={55} style={styles.icon}/> 
                </TouchableOpacity>
                
                
                </View>
                <AppText style={styles.text}>Top Categories</AppText>

            <View style={styles.container}>
                
                    <FlatList
                        style={styles.list}
                        numColumns={2}
                        data ={categories}
                        keyExtractor = {categories => categories.id.toString()}
                        renderItem = {({item}) => 
                       
                            <AppCard
                                title={item.name} 
                                image={item.image}
                                onPress={()=>navigation.navigate("AccountScreen",{
                                    paramCategory: item.name
                                })
                                }/>
                    
                        }
                    

                    />
                    
            
               
            </View>

            </AppBackground>
        </AppScreen>
           
    );
}
const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        width:350,
        marginLeft:20,
        marginTop:20,
        justifyContent:'space-between',
    },
    icon:{
        paddingTop:15,
        height:100,
    },
    text:{
        marginTop:20,
        marginLeft:20,
    },
    container:{
        flex:1,
        paddingLeft:3,
    },
    userImage:{
        height: 70,
        width: 70,
        borderRadius: 37,
        marginLeft: 10,
        marginTop: 13,
    },
  
})

export default MemoriesScreen;
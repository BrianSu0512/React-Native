import React, {useState} from 'react';
import {Text, View,Image,StyleSheet,FlatList,ScrollView,TouchableOpacity } from 'react-native';

import AppBackground from '../Components/AppBackground';
import AppCard from '../Components/AppCard';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppPost from '../Components/AppPost';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';




function AccountScreen({props,route,navigation, navigation: { goBack } }) {

    const getPosts = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();
        let categoryPosts=commonData.getPosts(user).filter((post)=>post.category===route.params.paramCategory)
        return categoryPosts;
        
    }

    const newPosts=getPosts();


    const[posts, setPosts] =  useState(newPosts);

    const handleDelete = (post) => {
        const newList =  posts.filter (item => item.id !== post.id);
        setPosts(newList);

        let commonData = DataManager.getInstance();
        commonData.deletePost(post);
    }



    return (
        <AppScreen>
       
        <AppBackground>
        <View style={styles.captionContainer}>
        

        <TouchableOpacity  onPress={() => goBack()}>
            
                <AppIcon
                    name="chevron-left"
                    size={60}
                    style={styles.captionIcon}
                />
                
        </TouchableOpacity>

    <View>
        <Image source={require("../assets/Logo.png")} style={styles.logo}/>
        <AppText style={styles.logoText}>Memories</AppText>
    </View>
   
    </View>

            <AppText style={styles.text}>Top Categories</AppText>

            
            <View style={styles.container}>
            
                <FlatList
                  
                         
                    style={styles.list}
                    data ={posts}
                    keyExtractor = {posts => posts.id.toString()}
                    renderItem = {({item}) => 
                   
                    <AppPost
                            title={item.name} 
                            image={item.image}
                            location={item.location}
                            summary={item.summary}
                            tag={item.tag}
                            update={item.update}
                            description={item.description}
                            onPress={()=>navigation.navigate("MoreInfScreen",{
                                paramPost: item
                            })}
                            onSwipeLeft={() => (
                                <View style={styles.deleteView}>
                                    <TouchableOpacity onPress={() => handleDelete(item)}>
                                        <AppIcon name="trash-can" size={50}/> 
                                    </TouchableOpacity>
                                </View>)}/>}

                /> 
            </View>
            


        </AppBackground>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    captionContainer:{
        flexDirection:"row",
        width:210,
        marginLeft:20,
        marginTop:20,
        justifyContent:'space-between',
     
    },
    icon:{
        paddingTop:15,
        height:100,
    },
    container:{
      marginLeft:40,
      maxHeight:650,
    },
    captionIcon:{
       paddingTop:15,
       height:100,
    },
    logo:{
        width:80,
        height:80,
    },
    logoText:{
        fontSize:13,
        paddingLeft:5,
    },
    deleteView:{
        width:75,   
        justifyContent:"center",
        alignItems:"center",
    },text:{
        marginLeft:15,
    }
})

export default AccountScreen;
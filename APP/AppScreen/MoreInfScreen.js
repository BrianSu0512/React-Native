import React, {useState} from 'react';
import { View,Image,StyleSheet,FlatList,TouchableOpacity } from 'react-native';

import AppBackground from '../Components/AppBackground';
import AppCard from '../Components/AppCard';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppMoreInf from '../Components/AppMoreInf';
import AppPost from '../Components/AppPost';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import AppScreen from './AppScreen';


function MoreInfScreen({props,route,navigation,navigation: { goBack } }) {
 
    const data=[route.params.paramPost];

    const[post, setPost] =  useState(data);

    const handleDelete = (post) => {
        setPost('');
        let commonData = DataManager.getInstance();
        commonData.deletePost(post);
        navigation.navigate("MemoriesScreen")
    }
    const[count,setCount]=useState(1);

    const[heart,setHeart]=useState(<AppIcon
        name="heart"
        size={55}
        iconColor={AppColour.white}
        style={styles.icon}
    />)

    const colourIcon=()=>[setCount(preCount=>preCount+1),count %2 ===0 ?setHeart(<AppIcon
        name="heart"
        size={55}
        iconColor={AppColour.white}
        style={styles.icon}
    />):setHeart(<AppIcon
        name="heart"
        size={55}
        iconColor={AppColour.red}
        style={styles.icon}
    />)]
    return (
        <AppScreen>
        <AppBackground>
            <View style={styles.captionContainer}>

            <TouchableOpacity  onPress={()=>goBack()}>
                   
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

            <TouchableOpacity onPress={colourIcon}>
                {heart}
            </TouchableOpacity>
            </View>


                
            <View style={styles.container}>
                
                <FlatList
                    style={styles.list}
                    data ={post}
                    keyExtractor = {data => data.id.toString()}
                    renderItem = {({item}) => 
                   
                    <AppMoreInf
                            title={item.name} 
                            image={item.image}
                            location={item.location}
                            summary={item.summary}
                            tag={item.tag}
                            update={item.update}
                            categories={item.category}
                            description={item.description}
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
        width:330,
        marginLeft:20,
        marginTop:20,
        justifyContent:'space-between',
     
    },
    icon:{
        paddingTop:15,
        height:100,
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
    },container:{
        marginLeft:15,
    },
    deleteView:{
        width:75,   
        justifyContent:"center",
        alignItems:"center",
    }
})

export default MoreInfScreen;
import React, { useState } from 'react';
import { View,TouchableOpacity, StyleSheet,ScrollView, Image,TextInput } from 'react-native';



import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText';
import DataManager from '../config/DataManager';
import * as ImagePicker from 'expo-image-picker';

import AppIcon from '../Components/AppIcon';
import AppScreen from './AppScreen';
import AppTextInput from '../Components/AppTextInput';
import AppBackground from '../Components/AppBackground';
import AppPicker from '../Components/AppPicker';



const categories = [
    {label: "People", value:1, image:require("../assets/People.jpeg")},
    {label: "Restaurant", value:2, image:require("../assets/Restaurant.jpeg")},
    {label: "Activity", value:3,image:require("../assets/Activities.jpeg")},
    {label: "Festival", value:4, image:require("../assets/Festival.jpeg")},
    {label: "ScreenShot", value:5, image:require("../assets/ScreenShot.jpeg")},
    {label: "Others", value:5,image:require("../assets/Others.jpeg")},
];


function EditScreen({route,navigation,navigation: { goBack }}) {

    const data=[route.params.paramPost];


    const[name, setName] = useState(data[0][0].name);
    const[location, setLocation]=useState(data[0][0].location);
    const[summary, setSummary]=useState(data[0][0].summary);
    const[description, setDescription]=useState(data[0][0].description);
    const[category, setCategory] = useState(data[0][0].category);
    const[tag, setTag] = useState(data[0][0].tag);
    const[image, setImage] = useState(data[0][0].image);

    const[nameError, setNameError]=useState("");
    const[locationError, setLocationError]=useState("");
    const[summaryError, setSummaryError]=useState("");
    const[descriptionError, setDescriptionError]=useState("");
    const[tagError, setTagError]=useState("");
    const[categoryError, setCategoryError]=useState("");
    const[imageError, setImageError]=useState("");

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();


        if (pickerResult.cancelled === true) {
            return;
        }
        setImage({path: pickerResult.uri});
       
    }

    const doErrorCheck = () => {
        setNameError( name.length>0 ? "": "Please set a valid Caption");
        setLocationError(location.length>0 ? "": "Please set a valid Location");
        setSummaryError(summary.length>0 ? "": "Please set a valid Summary");
        setDescriptionError(description.length>0 ? "": "Please set a valid Description");
        setTagError(description.length>0 ? "": "Please set a valid tag");
        setCategoryError(category? "": "Please pick a category from the list" );
        setImageError(image? "": "Please pick an image");
        return ((name.length>0) && (location.length>0) && (summary.length>0) &&(tag.length>0) && (description.length>0) && (category) && (image)? true: false)
    }

    const editPost = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const id = data[0][0].id
        console.log("line86", id)
        const newPost = {
            
            category: category.label,
            name:name,
            location:location,
            summary:summary,
            description:description,
            tag:tag,
            update:new Date().toLocaleDateString(),
            id: id,
            userid: user,
            image: image.path,
        };

        
        commonData.editPost(newPost);
        const posts = commonData.getPosts(user);

        console.log("line102",posts)

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
        <ScrollView>
        <AppTextInput
                icon="badge-account-outline"
                placeholder="Name"
                value={name}
                onChangeText={(inputText) => setName(inputText)}
                />
            {nameError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{nameError}</AppText>: <></>}

            <AppTextInput
                icon="map-marker"
                placeholder="Enter Location"
                value={location}
                onChangeText={(inputText) => setLocation(inputText)}
                />
            
            {locationError.length>0 ? <AppText style={{marginTop:5, color:"red", fontSize:15}}>{locationError}</AppText>: <></>}

            <AppTextInput
                icon="ballot"
                placeholder="Enter Summary"
                value={summary}
                onChangeText={(inputText) => setSummary(inputText)}
                />
            
            {summaryError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{summaryError}</AppText>: <></>}

            <AppTextInput
                icon="comment-text-multiple"
                placeholder="Enter Description"
                value={description}
                onChangeText={(inputText) => setDescription(inputText)}
                />
            
            {descriptionError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{descriptionError}</AppText>: <></>}

            <AppTextInput
                icon="tag"
                placeholder="Enter Tage"
                value={tag}
                onChangeText={(inputText) => setTag(inputText)}
                />
            
            {tagError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{tagError}</AppText>: <></>}


            <AppPicker 
                selectedItem={category}
                onSelectItem = {item => setCategory(item)}
                data={categories} 
                icon="apps" 
                placeholder="Categories" 
                numColumns={2}/>
            
            {categoryError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{categoryError}</AppText>: <></>}
            
           
            <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
                 <AppIcon name="image" size={80} />
                 {image && <Image source={{uri: image.path}} style={{height:80, width:80, marginLeft: 20,}}/>}
            </TouchableOpacity>

            {imageError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{imageError}</AppText>: <></>}


            <AppButton title="Done" onPress={() => { 
                        if(doErrorCheck()){
                            editPost();
                            navigation.navigate("MemoriesScreen")
                        }
                     }}/>
        </ScrollView>
           

            </AppBackground>
            
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    imageButton:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },captionContainer:{
        flexDirection:"row",
        width:220,
        marginLeft:20,
        marginTop:20,
        justifyContent:'space-between',
     
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
})

export default EditScreen;
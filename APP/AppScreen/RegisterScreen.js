import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View , StyleSheet, Image,TouchableOpacity } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText';
import AppScreen from './AppScreen';
import AppTextInput from '../Components/AppTextInput';
import AppIcon from '../Components/AppIcon';
import AppBackground from '../Components/AppBackground';
import AppColour from '../Components/AppColour';

import { Formik } from 'formik';

import * as Yup from 'yup'; 
import DataManager from '../config/DataManager';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Schema  = Yup.object().shape( 
    {
    email: Yup.string().required().email(),
    password: Yup.string().required().min(4).max(8),
    comfirmPassword: Yup.string().required().min(4).max(8).oneOf([Yup.ref('password'), null], "Passwords do NOT match!"),
    firstName: Yup.string().min(2).max(45).required(),
    lastName: Yup.string().min(2).max(45).required(),
    }
);


function RegisterScreen({navigation}) {

    const[image, setImage] = useState(null);
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
        setImageError(image? "": "Please pick an image");
        return ((image)? true: false)
    }

    return (
        <AppScreen>
            <AppBackground>

          
           
            <View style={styles.heading}>

            <TouchableOpacity  onPress={() => navigation.navigate("WelcomeScreen") }>
                   
                   <AppIcon
                       name="chevron-left"
                       size={60}
                       style={styles.headingIcon}
                   />
                    
               </TouchableOpacity>

                <View>
                    <Image source={require("../assets/Logo.png")} style={styles.logo}/>
                    <AppText style={styles.logoText}>Memories</AppText>
                </View>
            </View>

            <View style={styles.center}>
            <AppText>Register form</AppText>
            </View>

            
            <Formik
                initialValues={{firstName:'',lastName:'',password:'',comfirmPassword:'',image:''}}
                
                onSubmit = {(values)=>{
                    let commonData = DataManager.getInstance();
            
                    const users = commonData.users
                    const id = users.length+1;

                    const newUser = {
                        name:values.firstName+" "+values.lastName,
                        email:values.email,
                        password:values.password,
                        image:image.path,
                        id: id,
                        
                    };
                    commonData.addUser(newUser);
                    navigation.navigate("LoginScreen")
                }}
                validationSchema={Schema }
                >

                {({handleChange, handleSubmit,errors, setFieldTouched, touched})=> (
                <>
                <View style={styles.inputContainer}>

                
                <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
                 <AppIcon name="image-plus" size={70} />
                 {image && <Image source={{uri: image.path}} style={{height:65, width:65, marginLeft: 20,}}/>}
                 {imageError.length>0 ? <AppText style={[styles.errorMessage,{marginLeft:10,}]}>{imageError}</AppText>: <></>}

                </TouchableOpacity>



                
                <View style={styles.nameContainer}>
               

                    <View>
                        <AppText style={styles.titleContainer}>First Name</AppText>
                        <AppTextInput
                            style={styles.nameInput}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur= {()=> setFieldTouched("firstName")}
                            onChangeText = {handleChange("firstName")}
                            placeholder="First Name"/>
                            {touched.firstName && 
                            <AppText style={styles.errorMessage}>{errors.firstName}</AppText>}
    
                    </View>

                    <View>
                        <AppText style={styles.titleContainer}>Last Name</AppText>
                        <AppTextInput
                            style={styles.nameInput}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur= {()=> setFieldTouched("lastName")}
                            onChangeText = {handleChange("lastName")}
                            placeholder="Last Name"/>
                        {touched.lastName && 
                            <AppText style={styles.errorMessage}>{errors.lastName}</AppText>}
                    </View>
                  
                </View>
        
                <View style={styles.accountContainer}>

                <AppText style={styles.titleContainer}>EMail</AppText>
                    <AppTextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        onBlur= {()=> setFieldTouched("email")}
                        onChangeText = {handleChange("email")}
                        placeholder="Enter EMail"/>
                {touched.email && 
                            <AppText style={styles.errorMessage}>{errors.email}</AppText>}

                <AppText style={styles.titleContainer}>Password</AppText>
                    <AppTextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    onBlur= {()=> setFieldTouched("password")}
                    onChangeText = {handleChange("password")}
                    placeholder="Enter Password"/>
                {touched.password && 
                            <AppText style={styles.errorMessage}>{errors.password}</AppText>}

                <AppText style={styles.titleContainer}>Comfirm Password</AppText>
                    <AppTextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    onBlur= {()=> setFieldTouched("comfirmPassword")}
                    onChangeText = {handleChange("comfirmPassword")}
                    placeholder="Enter Password Again"/>
                {touched.comfirmPassword && 
                            <AppText style={styles.errorMessage}>{errors.comfirmPassword}</AppText>}

                </View>

                <View style={styles.buttonContainer}>
                  <AppButton style={styles.button}  title="SIGN UP" onPress={() => { 
                        if(doErrorCheck()){
                           handleSubmit()
                        }
                     }}/>
               

                </View>
            </View>   
        </>
        )}

        </Formik>
            
<View style={styles.textContainer}>
            <TouchableOpacity  onPress={() => navigation.navigate("LoginScreen") }>  
                <AppText style={styles.textStyle}>Already have an accouont ! ! !</AppText>
            </TouchableOpacity>
            </View>
           

            </AppBackground>
           
        </AppScreen>
    );
}
const styles = StyleSheet.create({
  
    heading:{
        flexDirection:"row",
        width:210,
        marginLeft:20,
        justifyContent:'space-between',
    },
    nameContainer:{
        flexDirection:"row",
        marginLeft:20,
        width:350,
        justifyContent:'space-between',

    },
    titleContainer:{
        fontSize:15,
        textTransform:'none',
        marginTop:10,

    },
    nameInput:{
        width:150,
    },
    accountContainer:{
        marginLeft:20,
    },
    input:{
        width:300,
        
    },
    textContainer:{
        marginTop:10,
        alignItems:'center',
    },
    textStyle:{
        fontSize:18,
        color:"#D6F8FF",
        textTransform:'none'
    },
    buttonContainer:{
        alignItems:'center',
        marginTop:10,

    },
    button:{
       width:75
    },
    text:{
        fontSize:35,
    },
    logo:{
        marginTop:10,
        width:80,
        height:80,
    },
    logoText:{
        fontSize:13,
        paddingLeft:5,
    },
    headingIcon:{
       paddingTop:30,
       height:100,
    },
    center:{
        alignItems:'center',
        marginTop:10,
    },
    errorMessage:{
        textTransform:'none',
        fontSize:18,
        fontStyle:'normal',
        color:AppColour.red,
        marginLeft:20,
        fontFamily:Platform.OS==='android' ?"monospace" :"Academy Engraved LET"
    },nameErrorMessage:{
        textTransform:'none',
        fontSize:15,
        fontStyle:'normal',
        color:AppColour.red,
        fontFamily:Platform.OS==='android' ?"monospace" :"Academy Engraved LET"
    },imageButton:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    }
     
    
})

export default RegisterScreen;
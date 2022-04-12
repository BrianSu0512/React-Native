import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View , StyleSheet, Image, TouchableOpacity} from 'react-native';


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



const schema = Yup.object().shape( 
{
email: Yup.string().required().email().label("Email"),
password: Yup.string().required().min(4).max(8).label("Password"),
}
);



function LoginScreen( {props,navigation}) {

    const getUsers = () => {
        let commonData = DataManager.getInstance();
        
        return commonData.users;
        
    }
    
    const usersList=getUsers();
    
    
    const validateUser = ({email, password}) => {
        return(
            usersList.filter((user) => user.email === email && user.password === password).length>0
        );
    };
    
    const getUser = ({email}) => {
        return usersList.find((user) => user.email === email );
    }
    
    
    
    const createUser = ({email}) => {
        let commonData = DataManager.getInstance();
        let userID = getUser({email}).id;
        commonData.setUserID(userID);
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

        <Formik
                    initialValues={{email:'', password:'',}}
                    onSubmit = {(values, {resetForm})=> {
                            if(validateUser(values)){   
                                resetForm();
                                createUser(values);
                                navigation.navigate("MemoriesScreen",{
                                    
                                    paramImage: getUser(values).image
                                    
                                }
                                    );
                            }
                            else{
                                resetForm();
                                alert("Invalid Login Details")
                            }
                        }}
                    validationSchema={schema}
                    >

        {({values,handleChange, handleSubmit,errors, setFieldTouched, touched})=> (
        <>
    
                        
                    <View style={styles.inputContainer}>
                    <View style={styles.inputContent}>
                       
                        <AppTextInput
                            icon="email"
                            style={styles.inputStlye}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="EMail"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            value={values.email}
                            onBlur= {()=> setFieldTouched("email")}
                            onChangeText = {handleChange("email")}/>

                    </View>

                    <View>
                        {touched.email && 
                            <AppText style={styles.errorMessage}>{errors.email}</AppText>}
                     </View>

                    

                    <View style={styles.inputContent}>

                        <AppTextInput
                        icon="lock"
                        style={styles.inputStlye}
                        autoCapitalize="none"
                        secureTextEntry
                        autoCorrect={false}
                        placeholder="Password"
                        textContentType="password"
                        value={values.password}
                        onBlur= {()=> setFieldTouched("password")}
                        onChangeText = {handleChange("password")}/>

                    </View>
                    {touched.password && 
                        <AppText style={styles.errorMessage}>{errors.password}</AppText>}

                    <AppButton title="LOGIN" onPress={handleSubmit}/>
                    </View>

                    <View style={styles.textContainer}>

                    <TouchableOpacity  onPress={() => navigation.navigate("RegisterScreen") }>
                   
                    <AppText style={styles.textStyle}> Haven't an accouont ? ? ?</AppText>
                      
                    </TouchableOpacity>
                    </View>
                    </>
            )}
            </Formik>
        
        </AppBackground>
                

                
                
        </AppScreen>
      

    
    
    );
}

const styles = StyleSheet.create({
    heading:{
        flexDirection:"row",
        width:210,
        marginLeft:20,
        paddingTop:10,
        justifyContent:'space-between',

    }, 
    inputContainer:{
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:100,
        height:250

    },
    inputContent:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
        
    },
    inputStlye:{
        marginLeft:10,
        width:300,
    },
    textContainer:{
        marginTop:180,
        alignItems:'center',
        
    },
    textStyle:{
        fontSize:18,
        color:"#D6F8FF",
        textTransform:'none'
    },
    icon:{
        paddingTop:8,
        height:50,
    },
    errorMessage:{
        textTransform:'none',
        fontSize:20,
        fontStyle:'normal',
        color:AppColour.red,
        marginLeft:40,
        fontFamily:Platform.OS==='android' ?"monospace" :"Academy Engraved LET"
    },
    headingIcon:{
       paddingTop:30,
       height:100,
    },text:{
        fontSize:35
    },
    logo:{
        marginTop:10,
        width:80,
        height:80,
    },
    logoText:{
        fontSize:13,
        paddingLeft:5,
    }
   
})

export default LoginScreen;
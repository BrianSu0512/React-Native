import React from 'react';
import { View ,Text, Image,StyleSheet} from 'react-native';
import AppBackground from '../Components/AppBackground';

import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText';
import AppScreen from './AppScreen';




function WelcomeScreen( {navigation}) {
    return (
        <AppScreen>
            <AppBackground>
   

            <View style={styles.container}>
                <Image source={require("../assets/Logo.png")}/>
                <AppText>Memories</AppText>
            </View>

            <View>
                <AppText style={styles.text}>Forget the mistake, Remember the lesson</AppText>
                <AppText style={styles.text}>start MEMORRIES to remember special moments and bring yourself along narrative journey</AppText>
            </View>
          

             <View style={styles.buttoncontainer}>
                <AppButton title="LOGIN" onPress={() => navigation.push("LoginScreen")}/>
                <AppButton title="SIGNUP" onPress={() => navigation.navigate("RegisterScreen")}/>
            </View>
            
            </AppBackground>
          
       
           
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:50,
        
    },text:{
        marginTop:40,
        paddingLeft:16,
        fontSize:15,
        fontFamily:Platform.OS==='android' ?"monospace" :'Bradley Hand',
        color:'#696969'
    },
    buttoncontainer:{
        marginTop:200,
        height:150,
        justifyContent:'space-between',
        alignSelf:'flex-end',
        marginEnd:40,

    }
})

export default WelcomeScreen;
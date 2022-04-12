import { Image, View, StyleSheet} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AppIcon from './AppIcon';
import AppColour from './AppColour';
import AppText from './AppText';
import AppButton from './AppButton';
import { Swipeable } from 'react-native-gesture-handler';


function AppMoreInf({image,title,location,summary,tag,update,categories,description,onSwipeLeft,onPress}) {
 
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
            <View>
           <View style={styles.container}>
           {isFinite(image)?<Image source={image} style={styles.image}/>:<Image source={{url:image}} style={styles.image}/>}

          
          <AppText style={styles.title}>{title}</AppText>
                
            <View style={styles.update} >
               <AppText style={styles.contentText}>Update: </AppText>
               <AppText style={styles.contentText}>{update}</AppText>
           </View>

           <View  style={styles.content}>
                <View>
                    <View style={styles.row}>
                    <AppIcon
                    name="map-marker"
                    size={30}
                    style={styles.icon}
                    />
                    <AppText style={styles.contentText}>Location: </AppText>
                    </View>
               
                    <AppText style={styles.inputText}>{location}</AppText>
                </View>

                <View>
                <View style={styles.row}>
                <AppIcon
                name="apps"
                size={30}
                style={styles.icon}
                />
                    <AppText style={styles.contentText}>Categories: </AppText>
                </View>
                    <AppText style={styles.inputText}>{categories}</AppText>
                </View>
           </View>
        </View>

        <View style={styles.container}>
            <View style={styles.row} >
            <AppIcon
                name="ballot"
                size={30}
                style={styles.icon}
                />
               <AppText style={styles.contentText}>Summary: </AppText>
            </View>
               <AppText style={styles.inputText}>{summary}</AppText>
           
        </View>

        <View style={styles.container}>
        <View style={styles.row} >
            <AppIcon
                name="comment-text-multiple"
                size={30}
                style={styles.icon}
                />
               <AppText style={styles.contentText}>Description: </AppText>
            </View>
               <AppText style={styles.inputText}>{description}</AppText>
           
        </View>
               
            </View>
        </Swipeable>
      
       
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        overflow:'hidden',
        width:"90%",
        borderColor:'black',
        borderWidth:0.5,
        margin:10,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        
    },
    update:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginEnd:10,
    },
    image:{
        height:200,
        width:"100%"
    },
    title:{
        color:AppColour.lightYellow,
        fontSize: 20,
        alignSelf:'center'
    },
    row:{
        flexDirection:'row',
        width:150,
  
    },
    icon:{
        paddingTop:3,
        marginLeft:10,
        height:40,
        width:40,
    },
    contentText:{
        fontSize: 18,
        textTransform:'none',
        color:AppColour.white,
        paddingBottom:3,
        paddingTop:5,
        paddingLeft:10,
    },
    inputText:{
        fontSize: 18,
        textTransform:'none',
        color:AppColour.white,
        paddingBottom:3,
        paddingTop:5,
        paddingLeft:40,

    },
    content:{
        flexDirection:'row',
        width:'95%',
        justifyContent:'space-between',
    },
    buttonSection:{
        flexDirection:'row',
        marginLeft:80,
        width:200,
        justifyContent:'space-between',
    },
    button:{
        width:40,
        alignContent:'center',
        justifyContent:'center',
    }
    
})
export default AppMoreInf;
import React, {useState} from 'react';

import { View, StyleSheet, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';



import AppPickerItem from './AppPickerItem.js';
import AppText from './AppText';
import AppScreen from '../AppScreen/AppScreen.js';
import AppBackground from './AppBackground.js';
import AppButton from './AppButton.js';


function AppPicker({data, icon, placeholder, numColumns, selectedItem, onSelectItem}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={24}/>}
                    <AppText style={styles.text}> {selectedItem? selectedItem.label : placeholder} </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={24}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <AppScreen>
                    <AppBackground>
                    <View style={styles.button} >
                    <AppButton title="Close" onPress={() => setModalVisible(false)}/>
                    </View>
                    <FlatList
                        numColumns={numColumns}
                        data={data}
                        keyExtractor={item => item.value.toString()}
                        renderItem = {({item}) => 
                        <AppPickerItem
                            onPress={()=> {
                                setModalVisible(false);
                                onSelectItem(item);
                                    }
                                }
                            label={item.label}
                            image={item.image}
                            />}
                    />
                    </AppBackground>
                    
                </AppScreen> 
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    
    container:{
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        flexDirection: 'row',
        borderRadius: 25, 
        padding: 10,
        marginVertical: 20,
        width:'100%',
    },
    text:{
        flex:1,
    },button:{
        marginTop:20,
    }
})
export default AppPicker;
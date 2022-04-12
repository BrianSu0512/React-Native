import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from'expo-constants';
function AppScreen({children},style) {
    return (
        <SafeAreaView style={[styles.container,style]}>
            {children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'lightblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default AppScreen;
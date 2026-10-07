import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const BoxScreen=()=> {
    return(
    <View style={{
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    }}>
        <View style={{width:50, height:50, backgroundColor:'purple'}} />
        <View style={{height:50, backgroundColor:'pink'}} />
        <View style={{height:100, backgroundColor:'blue'}} />
    </View>
);
};

const styles = StyleSheet.create({});

export default BoxScreen;
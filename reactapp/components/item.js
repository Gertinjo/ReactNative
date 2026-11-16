import React from "react";
import {Text, View, StyleSheet, Image, TouchebleOpacity} from 'react-native';

const Item = ({item}) => {
    return(
        <View style={styles.Cardcontainer}>      
            <View style={styles.imgcontainer}>
            <Image source={{uri: `${item.image}`}} style={stlyes.img} resizeMode="cover"></Image>
        </View>
        <View style={styles.textcontainer}>
            <Text style={stlyes.name}>{item.name}</Text>
            <Text style={stlyes.category}>{item.category}</Text>
            <Text style={stlyes.price}>{item.price}</Text>
            <Text style={stlyes.desc}>{item.description}</Text>
        </View>


        
        </View>
    );
};

const styles = StyleSheet.create({
    Cardcontainer:{
        width:'100%',
        height: 130,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 16,
    },
    img: {
        width: 100,
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 8,
        marginTop: 5,
    },
    textcontainer: {
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '70%',
    },
    name: {
        fontWeight: 'bold',
        color: '#22D4FF'
    },
    category: {
        fontSize: 12,
        color: '#22D4ff'
    },
    desc: {
        fontStyle: 'italic'
    },
    price: {
        fontWeight: 'bold',
        marginTop: 5,
        backgroundColor: '#384053',
        color: 'white',
        borderRadius: 100,
        paddingHorizontal: 5,
        width: 45
    }
});
export default Item;
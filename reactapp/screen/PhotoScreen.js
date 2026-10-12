import React from "react";
import { Text, View, FlatList, ScrollView, StyleSheet, Image } from "react-native-web";

class PhotosScreen extends React.Component{


    constructor(){
        super();
        this.state = {
            photo: []
        }
    }


    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/photos");
        const jsonData = await data.json();
        this.setState({photo: jsonData});
    }
    
    render(){
        const {photo} = this.state
        return(
            <ScrollView style={styles.main}>
                <Text style={styles.photo}>Photos</Text>
                <FlatList 
                keyExtractor = {photo => photo.id}
                data={photo} renderItem={({item}) => (
                    <View>
                        <Text style={styles.itemid}>{item.id}</Text>
                        <Text style={styles.titles}>Title: {item.title}</Text>
                        <Image source={{ uri: item.url }} style={styles.image}/>                    
                    </View>
                )}/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    main:{
        padding: 25,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: '#11d4db',
        width: 500,
    },
    itemid: {
        color: "#000000",
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 20,
    },
    titles: {
        fontSize: 14,
        fontStyle: "italic",
        fontWeight: "lighter"
    },
    photo: {
        fontSize: 20,
        fontSize: "bold",
        textaligh: "center",
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },

});
export default PhotosScreen;
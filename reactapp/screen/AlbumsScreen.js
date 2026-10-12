import React from "react";
import { Text, View, FlatList, ScrollView, StyleSheet } from "react-native-web";

class AlbumsScreen extends React.Component{


    constructor(){
        super();
        this.state = {
            album: []
        }
    }


    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/albums");
        const jsonData = await data.json();
        this.setState({album: jsonData});
    }
    
    render(){
        const {album} = this.state
        return(
            <ScrollView style={styles.main}>
                <Text style={styles.albumi}>Albums</Text>
                <FlatList 
                keyExtractor = {album => album.id}
                data={album} renderItem={({item}) => (
                    <View>
                        <Text style={styles.itemid}>{item.id}</Text>
                        <Text style={styles.titles}>{item.title}</Text>
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
    albumi: {
        fontSize: 20,
        fontSize: "bold",
        textaligh: "center",
    },
});


export default AlbumsScreen;
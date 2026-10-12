import React from "react";
import { Text, View, FlatList, ScrollView, StyleSheet } from "react-native-web";

class UserScreen extends React.Component{


    constructor(){
        super();
        this.state = {
            users: []
        }
    }


    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await data.json();
        this.setState({users: jsonData});
    }
    
    render(){
        const {users} = this.state
        return(
            <ScrollView style={styles.main}>
                <Text style={styles.useri}>Users</Text>
                <FlatList 
                keyExtractor = {users => users.id}
                data={users} renderItem={({item}) => (
                    <View>
                        <Text style={styles.itemid}>{item.id}</Text>
                        <Text style={styles.names}>{item.name}</Text>
                        <Text style={styles.usernames}>{item.username}</Text>
                        <Text style={styles.emails}>{item.email}</Text>
                       

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
    names: {
        fontSize: 14,
        fontStyle: "italic",
        fontWeight: "lighter"
    },
    useri: {
        fontSize: 20,
        fontSize: "bold",
        textaligh: "center",
    },
});


export default UserScreen;
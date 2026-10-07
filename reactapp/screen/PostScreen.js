import React from "react";
import{View, Text, StyleSheet, Flatlist} from 'react-native';

class PostScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.state({posts: jsonData});
    }

    render(){
        const {posts} = this.state
        return(
            <View>
                <Text>Posts: </Text>
                <Flatlist
                keyExtractor = {posts => posts.id}
                data={posts} renderItem={({item})=> (
                    <View>
                        <Text>ID: {item.id}</Text>
                        <Text>{item.title}</Text>
                    </View>
                )}
            
                />
            </View>
        )
    }







}
export default PostScreen;
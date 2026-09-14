import React from "react";
import {Text, StyleSheet, View, FlatList} from 'react-native'

const students = [
    {name: 'Gerti', surname:'Calaj', age: '13'},
    {name: 'Deon', surname:'Beka', age: '16'},
    {name: 'Amant', surname:'Zabeli', age: '16'},
];

const ListScreen = ()=> {
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Class</Text>
        <FlatList
        horizontal={true}
        data={students}
        renderItem={({item}) =>{
                return <Text style={styles.itemText}> {item.name}  {item.surname}  {item.age}</Text>
        }
    }
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    itemText: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
    },
});

export default ListScreen;

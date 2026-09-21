import React from "react";
import {Text, StyleSheet, View, FlatList} from 'react-native'


const students = [
    {name: 'Gerti', surname:'Calaj', age: '13', dateofbirth:'28/06/26',hobbys:'Programming, Football, Aviation', favoriteclub:'Chelsea Fc'},
];

const PersonalScreen = ()=> {
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>My Pesonal Profile:</Text>
        <FlatList
        horizontal={true}
        data={students}
        renderItem={({item}) =>{
                return <Text style={styles.itemText}>Name: {item.name}</Text>
                
        }
    }
        />
        <FlatList
        horizontal={true}
        data={students}
        renderItem={({item}) =>{
                return <Text style={styles.itemTextSur}>Surname: {item.surname}</Text>
                
        }
    }
        />
        <FlatList
        horizontal={true}
        data={students}
        renderItem={({item}) =>{
                return <Text style={styles.itemTextAge}>Age: {item.age}</Text>
                
        }
    }
        />
        <FlatList
        horizontal={true}
        data={students}
        renderItem={({item}) =>{
                return <Text style={styles.itemTextSur}>Age: {item.dateofbirth}</Text>
                
        }
    }
        />
        <FlatList
        horizontal={true}
        data={students}
        renderItem={({item}) =>{
                return <Text style={styles.itemTextHobby}>Hobbys: {item.hobbys}</Text>
                
        }
    }
        />
        <FlatList
        horizontal={true}
        data={students}
        renderItem={({item}) =>{
                return <Text style={styles.itemTextAge}>Favorite Club: {item.favoriteclub}</Text>
                
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
        borderWidth: 1,
        borderColor: '#034694',
        borderRadius: 25,
        padding: 20,
    },
    headerText: {
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    itemText: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#DBA111',
        textAlign: 'center',
        marginTop: 24,
    },
    itemTextSur: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#034694',
        textAlign: 'center',
        marginTop: 20,
        marginBottom:20,
    },
    itemTextAge: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#ee242c',
        textAlign: 'center',
    },
    itemTextHobby: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#DBA111',
        textAlign: 'center',
        marginBottom:20,
    },
});

export default PersonalScreen;

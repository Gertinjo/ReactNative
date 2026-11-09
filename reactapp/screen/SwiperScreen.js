import React from "react";
import {Text, View, StyleSheet, button, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import { TextInput } from "react-native-web";

const SwiperScreen = ()=> {
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Swiper
                    autoplay
                    activeDotColor="lightblue"
                    autoplayTimeout={5}>
                    <View style={styles.item}>
                        <Image
                        source={require('../assets/image1.png')}
                        style={ styles.ImageItem}
                        resizemMode='cover'
                        />
                    </View>
                    <View style={styles.item}>
                        <Image
                        source={require('../assets/image2.png')}
                        style={styles.ImageItem}
                        resizemMode='cover'
                        />
                    </View>
                    <View style={styles.item}>
                        <Image
                        source={require('../assets/image3.png')}
                        style={styles.ImageItem}
                        resizemMode='cover'
                        />
                    </View>

                </Swiper>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: 'white',
    },
    sliderContainer:{
        width: "90%",
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8
    },
    ImageItem:{
        flex:1,
        justifyContent:'center',
    },
    ItemItem:{
        width: '100%',
        height: '100%',
        borderRadius:8,
    },
    iconContainers:{
        width: '100%',
        alignSelf: 'center',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title:{
        marginTop: 35,
        fontSize:20,
        fontWeight: 'bold',
        marginBottom: 15,
    }
});


export default SwiperScreen;
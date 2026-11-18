import React from "react";
import {Text, View, StyleSheet, Button} from 'react-native';
import Icons from "../components/icons";
import ProductDetail from "../components/ProductDetail";

const SwiperScreen = ({ navigation }) => {
    const openProductDetails = () => {
        navigation.navigate("ProductsDetailScreen");
    };

    return(
        <>
            <View style={styles.iconContainers}>
                <Icons name="cellphone-iphone" iconsText="Iphone" />
                <Icons name="android" iconsText="Android" />
                <Icons name="laptop" iconsText="Laptop" />
            </View>
            <View style={styles.ProductContainers}>
                <ProductDetail
                    image={require("../assets/samsung-s24.jpg")}
                    category="Phone"
                    price="700"
                    stock="Yes"
                    name="Samsung S24"
                    onPress={openProductDetails}
                />
                <ProductDetail
                    image={require("../assets/macbook-air-m2.jpg")}
                    category="Laptop"
                    price="690"
                    stock="Yes"
                    name="MacBook Air M2"
                    onPress={openProductDetails}
                />
                <ProductDetail
                    image={require("../assets/dell-xps-15.jpg")}
                    category="Laptop"
                    price="460"
                    stock="Yes"
                    name="Dell Xps 15"
                    onPress={openProductDetails}
                />
                <ProductDetail
                    image={require("../assets/playstation-5.jpg")}
                    category="Gaming"
                    price="500"
                    stock="Yes"
                    name="Playstation 5"
                    onPress={openProductDetails}
                />
                <Button
                    title="View More"
                    onPress={openProductDetails}
                />
            </View>
        </> 
    );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'white',
    },
    sliderContainer:{
        width: "90%",
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
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
    title:{
        fontSize:20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    ProductContainers:{
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'column',
    },
    mainbutton:{
        borderRadius: 15,
    },
    iconContainers:{
        flexDirection:'row',
        marginRight: 10,
    }
});


export default SwiperScreen;
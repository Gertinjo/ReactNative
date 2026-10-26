import React, { useState } from 'react'; // Added useState here
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screen/MainScreen';
import ListScreen from './screen/ListScreen';
import PersonalScreen from './screen/PersonalScreen';
import ExampleScree from './screen/ExampleScree';
import ButtonScreen from './screen/ButtonScreen';
import StudentScreen from './screen/StudentScreen';
import StudentsScreen from './screen/StudentsScreen';
import BoxScreen from './screen/BoxScreen';
import PostScreen from './screen/PostScreen';
import PhotoScreen from './screen/PhotoScreen';
import UserScreen from './screen/UserScreen';
import DataScreen from './screen/DataScreen';
import LocalScreen from './screen/LocalScreen';
import ProductsScreen from './screen/ProductsScreen';
import ProductsDetailScreen from './screen/ProductsDetailScreen'; // Added this import
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigator/StackNavigator';
export default function App() {
  // Track which screen is currently active
  const [currentScreen, setCurrentScreen] = useState("Products");

  return (
            <NavigationContainer>
          <StackNavigator/> 
        </NavigationContainer>
    // <View style={styles.container}>
    //     {/* <MainScreen/> */}
    //     {/* <ListScreen/> */}
    //     {/* <PersonalScreen/> */}
    //     {/* <ExampleScree/> */}
    //     {/* <ButtonScreen/> */}
    //     {/* <StudentsScreen/> */}
    //     {/* <StudentScreen/>   */}
    //     {/* <PostScreen/> */}
    //     {/* <PhotoScreen/> */}
    //     {/* <PhotoScreen/> */}
    //     {/* <UserScreen/> */}
    //     {/* <DataScreen/> */}
    //     {/* <LocalScreen/> */}
        
    //     {/* Conditionally render the screens based on state */}
    //     {/* {currentScreen === "Products" ? (
    //       <ProductsScreen setScreen={setCurrentScreen} />
    //     ) : (
    //       <ProductsDetailScreen setScreen={setCurrentScreen} />
    //     )} */}
    //     <NavigationContainer>
    //       <StackNavigator/> 
    //     </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

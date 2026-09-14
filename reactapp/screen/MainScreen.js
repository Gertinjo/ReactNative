import React from "react";
import {Text, Stylesheet, view} from 'react-native';


const MainScreen=()=>{

const message = "This is the message: WOW!"
    return<view>
        <Text>Hello</Text>
        <Text>World!</Text>
        <Text>{message}</Text>
    </view>
}

export default  MainScreen
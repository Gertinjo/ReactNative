import React from "react";
import {View, Image} from 'react-native';

const Obstacles = ({
    color,
    obstacleWidth,
    obstacleHeight,
    randomBottom,
    gap,
    obstacleLeft
}) => {
    return(
        <>
            <Image
        style={{
            position: 'absolute',
            width: obstacleWidth,
            height: 500,
            left: obstacleLeft,
            bottom: randomBottom + obstacleWidth + gap,
        }}
        source={require('../../assets/pipe.png')}
        resizeMode="cover"
        />

        <Image
        style={{
            position: 'absolute',
            backgroundColor: color,
            width:obstacleWidth,
            height:obstacleHeight,
            left:obstacleLeft,
            bottom: randomBottom
        }}
        source={require('../../assets/pipe.png')}
        resizeMode="cover"
        />
        </>
    );
}
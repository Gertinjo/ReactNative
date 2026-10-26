import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/Home";
import About from "../screen/About";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
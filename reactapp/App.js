import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screen/MainScreen';
import ListScreen from './screen/ListScreen';
import PersonalScreen from './screen/PersonalScreen';
import ExampleScree from './screen/ExampleScree';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <MainScreen/> */}
        {/* <ListScreen/> */}
        {/* <PersonalScreen/> */}
        <ExampleScree/>
        </View>
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

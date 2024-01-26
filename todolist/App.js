import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
const um=require('./assets/favicon.png');
export default function App() {
  return (
    <View >
      <Image style={{ marginTop:490,alignItems:'stretch' }} source={um}></Image>
      <StatusBar style="auto" />
    </View>
  );
}


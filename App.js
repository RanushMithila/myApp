// import React from 'react';
// import { StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// import ListingEditScreen from './app/screens/ListingEditScreen';
// import Screen from './app/components/Screen';
// import ImageInput from './app/components/ImageInput';
// import ImageInputList from './app/components/ImageInputList';


// export default function App() {
//   return <ListingEditScreen />
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'greenyellow',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { Platform, SafeAreaView, Text, View } from 'react-native';
// import * as Location from 'expo-location';

// export default function App() {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getLastKnownPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = 'Waiting..';
//   text = JSON.stringify(location);


//   return (
//     <SafeAreaView>
//       <Text>{text}</Text>
//     </SafeAreaView>
//   );
// }


import React from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

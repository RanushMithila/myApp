import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import ListingEditScreen from './app/screens/ListingEditScreen';
import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';


export default function App() {

  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  }

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter(imageUris => imageUris !== uri));
  }

  return (
    <Screen>
      <ImageInputList
        imageUris={ imageUris }
        //onAddImage={(uri) => handleAdd(uri)}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}

      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

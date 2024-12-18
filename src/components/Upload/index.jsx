// UploadForm.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Make sure to install expo-image-picker
import styles from './styles';
import { colors } from '../../theme/colors';

const UploadForm = () => {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');

  const pickImage = async () => {
    // Request permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Launch the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Set the selected image URI
    }
  };

  const handleUpload = () => {
    // Handle the upload logic here (e.g., send to your server)
    console.log("Uploading...", { image, caption });
    // Reset the form after upload
    setImage(null);
    setCaption('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload a Photo</Text>
      
      {/* Image Preview */}
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      
      {/* Button to pick an image */}
      <Button title="Choose Image" onPress={pickImage} />

      {/* Caption Input */}
      <TextInput
        style={styles.input}
        placeholder="Write a caption..."
        placeholderTextColor={colors.text}
        value={caption}
        onChangeText={setCaption}
      />

      {/* Upload Button */}
      <Button title="Upload" onPress={handleUpload} disabled={!image || !caption} />
    </View>
  );
};

export default UploadForm;

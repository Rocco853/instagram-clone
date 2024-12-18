// UploadScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import UploadForm from '../../components/Upload'

const UploadScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <UploadForm />
    </SafeAreaView>
  );
};

export default UploadScreen;

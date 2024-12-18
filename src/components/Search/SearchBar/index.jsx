// SearchBar.js
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../../../theme/colors';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchBar = ({ query, onChange }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Feather name="search" size={20} color={colors.text} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={colors.text}
        value={query}
        onChangeText={onChange}
      />
    </SafeAreaView>
  );
};

export default SearchBar;


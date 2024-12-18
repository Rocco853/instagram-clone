// SearchScreen.js
import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import SearchBar from '../../components/Search/SearchBar'
import SearchResult from '../../components/Search/SearchResults'

const SearchScreen = () => {
  const [query, setQuery] = useState('');

  // Example user data (you can replace this with actual data)
  const usersData = [
    {
      username: "john_doe",
      profilePicture:
        "https://example.com/profiles/john.jpg",
    },
    {
      username: "jane_smith",
      profilePicture:
        "https://example.com/profiles/jane.jpg",
    },
    {
      username: "alice_wonder",
      profilePicture:
        "https://example.com/profiles/alice.jpg",
    },
  ];

  // Filter users based on the search query
  const filteredUsers = usersData.filter(user =>
    user.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar query={query} onChange={setQuery} />
      <FlatList
        data={filteredUsers}
        renderItem={({ item }) => <SearchResult user={item} />}
        keyExtractor={(item) => item.username}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import { Stack } from 'expo-router';

export default function AuthFeedStack() {
    return (
      <Stack>
        <Stack.Screen
          name="index"
        //   options={{
        //     headerShown={false}
        //   }}
        />
        {/* <Stack.Screen
          name="[id]"
          options={{
            title: 'VideoID',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          options={{
            title: 'Search Screen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SearchResults"
          options={{
            title: 'Search Results',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="channelPage"
          options={{
            title: 'Channel Page',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          options={{
            title: 'Edit Profile',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="AboutChannel" 
          options={{
            title: 'About Channel',
            headerShown: false,
          }}
        /> */}
      </Stack>
    );
  }
import React from 'react';
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";
import { MyDrawerNavigator } from "./components/routes";
import { AppRegistry } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
// import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/react-hoc";

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache()
})

export default function App() {


  return (
    <ApolloProvider client={client} >
      <NavigationContainer>
        <MyDrawerNavigator />
      </NavigationContainer>
    </ApolloProvider>


  );
}
AppRegistry.registerComponent("My Application ", () => App)
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

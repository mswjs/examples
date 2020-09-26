import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { ApolloProvider, gql, useQuery } from '@apollo/client'
import client from './client'

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
      }
    }
  }
`

export const App = () => (
  <ApolloProvider client={client}>
    <MyRootComponent />
  </ApolloProvider>
)

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

export const MyRootComponent = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS)

  const DATA = data?.characters?.results

  const renderItem = ({ item }) => {
    return <Item title={item.name} />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}>Rick and morty MSW demo</Text>

        <Header />

        {loading && <ActivityIndicator testID="loading" />}

        {error && <Text testID="error">{`${error}`}</Text>}

        {!loading && !error && DATA?.length > 0 && (
          <FlatList
            testID="list"
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginBottom: 40,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default App

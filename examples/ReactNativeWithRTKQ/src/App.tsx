/**
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {useGetRandomNameQuery} from './services/api';

const App = () => {
  const {data, isLoading, isError} = useGetRandomNameQuery(2);

  return (
    <SafeAreaView>
      <StatusBar />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        data && data.map(name => <Text key={name.id}>{name.first_name}</Text>)
      )}
      {isError && <Text>Error</Text>}
    </SafeAreaView>
  );
};

export default App;

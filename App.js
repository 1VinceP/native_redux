import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar, Header } from './src/components/common/index'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/reducerIndex';
import LibraryList from './src/components/LibraryList';

function App() {

  let color = '#9955ff';

  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <StatusBar color={color} />
        <Header color={color} title={'Tech Stack'} />
        <LibraryList />
      </View>
    </Provider>
  );
}


export default App;
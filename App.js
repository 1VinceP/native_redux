import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar, Header } from './src/components/common/index'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/reducerIndex';

function App() {

  let color = '#9955ff';

  return (
    <Provider store={createStore(reducers)}>
      <View>
        <StatusBar color={color} />
        <Header color={color} title={'Tech Stack'} />
      </View>
    </Provider>
  );
}


export default App;
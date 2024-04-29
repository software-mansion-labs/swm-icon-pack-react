import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Icon} from '@swm-labs/swm-icon-pack-react';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Icon type={'outline'} name={'arrow-circle-down'} color={'blue'} />
      <Icon type={'curved'} name={'arrow-circle-right'} color={'#ff0000'} />
      <Icon type={'broken'} name={'arrow-circle-left'} color={'rgb(0, 255, 0)'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';


export default () => {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>vitor</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}
>>>>>>> edb63825adb4b546e5b5e3a5ab1e04ae9f602e6d

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Startup from './src/navigation/Startup';

const App = () => {
  return (
    <SafeAreaProvider>
      <Startup />
    </SafeAreaProvider>
  );
};

export default App;

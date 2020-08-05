import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App = () => {
  return(
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <Routes />
    </>
  );
}

export default App;
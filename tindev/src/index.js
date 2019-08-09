import React, {Fragment} from 'react';
import Routes from './routes'
import { YellowBox } from 'react-native'
import Login from './pages/Login'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

const App = () => {
  return (
   <Routes />
  );
};

export default App;

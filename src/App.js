import React from 'react';
import TimerPage from './components/TimerPage';
import {Provider} from 'react-redux';
import store from './components/store';

function App() {
  
  return (
    <Provider store = {store}>
      <TimerPage/>
    </Provider> 
  );
}

export default App;

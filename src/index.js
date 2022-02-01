import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducer/reducer';
import { Provider } from 'react-redux';
import {createStore} from 'redux';


import styles from './index.scss';
import Container from './container/container';

let store = createStore(reducers);

class App extends React.Component {
  render(){
    return (
      <div>
        <Provider store = {store}>
      <Container />
        </Provider>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
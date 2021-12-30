import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/index';

import ThemeProvider from './shared/context/ThemeProvider';
import App from './App';
import './index.css';
// import './assets/css/grid.css';
// import './assets/css/theme.css';
// import './assets/css/index.css';
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

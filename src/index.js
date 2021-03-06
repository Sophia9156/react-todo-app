import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import {Provider} from 'react-redux';
import * as serviceWorkerRegistration from './service/serviceWorkerRegistration';
import AuthService from './service/auth_service';
import Database from './service/database';

const authService = new AuthService();
const database = new Database();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App authService={authService} database={database} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
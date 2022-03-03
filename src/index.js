import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import {Provider} from 'react-redux';
import * as serviceWorkerRegistration from './service/serviceWorkerRegistration';
import AuthService from './service/auth_service';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App authService={authService} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
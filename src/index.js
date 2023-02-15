import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { store, persistor } from 'redux/store';
import { Media } from 'components/Media';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Media>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/phonebook-06-react">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Media>
    </Provider>
  </React.StrictMode>
);

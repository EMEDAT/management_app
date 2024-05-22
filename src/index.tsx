import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // import Provider
import { store } from './containers/store'; // import your store
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* wrap App in Provider and pass your store */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
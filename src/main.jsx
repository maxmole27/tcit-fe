import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PrimeReactProvider } from 'primereact/api'

import store from './store/index.jsx'
import App from './App.jsx'

import 'primereact/resources/themes/lara-light-teal/theme.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </Provider>
)

import Routes from "./Routes";
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import { Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Provider store={store}>
      <Router history={history} >
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container"/>
        <Header />
        <Routes />
      </Router >
    </Provider>
  );
}

export default App;
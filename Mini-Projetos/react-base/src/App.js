import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';

import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import { Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router history={history} >
      <GlobalStyles />
      <Header />
      <Routes />
    </Router >
  );
}

export default App;
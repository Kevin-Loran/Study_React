import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
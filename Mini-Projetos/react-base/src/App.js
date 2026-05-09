import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
     <Header />
     <Routes/>
     <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router} from 'react-router-dom'
import "./style.css";
import GlobalStyle from "./styles/global";
import Routes from './routes'


function App() {
  return (
    <Router>
      <Routes></Routes>
      <GlobalStyle></GlobalStyle>
    </Router>
  );
}

export default App;

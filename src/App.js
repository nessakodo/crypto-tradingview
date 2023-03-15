import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import CryptoList from './components/CryptoList';
import CryptoDetails from './components/CryptoDetails';
import Watchlist from './components/Watchlist';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={CryptoList} />
        <Route path="/crypto/:id" component={CryptoDetails} />
        <Route path="/watchlist" component={Watchlist} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;

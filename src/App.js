import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import MainPage from './pages/mainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;

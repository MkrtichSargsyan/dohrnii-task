import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import Sidebar from './components/menu/sidebar';
import MainPage from './pages/mainPage';

function App() {
  const [isMoved, setIsMoved] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${isMoved ? 'gif-background' : 'svg-background '}`}
      onMouseMove={() => setIsMoved(true)}
    >
      {isActive && <Sidebar isActive closeSidebar={setIsActive} />}
      {/* <Sidebar isActive closeSidebar={setIsActive} /> */}
      <Header openSidebar={setIsActive} />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;

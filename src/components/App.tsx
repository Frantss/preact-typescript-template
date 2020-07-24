import { h } from 'preact';
import { Route, Router, RouterOnChangeArgs } from 'preact-router';

import Home from '../routes/Home';
import Profile from '../routes/Profile/Profile';
import NotFound from '../routes/NotFound';
import { Header } from './Header';

if ((module as any).hot) {
  require('preact/debug');
}

const App = () => {
  let currentUrl: string;
  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url;
    currentUrl = e.url;
  };

  return (
    <div id='app'>
      <Header />
      <Router onChange={handleRoute}>
        <Route path='/' component={Home} />
        <Route path='/profile/' component={Profile} user='me' />
        <Route path='/profile/:user' component={Profile} />
        <NotFound default />
      </Router>
    </div>
  );
};

export default App;

import { FunctionalComponent, h } from 'preact';
import { Route, Router, RouterOnChangeArgs } from 'preact-router';

import { Home } from '../routes/home';
import { Profile } from '../routes/profile';
import { NotFound } from '../routes/notfound';
import { Header } from './header';

if ((module as any).hot) {
  require('preact/debug');
}

export const App: FunctionalComponent = () => {
  let currentUrl: string;
  const handleRoute = (e: RouterOnChangeArgs) => {
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

import { h } from 'preact';
import { Router } from '@reach/router';
import Home from '@routes/Home';
import NotFound from '@routes/NotFound';
import Profile from '@routes/Profile';

export const Routes = () => (
  <Router>
    <Home path='/' />
    <Profile path='/profile' user='me' />
    <NotFound default />
  </Router>
);

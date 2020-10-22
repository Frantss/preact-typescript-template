import { FunctionalComponent, h } from 'preact';
import { Link, RouteComponentProps } from '@reach/router';

import styles from './NotFound.module.scss';

const NotFound: FunctionalComponent<RouteComponentProps> = () => {
  return (
    <div class={styles.notfound}>
      <h1>Error 404</h1>
      <p>That page doesn&apos;t exist.</p>
      <Link to='/'>
        <h4>Back to Home</h4>
      </Link>
    </div>
  );
};

export default NotFound;

import { Link } from '@reach/router';
import { FunctionComponent, h } from 'preact';

import styles from './Header.module.scss';

export const Header: FunctionComponent = () => {
  return (
    <header class={styles.header}>
      <h1>Preact App</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Me</Link>
      </nav>
    </header>
  );
};

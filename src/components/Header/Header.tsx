import { FunctionComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import styles from './Header.module.scss';

export const Header: FunctionComponent = () => {
  return (
    <header class={styles.header}>
      <h1>Preact App</h1>
      <nav>
        <Link activeClassName={styles.active} href='/'>
          Home
        </Link>
        <Link activeClassName={styles.active} href='/profile'>
          Me
        </Link>
        <Link activeClassName={styles.active} href='/profile/john'>
          John
        </Link>
      </nav>
    </header>
  );
};

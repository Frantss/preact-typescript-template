import { FunctionComponent, h } from 'preact';
import { RouteComponentProps } from '@reach/router';

import styles from './Home.module.scss';

const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div class={styles.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  );
};

export default Home;

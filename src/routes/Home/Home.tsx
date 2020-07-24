import { FunctionComponent, h } from 'preact';
import styles from './Home.module.scss';

const Home: FunctionComponent = () => {
  return (
    <div class={styles.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  );
};

export default Home;

import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './Profile.module.scss';

interface Props {
  user: string;
}

const Profile: FunctionalComponent<Props> = (props: Props) => {
  const { user } = props;
  const [time, setTime] = useState<number>(Date.now());
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(Date.now()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div class={style.profile}>
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <p>
        <button onClick={increment}>Click Me</button> Clicked {count} times.
      </p>
    </div>
  );
};

export default Profile;

import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import { RouteComponentProps } from '@reach/router';

import style from './Profile.module.scss';

type Props = {
  user: string;
} & RouteComponentProps;

const Profile: FunctionalComponent<Props> = (props: Props) => {
  const { user } = props;
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div class={style.profile}>
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <p>
        <button onClick={increment}>Click Me</button> Clicked {count} times.
      </p>
    </div>
  );
};

export default Profile;

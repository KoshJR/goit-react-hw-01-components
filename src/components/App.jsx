import { Fragment } from 'react';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendsList';
import { Transactions } from './Transactions/Transactions';
import friends from '../friends.json';
import user from '../user.json';
import data from '../data.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Fragment>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics stats={data} />
        <FriendList friends={friends} />
        <Transactions items={transactions} />
      </Fragment>
    </div>
  );
};

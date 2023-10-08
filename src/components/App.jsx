import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <>
      <section className="task-container">
        <h2>1 - Social network profile</h2>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section className="task-container">
        <h2>2- Statistics Section</h2>
        <Statistics title="Upload stats" stats={data} />
      </section>
      <section className="task-container">
        <h2>3 - Friends list</h2>
        <FriendList friends={friends} />
      </section>
      <section className="task-container">
        <h2>4 - Transaction History</h2>
        <TransactionHistory items={transactions} />
      </section>
    </>
  );
};

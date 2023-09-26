import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <>
      <section className="task-container">
        <h1>1 - Social network profile</h1>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section className="task-container">
        <h1>2- Statistics Section</h1>
        <Statistics title="Upload stats" stats={data} />
      </section>
      <section className="task-container">
        <h1>3 - Friends list</h1>
        <FriendList friends={friends} />
      </section>
      <section className="task-container">
        <h1>4 - Transaction History</h1>
        <TransactionHistory items={transactions} />
      </section>
    </>
  );
};

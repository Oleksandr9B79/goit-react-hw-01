// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Profile from "./Profile/Profile";
import userData from "../userData.json";

import friends from "../friends.json";
import FriendList from "./FriendList/FriendList";

import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

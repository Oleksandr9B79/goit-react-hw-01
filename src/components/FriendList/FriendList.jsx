import FriendListItem from "./FriendListItem";

import css from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((item) => (
        <li key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;

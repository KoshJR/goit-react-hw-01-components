import css from './FriendsList.module.css';
import { ItemFriends } from './ItemFriends';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <ItemFriends
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};

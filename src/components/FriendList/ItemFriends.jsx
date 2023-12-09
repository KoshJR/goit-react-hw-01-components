import css from './FriendsList.module.css';
export const ItemFriends = ({ isOnline, avatar, name }) => {
  const onlineStatus = isOnline ? css.online : css.offline;
  return (
    <li className={css.friend_item}>
      <span className={`${css.status} ${onlineStatus}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

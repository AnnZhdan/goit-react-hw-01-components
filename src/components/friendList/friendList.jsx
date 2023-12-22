import { FriendListItem } from '../FriendListItem/FriendListItem';
import styles from '../FriendListItem/FriendListItem.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

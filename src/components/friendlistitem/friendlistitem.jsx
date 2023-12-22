import styles from './FriendListItem.module.css';
export function FriendListItem({ friend }) {
  return (
    <li className={styles.item}>
      <span className={friend.isOnline ? styles.online : styles.offline}>
        &nbsp;
      </span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
}

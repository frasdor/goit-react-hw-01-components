import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';


export const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id} // Klucz unikalny dla każdego znajomego
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };
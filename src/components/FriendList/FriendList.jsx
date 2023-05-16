import FriendListItem from 'components/FriendListItem/FriendListItem'
import React from 'react'
import PropTypes from "prop-types";
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
      <ul className={css.friendList}> 
          {friends.map(f => <FriendListItem avatar={f.avatar} name={f.name} isOnline={f.isOnline} key={f.id} />)}
      </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default FriendList

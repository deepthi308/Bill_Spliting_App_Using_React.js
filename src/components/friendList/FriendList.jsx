import Friend from "../friend/Friend";
import "./FriendList.css";

export default function FriendList({
  friends,
  setSelectedFriend,
  selectedFriend,
  setBillValue,
  setMyExpense,
  setBillPayer,
  isDeleteMode,
  setFriends,
}) {
  // console.log(setFriends, "from friendlist");
  return (
    <ul className="friend_list">
      {friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            friends={friends}
            key={friend.id}
            setSelectedFriend={setSelectedFriend}
            selectedFriend={selectedFriend}
            setBillValue={setBillValue}
            setMyExpense={setMyExpense}
            setBillPayer={setBillPayer}
            isDeleteMode={isDeleteMode}
            setFriends={setFriends}
          />
        );
      })}
    </ul>
  );
}

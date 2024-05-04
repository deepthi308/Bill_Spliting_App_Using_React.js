import AddFriend from "../addFriend/AddFriend";
import FriendList from "../friendList/FriendList";
import "./LeftContainer.css";
import { IoPersonAdd } from "react-icons/io5";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function LeftContainer({
  setIsModalOpen,
  friends,
  setSelectedFriend,
  selectedFriend,
  setBillValue,
  setMyExpense,
  setBillPayer,
  setFriends,
}) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const handleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  return (
    <section className="left_container">
      {friends.length > 0 ? (
        <FriendList
          friends={friends}
          setSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
          setBillValue={setBillValue}
          setMyExpense={setMyExpense}
          setBillPayer={setBillPayer}
          isDeleteMode={isDeleteMode}
          setFriends={setFriends}
        />
      ) : (
        <p className="no_friend_info">No Friends Are Added Yet !</p>
      )}
      <button
        className="add_friend_symbol"
        onClick={() => {
          setIsModalOpen(true);
          setSelectedFriend(null);
          setIsDeleteMode(false);
        }}
      >
        <IoPersonAdd className="add_symbol" />
      </button>
      <button
        className={`delete_mode_symbol ${isDeleteMode ? "active" : ""}`}
        onClick={handleDeleteMode}
      >
        <MdDelete className="delete_symbol" />
      </button>
    </section>
  );
}

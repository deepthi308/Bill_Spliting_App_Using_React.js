import "./Friend.css";

export default function Friend({
  friend,
  friends,
  setSelectedFriend,
  selectedFriend,
  setBillValue,
  setMyExpense,
  setBillPayer,
  isDeleteMode,
  setFriends,
}) {
  console.log(setFriends);
  const handleSelect = () => {
    setBillValue("");
    setMyExpense("");
    setBillPayer("You");
    setSelectedFriend((currFriend) => {
      return currFriend?.id === friend?.id ? null : friend;
    });
  };

  const handleDelete = () => {
    setFriends((currFriends) => {
      let newFrnds = currFriends.filter((frnd) => {
        return frnd.id !== friend.id;
      });
      localStorage.setItem("friends", JSON.stringify(newFrnds));
      return newFrnds;
    });
  };

  return (
    <li className="friend">
      <img src={friend.image} alt="Profile" />
      <section className="info">
        <p className="person_name">{friend.name}</p>
        {friend.balance === 0 && (
          <p className="owe_details">{`You and ${friend.name} are even`}</p>
        )}
        {friend.balance < 0 && (
          <p style={{ color: "red" }} className="owe_details">{`You owe ${
            friend.name
          } ${Math.abs(friend.balance)}$`}</p>
        )}
        {friend.balance > 0 && (
          <p
            style={{ color: "green" }}
            className="owe_details"
          >{`${friend.name} owes you ${friend.balance}$`}</p>
        )}
      </section>
      <section className="button">
        {!isDeleteMode ? (
          <button
            className={`select ${
              selectedFriend?.id === friend?.id ? "active_user" : ""
            }`}
            onClick={handleSelect}
          >
            {selectedFriend?.id === friend?.id ? "Close" : "Select"}
          </button>
        ) : (
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        )}
      </section>
    </li>
  );
}

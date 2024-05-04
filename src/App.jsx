import "./App.css";
import AddFriend from "./components/addFriend/AddFriend";
import LeftContainer from "./components/leftContainer/LeftContainer";
import RightContainer from "./components/rightContainer/RightContainer";
import { useEffect, useState } from "react";

const initialFriends = [
  {
    id: 1,
    name: "Praveen Hariraman",
    image:
      "https://pics.craiyon.com/2023-09-26/f54ad3f9ad074aa28848d3c5b8eea22d.webp",
    balance: -7,
  },
  {
    id: 2,
    name: "Deepthi Hariraman",
    image:
      "https://th.bing.com/th/id/OIP.XUaAK_Bw49Ttb3btK3hOYQHaK6?w=203&h=300&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    balance: 20,
  },
  {
    id: 3,
    name: "Krishnalakshmi",
    image:
      "https://th.bing.com/th/id/OIP.5vSjahdzCHkiD4s8Eaw5HQHaHa?rs=1&pid=ImgDetMain",
    balance: 0,
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [friends, setFriends] = useState([]);

  const [selectedFriend, setSelectedFriend] = useState(null);

  // Lifting state up
  const [billValue, setBillValue] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [billPayer, setBillPayer] = useState("You");

  useEffect(() => {
    setFriends(JSON.parse(localStorage.getItem("friends")) || initialFriends);
  }, []);

  // console.log(setFriends, "from app");

  return (
    <main className="app">
      <LeftContainer
        setIsModalOpen={setIsModalOpen}
        friends={friends}
        setSelectedFriend={setSelectedFriend}
        selectedFriend={selectedFriend}
        setBillValue={setBillValue}
        setMyExpense={setMyExpense}
        setBillPayer={setBillPayer}
        setFriends={setFriends}
      />
      {selectedFriend && (
        <RightContainer
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          setFriends={setFriends}
          friends={friends}
          billValue={billValue}
          setBillValue={setBillValue}
          myExpense={myExpense}
          setMyExpense={setMyExpense}
          billPayer={billPayer}
          setBillPayer={setBillPayer}
        />
      )}
      {isModalOpen && (
        <AddFriend setIsModalOpen={setIsModalOpen} setFriends={setFriends} />
      )}
    </main>
  );
}

export default App;

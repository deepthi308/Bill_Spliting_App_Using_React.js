import { useState } from "react";
import "./AddFriend.css";
import { IoMdCloseCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddFriend({ setIsModalOpen, setFriends }) {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("");

  const handleFriendNameChange = (e) => {
    setFriendName(e.target.value);
  };

  const handleFriendImageChange = (e) => {
    setFriendImage(e.target.value);
  };

  const handleAddFriend = () => {
    if (!friendName || !friendImage) {
      toast("Please enter the input fields");
      return;
    }

    let newFriend = {
      id: crypto.randomUUID(),
      image: friendImage,
      name: friendName,
      balance: 0,
    };
    setFriends((currFriends) => {
      let frnds = [...currFriends, newFriend];
      localStorage.setItem("friends", JSON.stringify(frnds));
      return frnds;
    });
    setIsModalOpen(false);
  };

  return (
    <section className="modal_container">
      <section className="add_friend">
        <section className="form_group">
          <label htmlFor="">Enter Your Friend's Name:</label>
          <input
            type="text"
            placeholder="Deepthi Hariraman"
            value={friendName}
            onChange={handleFriendNameChange}
          />
        </section>
        <section className="form_group">
          <label htmlFor="">Enter Your Friend's Image:</label>
          <input
            type="text"
            value={friendImage}
            onChange={handleFriendImageChange}
          />
        </section>
        <button className="add" onClick={handleAddFriend}>
          Add Friend
        </button>
        <button className="close" onClick={() => setIsModalOpen(false)}>
          <IoMdCloseCircle />
        </button>
      </section>
      <ToastContainer
        position="bottom-right"
        type="error"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </section>
  );
}

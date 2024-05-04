import { useState } from "react";
import "./RightContainer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RightContainer({
  selectedFriend,
  setSelectedFriend,
  setFriends,
  friends,
  billValue,
  setBillValue,
  myExpense,
  setMyExpense,
  billPayer,
  setBillPayer,
}) {
  let frndExpense = "";

  const handleBillValueChange = (e) => {
    setBillValue(Number(e.target.value));
  };

  const handleMyExpenseChange = (e) => {
    if (billValue) {
      setMyExpense(Number(e.target.value));
    } else {
      toast("Please enter the Bill Value");
    }
  };

  const handleBillPayerChange = (e) => {
    setBillPayer(e.target.value);
  };

  const handleSplitBill = () => {
    let newFriend;
    console.log(billValue, myExpense);
    if (!billValue || !myExpense) {
      toast("Please enter the Bill Value & Your Expense");
      return;
    }
    if (billPayer === selectedFriend.name) {
      newFriend = {
        ...selectedFriend,
        balance: selectedFriend.balance + myExpense,
      };
    } else {
      newFriend = {
        ...selectedFriend,
        balance: selectedFriend.balance - frndExpense,
      };
    }
    setFriends((currFriends) => {
      let frnds = currFriends.map((frnd) => {
        return frnd.id === selectedFriend.id ? newFriend : frnd;
      });
      localStorage.setItem("friends", JSON.stringify(frnds));
      return frnds;
    });
    setBillValue("");
    setMyExpense("");
    setBillPayer("You");

    setSelectedFriend(null);
  };

  if (myExpense) {
    frndExpense = billValue - myExpense;
  }

  return (
    <section className="right_container">
      <h3>SPLIT A BILL WITH {selectedFriend?.name}</h3>
      <section className="form_group">
        <label htmlFor="">Bill Value</label>
        <input
          type="text"
          value={billValue}
          onChange={handleBillValueChange}
          placeholder="100"
        />
      </section>
      <section className="form_group">
        <label htmlFor="">Your Expense</label>
        <input
          type="text"
          value={myExpense}
          onChange={handleMyExpenseChange}
          placeholder="50"
        />
      </section>
      <section className="form_group">
        <label htmlFor="">{selectedFriend?.name}'s Expense</label>
        <input
          className="disabled"
          type="text"
          value={frndExpense}
          disabled
          placeholder="50"
        />
      </section>
      <section className="form_group">
        <label htmlFor="">Who is paying the bill</label>
        <select value={billPayer} onChange={handleBillPayerChange}>
          <option value="You">You</option>
          <option value={selectedFriend?.name}>{selectedFriend?.name}</option>
        </select>
      </section>
      <button className="split_bill" onClick={handleSplitBill}>
        Split Bill
      </button>
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

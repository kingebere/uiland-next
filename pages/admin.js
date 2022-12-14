import React, { useState } from "react";
import PaystackPayment from "../components/PaystackPayment";

// import { updateBookMark } from "../firebase";
export default function Admin() {
  const [inputElement, setInputElement] = useState("");
  const [inputScreen, setInputScreen] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputOrder, setInputOrder] = useState("");

  const [bookmarkName, setBookmarkName] = useState("");
  const [selectTag, setSelectTag] = useState("");

  // paystack data
  const amount = 100;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const data = {
    pocketApp: "5bvZfdtUXhtCYh0OTu9W",
    piggyvest: "eNhL4nfO2GXctLGe7qvg",
    cowrywise: "exDsnWyuuxMHHLmhuR7x",
    Payday: "r48LXqoJjgd6dvB2sg7E",
  };

  const elementsCategoryData = [
    "",
    "search",
    "card",
    "dialog",
    "skeleton",
    "tooltip",
    "bottom sheet",
    "divider",
    "input",
    "loading",
    "button",
    "toast",
    "radio button",
    "dropdown",
    "copy icon",
  ];

  function handleChangeElement(e) {
    console.log(e.target.value);
    setInputElement(e.target.value);
  }
  function handleChangeOrder(e) {
    setInputOrder(e.target.value);
  }
  function handleChangeBookmarkName(e) {
    setSelectTag(e.target.value);
    setBookmarkName(data[e.target.value]);
  }
  function handleChangeScreen(e) {
    setInputScreen(e.target.value);
  }
  function handleChangeUrl(e) {
    setInputUrl(e.target.value);
  }
  function submitForm(e) {
    e.preventDefault();
    console.log(inputElement, inputScreen, inputUrl, bookmarkName, inputOrder);
    // updateBookMark(
    //   inputElement,
    //   inputScreen,
    //   inputUrl,
    //   bookmarkName,
    //   inputOrder
    // );
  }
  function handlePaymentName(e) {
    setName(e.target.value);
  }
  function handlePaymentEmail(e) {
    setEmail(e.target.value);
  }
  function handlePaymentPhone(e) {
    setPhone(e.target.value);
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="bookmarkName">bookmark Name:</label>
        <select value={selectTag} onChange={handleChangeBookmarkName}>
          {Object.keys(data).map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select>
        <label htmlFor="elementCategory">element category:</label>
        <select value={inputElement} onChange={handleChangeElement}>
          {elementsCategoryData.map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select>
        <label htmlFor="screenCategory">screen category:</label>
        <input
          name="inputScreen"
          type="text"
          value={inputScreen}
          onChange={handleChangeScreen}
        />
        <label htmlFor="url">image url:</label>
        <input
          name="inputUrl"
          type="text"
          value={inputUrl}
          onChange={handleChangeUrl}
        />
        <label htmlFor="order">Order:</label>
        <input
          name="inputOrder"
          type="text"
          value={inputOrder}
          onChange={handleChangeOrder}
        />
        <button type="submit">Submit</button>
      </form>

      <PaystackPayment
        amount={amount}
        email={email}
        phone={phone}
        name={name}
        handlePaymentName={handlePaymentName}
        handlePaymentEmail={handlePaymentEmail}
        handlePaymentPhone={handlePaymentPhone}
      />
    </div>
  );
}

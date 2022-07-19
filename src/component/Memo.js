import React, { useState } from "react";

const Memo = () => {
  const [memo, setMemo] = useState("");
  const [memoList, setMemoList] = useState([]);
  const onChange = (e) => {
    setMemo(e.target.value);
    console.log("memo", memo);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setMemoList(memo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      {memoList?.map((el) => (
        <>
          <div>{el}</div>
          <button>dd</button>
        </>
      ))}
    </div>
  );
};

export default Memo;

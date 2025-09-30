"use client";

import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "@/components"
import { Dispatch } from "./../../../../node_modules/redux/src/types/store";

function Section01() {
  const state = useSelector((state) => state.counter);
  const useState = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <>
      <h1>CreateSlice</h1>
      <div>
        <p>Count : {state.value}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <p>Status : {userState.state}</p>
        <p>Data : {JSON.stringify(userState.data)}</p>
        <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
      </div>
    </>
  );
}

export default Section01;

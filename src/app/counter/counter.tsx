"use client";
//imports
import { useState, useRef, useEffect } from "react";
import { getData, putData, getDataById } from "./counterLogic";
import { CounterType } from "../page";

export default function Counter({ counterData }: { counterData: CounterType }) {
  const [count, setCount] = useState<CounterType>(counterData);

  const fetchAndSetData = async () => {
    const dulceDeBatata = await getDataById(counterData._id);
    // console.log(dulceDeBatata);
    setCount(dulceDeBatata);
  };
  useEffect(() => {
    fetchAndSetData();
  }, []);

  async function add() {
    await fetchAndSetData();
    await putData(count._id, count.value + 1);
    await fetchAndSetData();
  }

  async function minus() {
    await fetchAndSetData();
    await putData(count._id, count.value - 1);
    await fetchAndSetData();
  }
  //   console.log(count);
  return (
    <div
      className={`h-32 w-32 flex flex-col items-center justify-center border-2 ${count.color}`}
    >
      <div className="flex flex-col items-center justify-center">
        <p>counter value:</p>
        <p>{count.value}</p>
      </div>
      <div className={"flex flex-row gap-2"}>
        <button onClick={async () => await add()}>add +</button>
        <button onClick={async () => await minus()}>minus -</button>
      </div>
    </div>
  );
}

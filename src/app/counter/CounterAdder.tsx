"use client";
import { getData, postData } from "./counterLogic";
import { useContext, useState } from "react";
import { CounterType } from "../page";
import { CounterContext } from "../page";

export default function CounterAdder() {
  const [counters, setCounters] = useContext(CounterContext);

  const [hover, setHover] = useState(false);
  const [colorSelector, setColorSelector] = useState(false);
  async function addCounter(color: string) {
    const CounterArray = await getData();
    // console.log(CounterArray);
    if (CounterArray.length >= 10) {
      return;
    }
    setColorSelector(false);
    await postData(0, color);
    const newCounterArray = await getData();
    setCounters([...newCounterArray]);
    //hay que poner un useContext
  }

  return (
    <div className="h-32 w-32 flex flex-col items-center justify-center">
      {colorSelector ? (
        <div className="flex flex-col items-center border-2 h-32 w-32">
          <p className="p-1">Select a Color:</p>
          <div className="grid grid-cols-3 gap-2">
            <div
              className="bg-red-500 h-8 w-8"
              onClick={async () => await addCounter("bg-red-500")}
            ></div>
            <div
              className="bg-blue-500 h-8 w-8"
              onClick={async () => await addCounter("bg-blue-500")}
            ></div>
            <div
              className="bg-green-500 h-8 w-8"
              onClick={async () => await addCounter("bg-green-500")}
            ></div>
            <div
              className="bg-yellow-500 h-8 w-8"
              onClick={async () => await addCounter("bg-yellow-500")}
            ></div>
            <div
              className="bg-indigo-500 h-8 w-8"
              onClick={async () => await addCounter("bg-indigo-500")}
            ></div>
            <div
              className="bg-purple-500 h-8 w-8"
              onClick={async () => await addCounter("bg-purple-500")}
            ></div>
          </div>
        </div>
      ) : (
        <div
          className={`flex h-24 w-24 rounded-full border-2 border-white items-center justify-center ${
            hover ? "bg-gray-900" : "bg-black"
          }`}
          onClick={() => setColorSelector(true)}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {"+"}
        </div>
      )}
    </div>
  );
}

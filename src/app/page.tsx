"use client";
//imports
import Counter from "./counter/counter";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { getData } from "./counter/counterLogic";
import CounterAdder from "./counter/CounterAdder";

export type CounterType = {
  _id: string;
  value: number;
  color: string;
  __v: number;
};
interface CounterAdderProps {
  setCounters: Dispatch<SetStateAction<CounterType[] | null>>;
}

export const CounterContext = React.createContext<any>(null);

export default function Page() {
  const [counters, setCounters] = useState<CounterType[] | null>(null);
  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const dulceDeMembrillo = await getData();
    setCounters(dulceDeMembrillo);
  };

  return (
    <CounterContext.Provider value={[counters, setCounters]}>
      <div className="flex flex-wrap gap-2">
        {counters?.map((counter, index) => (
          <Counter key={index} counterData={counter} />
        ))}
        {counters ? (
          counters.length < 10 ? (
            <CounterAdder />
          ) : null
        ) : (
          <CounterAdder />
        )}
      </div>
    </CounterContext.Provider>
  );
}

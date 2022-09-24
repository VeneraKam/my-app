import React, { useState } from "react";
import Counter from "./counter";

const CoutersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ложка", price: "100" },
    { id: 1, value: 4, name: "Вилка" },
    { id: 2, value: 2, name: "Нож" },
    { id: 3, value: 3, name: "Чашка" },
    { id: 4, value: 4, name: "Тарелка" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const newValue = counters.map((counter) => {
      if (counter.id === id) counter.value = counter.value + 1;
      return counter;
    });
    setCounters(newValue);
  };

  const handleDecrement = (id) => {
    const newValue = counters.map((counter) => {
      if (counter.id === id) counter.value = counter.value - 1;
      return counter;
    });
    setCounters(newValue);
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn prmary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CoutersList;

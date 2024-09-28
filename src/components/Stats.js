import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        There are {items.length} element in this list, add yours
      </p>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked =
    totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        You have {totalItems} items on your list, and you already packed{" "}
        {packedItems} ({percentagePacked}%)
      </em>
    </footer>
  );
};

export default Stats;

import React, { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: false },
];

const App = () => {
  const [items, setItems] = useState(initialItems);
  const handleItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItem} />
      <PackingList
        initialItems={initialItems}
        items={items}
        onDeleteItem={handleDelete}
        onToggleItem={handleToggle}
        setItems= {setItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;

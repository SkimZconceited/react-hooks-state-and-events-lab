import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setCategory] = useState('All');

  const filterBy = category === 'All' ? items : items.filter((item => item.category === category));

  console.log(items, 'items')
  console.log(filterBy, 'filterBy')

  function handleCategory(event) {
    console.log(event.target.value)
    return setCategory(event.target.value);
  }
  return (
    <div className="ShoppingList">
      <div className="Filter" >
        <select name="filter" onChange={handleCategory} value={category} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterBy.map((filtered) => (
          <Item key={filtered.id} name={filtered.name} category={filtered.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

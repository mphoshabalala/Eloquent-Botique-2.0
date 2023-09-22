import React from "react";
import { useItems } from "../contexts/ItemsContext";

export default function Search() {
  const { searchQuery, setSearchQuery, categories } = useItems();
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select className="search-category">
        <option>Category</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

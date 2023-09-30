import React from "react";
import { useItems } from "../contexts/ItemsContext";

export default function Search() {
  const { searchQuery, setSearchQuery, categories, setSelectedCategory } =
    useItems();

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        className="search-category"
        // change selected actegory according to the value targeted
        onChange={(e) => setSelectedCategory(e.target.value.toLowerCase())}
      >
        {categories.map((category) => (
          <option key={category}>
            {/* set the first letter to uppercase */}
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

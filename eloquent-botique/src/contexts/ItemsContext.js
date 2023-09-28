import { createContext, useContext, useEffect, useState } from "react";
const BASE_URL = "https://fakestoreapi.com";
const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [failedToFetch, setFaileToFetch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const searchedItems =
    searchQuery.length > 0
      ? items.filter((item) =>
          `${item.title} ${item.description}`
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
        )
      : items.filter((item) =>
          selectedCategory ? item.category === selectedCategory : true
        );

  useEffect(() => {
    async function getItems() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/products`);
        const data = await res.json();
        setItems(data);
        setCategories([...new Set(data.map((item) => item.category))]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
        setFaileToFetch(false);
      }
    }

    getItems();
  }, []);

  async function getItem(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`);
      const data = await res.json();
      setCurrentItem(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ItemsContext.Provider
      value={{
        searchedItems,
        currentItem,
        isLoading,
        getItem,
        searchQuery,
        setSearchQuery,
        categories,
        setCurrentItem,
        setSelectedCategory,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined)
    throw new Error("item context was used outside the CitiesProvider");
  return context;
}

export { ItemsProvider, useItems };

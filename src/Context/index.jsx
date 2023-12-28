import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
  const [count, setCount] =useState(0);
  const [isProductDetailOpen, setIsProductItemOpen] = useState(false);
  const openProductDetail = () => setIsProductItemOpen(true);
  const closeProductDetail = () => setIsProductItemOpen(false);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  const [order, setOrder] = useState([]);

  const [items, setItems] =useState(null);
  const [filteredItems, setFilteredItems] =useState(null);
  const [searchByTitle, setSearchByTitle] =useState(null);
  const [searchByCategory, setSearchByCategory] =useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setItems(data))
  },[])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  
  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle,searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE", items, searchByTitle,searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory))
    if (!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  },[items, searchByTitle, searchByCategory])

const filteredItemsByCategory = (items, searchByCategory) => {
  return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
}

const filterBy = (searchType, items, searchByTitle,searchByCategory ) => {
  if (searchType==="BY_TITLE") {
    return filteredItemsByTitle(items,searchByTitle )
  }
  if (searchType==="BY_CATEGORY") {
    return filteredItemsByCategory(items,searchByCategory)
  }
  if (searchType==="BY_TITLE_AND_CATEGORY") {
    return filteredItemsByCategory(items,searchByCategory).filter(item =>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  if (!searchType) {
    return items;
  }
}

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      setSearchByCategory,
      searchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider}
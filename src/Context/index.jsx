import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
  const [count, setCount] =useState(0);
  const [isProductDetailOpen, setIsProductItemOpen] = useState(false);
  const openProductDetail = () => setIsProductItemOpen(true);
  const closeProductDetail = () => setIsProductItemOpen(false);

  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider}
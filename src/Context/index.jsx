import { createContext, useState } from "react";

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
      closeCheckoutSideMenu
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider}
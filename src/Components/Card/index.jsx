import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function Card(data){
  const context = useContext(ShoppingCartContext);
  
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count+1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  }
  
  const renderIcon = (id)=> {
    const isInCart = context.cartProducts.filter(product => product.id===id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black/80 w-6 h-6 rounded-full m-2 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>

        </div>
      )
    } else {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        onClick={(event)=> addProductsToCart(event,data)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      )
    }

  }
  return (
    <div
      className="bg-white cursor-pointer w-full h-full rounded-lg"
      onClick={()=> showProduct(data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 ">{data.category}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.image} alt={data.title} />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2 ">{data.title}</span>
        <span className="text-lg font-medium ">${data.price}</span>
      </p>
    </div>
  )
}

export { Card }
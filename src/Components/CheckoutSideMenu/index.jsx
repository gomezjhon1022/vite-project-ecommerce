import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import './styles.css'

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !==id);
    context.setCartProducts(filteredProducts);

  }
  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ?' flex': 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div >
        <svg className="h-6 w-6 text-black cursor-pointer" onClick={()=> context.closeCheckoutSideMenu()}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
              />
          ))
        }

      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu };
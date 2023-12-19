import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"

function ProductDetail() {
  const context = useContext(ShoppingCartContext);
  console.log('PRODUCT TO SHOW: ', context.productToShow)
  return (
    <aside
      className={`${context.isProductDetailOpen ?' flex': 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div >
        <svg className="h-6 w-6 text-black cursor-pointer" onClick={()=> context.closeProductDetail()}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        </div>
      </div>
      <figure className="px-6">
        <img className="w-auto mx-auto rounded-lg max-h-[30vh] bg-cover" src={context.productToShow.image} alt={context.productToShow.title}/>
        <p className="flex flex-col py-6">
          <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
          <span className="font-medium text-md">${context.productToShow.title}</span>
          <span className="font-light text-sm">${context.productToShow.description}</span>
        </p>
      </figure>
    </aside>
  )
}

export { ProductDetail };
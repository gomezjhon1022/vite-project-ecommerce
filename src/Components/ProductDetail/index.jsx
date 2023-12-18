import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"

function ProductDetail() {
  const context = useContext(ShoppingCartContext);
  return (
    <aside 
      className={`${context.isProductDetailOpen ?' flex': 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div >
        <svg className="h-6 w-6 text-black cursor-pointer" onClick={()=> context.closeProductDetail()}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        </div>
      </div>
    </aside>
  )
}

export { ProductDetail };
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

const Navbar = () => {
  const context=useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({isActive}) =>
              isActive ? activeStyle : undefined}
            >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/mens-clothing'
            onClick={() => context.setSearchByCategory("men's clothing")}
            className={({isActive}) =>
              isActive ? activeStyle : undefined}
            >
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/womens-clothing'
            onClick={() => context.setSearchByCategory("women's clothing")}
            className={({isActive}) =>
              isActive ? activeStyle : undefined}
            >
            Women's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({isActive}) =>
              isActive ? activeStyle : undefined}
            >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelery'
            onClick={() => context.setSearchByCategory('jewelery')}
            className={({isActive}) =>
              isActive ? activeStyle : undefined}
            >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          jhon@email.con
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({isActive}) =>
              isActive ? activeStyle : undefined}
            >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({isActive}) =>
              isActive ? activeStyle : undefined}
            >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({isActive}) =>
              isActive ? activeStyle : undefined}
            >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  )
}

export { Navbar };
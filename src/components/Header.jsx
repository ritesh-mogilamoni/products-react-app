import { NavLink } from "react-router"

function Header() {
  return (
     <div className="flex justify-between items-center px-10 bg-white">
        <img className="w-15" src="https://img.freepik.com/premium-vector/colorful-bird-wing-feather-logo-icon_23758-199.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        <nav >
            <ul className="flex gap-10 ">
            <li>
                <NavLink to="/" className={({isActive})=>(isActive?"text-blue-500":"text-black-500")}>Home</NavLink>
            </li>
            <li>
                <NavLink to="productlist" className={({isActive})=>(isActive?"text-blue-500":"text-black-500")}>Products</NavLink>
            </li>
            <li>
                <NavLink to="contactus" className={({isActive})=>(isActive?"text-blue-500":"text-black-500")}>Contact US</NavLink>
            </li>
            
            </ul>
        </nav>

    </div>
  )
}

export default Header
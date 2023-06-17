import { useNavigate } from "react-router-dom"

const Navbar = ({ menus }) => {

  const navigate = useNavigate()

  const handleClick = (route) => {
    navigate(route)
  }

  const listMenu = menus.map((menu, index) =>
    <li className="mr-6 py-6" key={index}>
      <button
        className="text-white hover:text-amber-200 hover:cursor-pointer"
        onClick={() => handleClick(menu.route)}
      >
        {menu.label}
      </button>
    </li> 
  )
  
  return (
    <nav className="bg-gray-900">
        <ul className="flex px-4">
          {listMenu}
        </ul>
    </nav>
  )
}
  
export default Navbar
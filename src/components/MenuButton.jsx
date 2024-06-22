const MenuButton = (props) => {
  return (
    <button
      onClick={props.func}
      type="button"
      className={`relative ${props.menuOpen ? 'z-0' : 'z-30'} text-tesla-black bg-menu-button hover:bg-tesla-white flex h-8 items-center justify-center rounded  px-4 backdrop-blur-lg transition duration-300 ease-in-out`}
    >
      <span className="text-[14px] font-medium">Menu</span>
    </button>
  )
}

export default MenuButton

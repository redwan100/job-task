import logo from '../../assets/logo.png'
import menu from '../../assets/menu-black-18dp.png'
const menus =[
    {
        id:1,
        link:'#',
        name:"Crypto Taxes"
    },
    {
        id:21,
        link:'#',
        name:"Free Tools"
    },
    {
        id:1,
        link:'#',
        name:"Resource Center"
    },
]

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1040px] w-full mx-auto py-4 px-3 flex items-center justify-between">
           <img src={logo} alt="logo" />
           <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
                {menus.map((menu)=>(
                    <li key={menu.id} className='font-medium hover:text-primary transition-all'>
                        <a href={menu.link}>{menu.name}</a>
                    </li>
                ))}
               <li className='bg-primary text-white px-4 py-2 rounded-md min-w-max font-medium'>
                        <a href='#'>Get Started</a>
                </li>
            </ul>

           
           </div>
            {/* humber menu  */}
            <div className='md:hidden'>
              <img src={menu} alt="menu" />
            </div>
            {/* humber menu  */}
        </div>

    </div>
  )
}

export default Navbar
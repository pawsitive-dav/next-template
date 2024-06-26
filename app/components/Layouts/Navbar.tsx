import Link from 'next/link'
import DarkModeButton from '../BaseComponents/DarkModeButton'

export default function Navbar() {
  const menuList = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' }
  ]

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <Link href='/' className='text-white text-xl font-bold'>
            LOGO
          </Link>
        </div>
        <div>
          <ul className='flex space-x-4'>
            {menuList.map((item, index) => (
              <li key={index}>
                <Link href={item.to} className='text-white hover:text-gray-300'>
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <DarkModeButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

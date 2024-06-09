import { Button } from '@nextui-org/react'
import { useLocation, useNavigate } from 'react-router-dom'

interface SidebarItemProps {
  icon: JSX.Element,
  text: string,
  route: `/${string}`
}

const SidebarItem = ({ icon, text, route }: SidebarItemProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className='w-52 flex'>
      <div className={`flex items-center ${ route === pathname ? 'bg-white': 'bg-primary' } transition-colors delay-100 border-2 border-primary border-r-0 rounded-l-xl h-10 px-2`}>
        <span className={route === pathname ? 'text-primary': 'text-white'}>{icon}</span>
      </div>
      <Button onClick={() => navigate(route)} color='primary' variant={ route === pathname ? 'shadow' : 'bordered'} className='w-full font-[Roboto] rounded-l-none text-base'>{text}</Button>
    </div>
  )
}

export default SidebarItem

import { Button, Tooltip } from '@nextui-org/react'
import { useLocation, useNavigate } from 'react-router-dom'

interface SidebarItemProps {
  icon: JSX.Element,
  text: string,
  route: `/${string}`,
  isSidebarClosed: boolean
}

const SidebarItem = ({ icon, text, route, isSidebarClosed }: SidebarItemProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className={`${ isSidebarClosed ? 'w-20 justify-center' : 'w-48'} flex`}>
      <div className={`flex items-center ${ route === pathname ? 'bg-white': 'bg-primary' } transition-colors delay-100 ${ isSidebarClosed ? 'rounded-xl' : 'border-r-0 rounded-l-xl px-2 border-primary border-2'} h-10`}>
        {
          isSidebarClosed ? <Tooltip content={text} placement='right'><Button onPress={() => navigate(route)} color='primary' variant={ route === pathname ? 'bordered' : 'shadow'} isIconOnly>{icon}</Button></Tooltip> : <span className={route === pathname ? 'text-primary': 'text-white'}>{icon}</span>
        }
      </div>
      { !isSidebarClosed && <Button onPress={() => navigate(route)} color='primary' variant={ route === pathname ? 'shadow' : 'bordered'} className='w-full font-[Roboto] rounded-l-none text-base'>{text}</Button>}
    </div>
  )
}

export default SidebarItem

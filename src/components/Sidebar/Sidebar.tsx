import SidebarItem from './SidebarItem'
import { Button, Card, CardBody, Divider } from '@nextui-org/react'
import { useDisclosure } from "@nextui-org/react";
import { Fragment } from 'react/jsx-runtime'
import { SidebarNavContent } from '../../constants/config'
import { Link } from 'react-router-dom'
import SigmaLogo from '../Icons/SigmaIcon'
import HeartIcon from '../Icons/HeartIcon'
import LogoutIcon from '../Icons/LogoutIcon'
import LogoutModel from '../Login/LogoutModel';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card className='w-72 h-full rounded-lg'>
      <div className='flex items-center gap-x-2 justify-center my-4'>
        <Link to='/'>
          <SigmaLogo size={45} />
        </Link>
        <span className='w-32 text-base font-[Roboto] text-center'>Hi, Isuru</span>
      </div>
      <CardBody className='flex items-center flex-col gap-y-5 no-scroll'>
        <Divider />
        {SidebarNavContent.map(({ icon: IconElement, text, route }, i) => {
          return (
            <Fragment key={i}>
              <SidebarItem icon={<IconElement size={24} />} text={text} route={route} />
              <Divider />
            </Fragment>
          )
        })}
      </CardBody>
      <div className='flex justify-center'>
        <Button onClick={onOpen} variant='bordered' color='primary' className='font-[Roboto]'><LogoutIcon size={24} />Sign out</Button>
        <LogoutModel isOpen={isOpen} onClose={onClose}/>
      </div>
      <span className='my-4 text-sm text-gray-400 font-[Roboto] text-center'>
        Made with
        <span className='text-red-400'>
          <HeartIcon size={16} />
        </span>
        by <a target='_blank' href='https://github.com/Danushka-Madushan' className='text-gray-600'>Danushka Madushan</a>
      </span>
    </Card>
  )
}

export default Sidebar

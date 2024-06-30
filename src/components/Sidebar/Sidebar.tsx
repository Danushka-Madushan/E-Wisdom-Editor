import SidebarItem from './SidebarItem'
import { Button, Card, CardBody, Divider, Tooltip } from '@nextui-org/react'
import { useDisclosure } from "@nextui-org/react";
import { Fragment } from 'react/jsx-runtime'
import { SidebarNavContent } from '../../constants/content'
import { Link } from 'react-router-dom'
import SigmaLogo from '../Icons/SigmaIcon'
import HeartIcon from '../Icons/HeartIcon'
import LogoutIcon from '../Icons/LogoutIcon'
import LogoutModel from '../Login/LogoutModel';
import { useState } from 'react';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSidebarClosed, setSidebarClosed] = useState(true);

  return (
    <Card className={`${isSidebarClosed ? 'w-20' : 'w-64'} h-full rounded-lg`}>
      <div className='flex items-center gap-x-2 justify-center my-4'>
        <Link to='/'>
          <SigmaLogo size={45} />
        </Link>
        {!isSidebarClosed && <span className='w-32 text-base font-[Roboto] text-center'>Hi, Isuru</span>}
      </div>
      <CardBody className='flex items-center flex-col gap-y-5 no-scroll'>
        <Divider />
        {SidebarNavContent.map(({ icon: IconElement, text, route }, i) => {
          return (
            <Fragment key={i}>
              <SidebarItem icon={<IconElement size={24} />} text={text} route={route} isSidebarClosed={isSidebarClosed} />
              <Divider />
            </Fragment>
          )
        })}
        <Button isIconOnly onPress={() => setSidebarClosed((prev) => !prev)}></Button>
      </CardBody>
      <div className='flex justify-center'>
        <Tooltip isDisabled={!isSidebarClosed} content="Sign out" placement='right'>
          <Button onPress={onOpen} isIconOnly={isSidebarClosed} variant='bordered' color='primary' className='font-[Roboto]'><LogoutIcon size={24} />{!isSidebarClosed && 'Sign out'}</Button>
        </Tooltip>
        <LogoutModel isOpen={isOpen} onClose={onClose} />
      </div>
      {
        isSidebarClosed ?
          <span className='text-center my-4 text-red-400'>
            <HeartIcon size={16} />
          </span> :
          <span className='my-4 text-sm text-gray-400 font-[Roboto] text-center'>
            Made with
            <span className='text-red-400'>
              <HeartIcon size={16} />
            </span>
            by <a target='_blank' href='https://github.com/Danushka-Madushan' className='text-gray-600'>Madushan</a>
          </span>
      }
    </Card>
  )
}

export default Sidebar

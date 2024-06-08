import { Button } from '@nextui-org/react'
import { BookDashed, Receipt, User, Video } from 'lucide-react'

const Courses = [
  {
    icon: <User />,
    text: 'Students'
  },
  {
    icon: <Receipt />,
    text: 'Subscriptions'
  },
  {
    icon: <BookDashed />,
    text: 'Courses'
  },
  {
    icon: <Video />,
    text: 'Videos'
  },
]

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-y-6 mt-20 mx-8 w-72'>
      {Courses.map(({ icon, text }, i) => {
        return (
          <div key={i} className='w-52 flex'>
            <div className='flex items-center border-2 border-primary border-r-0 rounded-l-xl h-10 px-2'>
              <span className='text-default-500'>{icon}</span>
            </div>
            <Button color='primary' className='w-full rounded-l-none text-base'>{text}</Button>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar

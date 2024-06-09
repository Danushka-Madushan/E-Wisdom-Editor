import StudentIogo from '../components/Icons/StudentIcon'
import SubscriptionIcon from '../components/Icons/SubscriptionIcon'
import CourseIcon from '../components/Icons/CourseIcon'
import VideoIcon from '../components/Icons/VideoIcon'
import DashboardIcon from '../components/Icons/DashboardIcon'

export const SidebarNavContent: {
  icon: (({ size }: { size: number}) => JSX.Element),
  text: string,
  route: `/${string}`
}[] = [
  {
    icon: DashboardIcon,
    text: 'Dashboard',
    route: '/'
  },
  {
    icon: StudentIogo,
    text: 'Students',
    route: '/students'
  },
  {
    icon: SubscriptionIcon,
    text: 'Subscriptions',
    route: '/subscriptions'
  },
  {
    icon: CourseIcon,
    text: 'Courses',
    route: '/courses'
  },
  {
    icon: VideoIcon,
    text: 'Videos',
    route: '/videos'
  },
]

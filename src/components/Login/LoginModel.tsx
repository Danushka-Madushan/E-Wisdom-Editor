import { Avatar, Card, CardBody, Spinner, Tab, Tabs } from '@nextui-org/react'
import { ContactRound, PenTool } from 'lucide-react'
import LoginForm from './LoginForm'
import { Key, useState } from 'react'

const LoginModel = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const [NoNActiveTab, SetNoNActiveTab] = useState<Array<'student' | 'editor'>>([])
  const [ActiveTab, SetActiveTab] = useState<Key>('student')

  const onFormChange = (target: HTMLInputElement) => {
    const { type, value } = target
    setFormState({
      ...formState,
      [type]: value
    })
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Card className="max-w-full w-[340px]">
        <CardBody className="overflow-hidden">
          <div className='w-full flex flex-col items-center gap-y-2 justify-center my-4'>
            <Avatar isBordered color="primary" radius="full" showFallback fallback={
              <Spinner color="default" size="lg" />
            } className="w-20 h-20 text-large" src="/svg/logo.svg" />
            <span className='text-xl text-gray-700'>E Wisdom Institiute</span>
          </div>
          <Tabs
            disabledKeys={NoNActiveTab}
            onSelectionChange={SetActiveTab}
            color="primary"
            variant="bordered"
            fullWidth
            size="md"
            aria-label="Tabs form"
          >
            <Tab key="student" title={
              <div className="flex items-center space-x-2">
                <ContactRound />
                <span>Student</span>
              </div>}
            >
              <LoginForm email={formState.email} password={formState.password} onFormChange={onFormChange} ActiveTab={ActiveTab} SetNoNActiveTab={SetNoNActiveTab} />
            </Tab>
            <Tab key="editor" title={
              <div className="flex items-center space-x-2">
                <PenTool />
                <span>Editor</span>
              </div>}
            >
              <LoginForm email={formState.email} password={formState.password} onFormChange={onFormChange} ActiveTab={ActiveTab} SetNoNActiveTab={SetNoNActiveTab} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  )
}

export default LoginModel

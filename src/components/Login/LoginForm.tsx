import { Button, Input, Link, Spinner } from '@nextui-org/react'
import { Dispatch, Key, SetStateAction, useState } from 'react'

const TabKeys = ['student', 'editor'] as const

interface LoginFormProps {
  email: string,
  password: string,
  ActiveTab: Key,
  SetNoNActiveTab: Dispatch<SetStateAction<("student" | "editor")[]>>,
  onFormChange: (target: HTMLInputElement) => void
}

const LoginForm = ({ email, password, onFormChange, ActiveTab, SetNoNActiveTab }: LoginFormProps) => {
  const [isLoading, setLoading] = useState(false)

  return (
    <form className="flex flex-col gap-4">
      <Input onChange={({ target }) => onFormChange(target)} value={email} isRequired label="Email" size='lg' placeholder="Enter your email" type="email" />
      <Input onChange={({ target }) => onFormChange(target)} value={password} isRequired label="Password" size='lg' placeholder="Enter your password" type="password" />
      {ActiveTab === 'student' ? <p className="text-center text-small">
        Need to create an account?{" "}
        <Link size="sm" className='cursor-pointer'>
          Sign up
        </Link>
      </p> : false}
      <div className="flex gap-2 justify-end">
        <Button onClick={() => setLoading((prev) => {
          if (!prev) {
            SetNoNActiveTab(TabKeys.filter(item => item !== ActiveTab))
            return !prev
          }
          SetNoNActiveTab([])
          return !prev
        })} className='text-base' fullWidth color="primary">
          {isLoading ? <Spinner color="default" size="md" /> : 'Login'}
        </Button>
      </div>
    </form>
  )
}

export default LoginForm

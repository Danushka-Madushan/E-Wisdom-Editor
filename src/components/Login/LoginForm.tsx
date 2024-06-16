import { Button, Input, Link, Spinner, useDisclosure } from '@nextui-org/react'
import { ChangeEvent, Dispatch, Key, SetStateAction, useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import SigninModel from '../Signin/SigninModel'

const TabKeys = ['student', 'editor'] as const

interface LoginFormProps {
  email: string,
  password: string,
  ActiveTab: Key,
  SetNoNActiveTab: Dispatch<SetStateAction<("student" | "editor")[]>>,
  setInvalid: Dispatch<SetStateAction<{
    email: boolean;
    password: boolean;
  }>>,
  isInvalid: { email: boolean; password: boolean }
  onFormChange: (target: HTMLInputElement) => void
}

const InputValidateFunctions: {
  [key: string]: {
    validator: (content: string) => boolean
    errorMessage: string
  }
} = {
  'email': {
    validator: (content) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content),
    errorMessage: 'Invalid email address',
  },
  'password': {
    validator: (content) => content.length < 8,
    errorMessage: 'Password should have at least 8 characters',
  },
}

const LoginForm = ({ email, password, onFormChange, ActiveTab, SetNoNActiveTab, isInvalid, setInvalid }: LoginFormProps) => {
  const [isLoading, setLoading] = useState(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { login } = useAuth()
  const Navigate = useNavigate()

  const onAuthenticate = () => {
    if (!email || !password) {
      return toast.error('All Fields Required!');
    }

    if (!isInvalid.email && !isInvalid.password) {
      console.log(email, password, ActiveTab);
      setLoading((prev) => {
        if (prev) {
          SetNoNActiveTab([]);
          return false;
        } else {
          SetNoNActiveTab(TabKeys.filter(item => item !== ActiveTab));
          if (login) {
            login();
            Navigate('/', { replace: true })
            toast.success('Successfully Authenticated');
          }
          return true;
        }
      });
    } else {
      return toast.error('Invalid email or password!');
    }
  };

  const validate = useCallback(
    (value: string, type: string) => {
      const isValid = InputValidateFunctions[type].validator(value)
      setInvalid((prev) => ({ ...prev, [type]: isValid }))
      return isValid
    },
    [setInvalid]
  )

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { type, value } = event.target
      validate(value, type)
      onFormChange(event.target)
    },
    [validate, onFormChange]
  )

  return (
    <form className="flex flex-col gap-4">
      <Input
        onChange={handleChange}
        value={email} isRequired
        isInvalid={isInvalid.email}
        errorMessage={isInvalid.email ? InputValidateFunctions['email'].errorMessage : undefined}
        label="Email"
        size='lg'
        placeholder="Enter your email"
        type="email"
      />
      <Input
        onChange={handleChange}
        value={password}
        isRequired
        errorMessage={isInvalid.password ? InputValidateFunctions['password'].errorMessage : undefined}
        isInvalid={isInvalid.password}
        label="Password"
        size='lg'
        placeholder="Enter your password"
        type="password"
      />
      {ActiveTab === 'student' ? <p className="text-center text-small">
        Need to create an account?{" "}
        <Link size="sm" className='cursor-pointer' onPress={onOpen}>
          Sign up
          <SigninModel isOpen={isOpen} onOpenChange={onOpenChange} />
        </Link>
      </p> : false}
      <div className="flex gap-2 justify-end">
        <Button onPress={onAuthenticate} className='text-base' fullWidth color="primary">
          {isLoading ? <Spinner color="default" size="md" /> : 'Login'}
        </Button>
      </div>
    </form>
  )
}

export default LoginForm

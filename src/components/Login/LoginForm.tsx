import { Button, Input } from '@nextui-org/react'

interface LoginFormProps {
  email: string,
  password: string,
  onFormChange: (target: HTMLInputElement) => void
}

const LoginForm = ({ email, password, onFormChange }: LoginFormProps) => {
  return (
    <form className="flex flex-col gap-4">
      <Input onChange={({ target }) => onFormChange(target)} value={email} isRequired label="Email" size='lg' placeholder="Enter your email" type="email" />
      <Input onChange={({ target }) => onFormChange(target)} value={password} isRequired label="Password" size='lg' placeholder="Enter your password" type="password" />
      <div className="flex gap-2 justify-end">
        <Button className='text-base' fullWidth color="primary">
          Login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm

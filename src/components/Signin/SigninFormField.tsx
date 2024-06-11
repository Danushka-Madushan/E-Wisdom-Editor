import { Input } from '@nextui-org/react';
import { ChangeEvent, Dispatch, memo, SetStateAction, useCallback, useMemo, useState } from 'react';
import { InputFieldsIds, iSigninFormContent } from './SigninModel';

interface SigninFormFieldProps {
  EndIcon: ({ size }: { size: number }) => JSX.Element
  id: InputFieldsIds,
  setFormContent: Dispatch<SetStateAction<iSigninFormContent>>,
  label: string,
  placeholder: string,
  ReportInputFieldStatus: Dispatch<SetStateAction<{ [key in InputFieldsIds]: boolean}>>
}

const InputValidateFunctions: { [key in InputFieldsIds]: {
  validator: (content: string) => boolean
  errorMessage: string
} } = {
  'name': {
    validator: (content) => content.length < 4,
    errorMessage: 'Name too short',
  },
  'email': {
    validator: (content) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content),
    errorMessage: 'Invalid email address',
  },
  'phone': {
    validator: (content) => !/^0\d{9}$/.test(content),
    errorMessage: 'Phone number invalid',
  },
  'password': {
    validator: (content) => content.length < 8,
    errorMessage: 'Password should have at least 8 characters',
  },
}

const SigninFormField = ({ EndIcon, id, setFormContent, label, placeholder, ReportInputFieldStatus }: SigninFormFieldProps) => {
  const [isInvalid, setInvalid] = useState(false)

  const validate = useCallback(
    (value: string) => {
      const isValid = InputValidateFunctions[id].validator(value)
      setInvalid(isValid)
      ReportInputFieldStatus((prev) => ({...prev, [id]: !isValid }))
      return isValid
    },
    [id, ReportInputFieldStatus]
  )

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target
      validate(value)
      setFormContent((prevContent) => ({ ...prevContent, [id]: value }))
    },
    [validate, setFormContent]
  )

  const EndIconMemoized = useMemo(() => memo(EndIcon), [EndIcon])

  return (
    <Input
      endContent={<EndIconMemoized size={28} />}
      id={id}
      onChange={handleChange}
      size='lg'
      type={id === 'password' ? 'password' : 'text'}
      isRequired
      isInvalid={isInvalid}
      errorMessage={isInvalid ? InputValidateFunctions[id].errorMessage : undefined}
      label={label}
      color='primary'
      placeholder={placeholder}
      variant="bordered"
    />
  )
}

export default SigninFormField

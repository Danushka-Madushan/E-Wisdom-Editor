import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { Fragment } from 'react/jsx-runtime';
import SigmaIogo from '../Icons/SigmaIcon';
import NameCardIcon from '../Icons/NameCardIcon';
import PhoneIcon from '../Icons/PhoneIcon';
import EmailIcon from '../Icons/EmailIcon';
import LockIcon from '../Icons/LockIcon';
import { useState } from 'react';
import SigninFormField from './SigninFormField';
import toast from 'react-hot-toast';
import SpinnerIcon from '../Icons/SpinnerIcon';

interface SigninModelProps {
  isOpen: boolean,
  onOpenChange: () => void
}

const InputFields = [
  {
    label: 'Name',
    id: 'name',
    placeholder: 'Full Name',
    endContent: NameCardIcon
  },
  {
    label: 'Phone',
    id: 'phone',
    placeholder: 'Phone Number',
    endContent: PhoneIcon
  },
  {
    label: 'Email',
    id: 'email',
    placeholder: 'Email Address',
    endContent: EmailIcon
  },
  {
    label: 'Password',
    id: 'password',
    placeholder: 'Password',
    endContent: LockIcon
  }
] as const

export type InputFieldsIds = typeof InputFields[number]['id'];

export interface iSigninFormContent {
  name?: string,
  phone?: string,
  email?: string,
  password?: string
}

const InitialFieldStatus = {
  email: false,
  name: false,
  password: false,
  phone: false
}

const SigninModel = ({ isOpen, onOpenChange }: SigninModelProps) => {
  const [formContent, setFormContent] = useState<iSigninFormContent>({})
  const [InputFieldStatus, setInputFieldStatus] = useState<{ [key in InputFieldsIds]: boolean }>(InitialFieldStatus)

  /* isLoading */
  const [isLoading] = useState(false)

  return (
    <Fragment>
      <Modal size='sm' isOpen={isOpen} onOpenChange={() => {
        /* Clear InputField States */
        setFormContent({})
        setInputFieldStatus(InitialFieldStatus)
        onOpenChange()
      }} placement='center' backdrop='blur' isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <Fragment>
              <ModalHeader className="flex justify-center items-center gap-x-2"><SigmaIogo size={30} />Student Registration</ModalHeader>
              <ModalBody>
                {
                  InputFields.map(({ endContent: EndIcon, label, placeholder, id }, i) => {
                    return <SigninFormField key={i} EndIcon={EndIcon} id={id} label={label} placeholder={placeholder} setFormContent={setFormContent} ReportInputFieldStatus={setInputFieldStatus} />
                  })
                }
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" className='w-20' onPress={() => {
                  if (Object.values(InputFieldStatus).every(value => value)) {
                    console.log(formContent, InputFieldStatus);
                    return onClose()
                  }
                  return toast.error('All Fields Required!')
                }}>
                  { isLoading ? <SpinnerIcon size={22} /> : 'Register'}
                </Button>
              </ModalFooter>
            </Fragment>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
}

export default SigninModel

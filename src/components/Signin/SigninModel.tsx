import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
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
import useAxios from '../../hooks/useAxios';
import Confirmation from './Confirmation';


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

  /* Request */
  const { isLoading, request } = useAxios()
  const { email, name, password, phone } = formContent
  const [confirm_mail, setConfirmMail] = useState(email)

  /* Confirmation */
  const { isOpen: ConfirmationisOpen, onOpen: ConfirmationonOpen, onOpenChange: ConfirmationonOpenChange } = useDisclosure();

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
                <Button color="primary" className='w-20' onPress={async () => {
                  if (Object.values(InputFieldStatus).every(value => value)) {
                    const { success } = await request({
                      endpoint: '/auth/signup',
                      method: 'POST',
                      data: { name, email, phone: phone?.slice(1), password }
                    })
                    if (success) {
                      setConfirmMail(email)
                      onClose();
                      ConfirmationonOpen();
                      return
                    }
                  }
                  return toast.error('All Fields Required!')
                }}>
                  {isLoading ? <SpinnerIcon size={22} /> : 'Register'}
                </Button>
              </ModalFooter>
            </Fragment>
          )}
        </ModalContent>
      </Modal>
      <Confirmation isOpen={ConfirmationisOpen} email={confirm_mail} onOpenChange={ConfirmationonOpenChange} />
    </Fragment>
  );
}

export default SigninModel

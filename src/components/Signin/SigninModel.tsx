import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { Fragment } from 'react/jsx-runtime';
import SigmaIogo from '../Icons/SigmaIcon';
import NameCardIcon from '../Icons/NameCardIcon';
import PhoneIcon from '../Icons/PhoneIcon';
import EmailIcon from '../Icons/EmailIcon';
import LockIcon from '../Icons/LockIcon';

interface SigninModelProps {
  isOpen: boolean,
  onOpenChange: () => void
}

const InputFields = [
  {
    label: 'Name',
    placeholder: 'Full Name',
    endContent: NameCardIcon
  },
  {
    label: 'Phone',
    placeholder: 'Phone Number',
    endContent: PhoneIcon
  },
  {
    label: 'Email',
    placeholder: 'Email Address',
    endContent: EmailIcon
  },
  {
    label: 'Password',
    placeholder: 'Password',
    endContent: LockIcon
  }
]

const SigninModel = ({ isOpen, onOpenChange }: SigninModelProps) => {
  return (
    <Fragment>
      <Modal size='xl' isOpen={isOpen} onOpenChange={onOpenChange} placement='center' backdrop='blur' isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <Fragment>
              <ModalHeader className="flex justify-center items-center gap-x-2"><SigmaIogo size={30} />Student Registration</ModalHeader>
              <ModalBody>
                {InputFields.map(({ endContent: EndIcon, label, placeholder }, i) =>
                  <Input
                    key={i}
                    endContent={
                      <EndIcon size={28} />
                    }
                    size='lg'
                    isRequired
                    label={label}
                    color='primary'
                    placeholder={placeholder}
                    variant="bordered"
                  />)}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Register
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

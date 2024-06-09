import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import toast from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';

interface LogoutModelProps {
  isOpen: boolean,
  onClose: () => void
}

const LogoutModel = ({ isOpen, onClose }: LogoutModelProps) => {
  const AuthContext = useAuth()

  return (
    <Modal size='xs' placement='center' backdrop='blur' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Confirmation</ModalHeader>
            <ModalBody>
              <span className='text-base font-[Roboto]'>Are you sure you want to log out?</span>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                Cancel
              </Button>
              <Button color="danger" variant="light" onPress={() => {
                onClose();
                AuthContext.logout && AuthContext.logout()
                toast.success('Success')
              }}>
                Confirm
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default LogoutModel

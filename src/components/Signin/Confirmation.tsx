import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { Fragment } from 'react/jsx-runtime';

interface ConfirmationProps {
  isOpen: boolean,
  onOpenChange: () => void,
  email?: string
}

const Confirmation = ({ isOpen, onOpenChange, email }: ConfirmationProps) => {
  return (
    <Fragment>
      <Modal isKeyboardDismissDisabled isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(selfClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">Account Confirmation</ModalHeader>
              <ModalBody className='flex items-center flex-col gap-y-4'>
                <svg height="80" viewBox="0 0 58 58" width="80" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fillRule="evenodd"><g id="027---Email-Tick"><path id="Path" d="m54 19.28 2.49 1.97c.9525311.7598935 1.5080969 1.9114968 1.51 3.13v29.62c0 2.209139-1.790861 4-4 4h-50c-2.209139 0-4-1.790861-4-4v-29.62c.00190308-1.2185032.55746891-2.3701065 1.51-3.13l2.49-1.97z" fill="#f29c1f" /><path id="Path" d="m4 47.74v-45.74c.0032948-1.10320187.89679813-1.9967052 2-2h46c1.1032019.0032948 1.9967052.89679813 2 2v44.7z" fill="#ecf0f1" /><circle id="Oval" cx="29" cy="18" fill="#4fba6f" r="14" /><path id="Path" d="m26 26c-.530609.0009915-1.039641-.2099652-1.414-.586l-4-4c-.7579444-.7847578-.7471047-2.0321696.0243628-2.8036372.7714676-.7714675 2.0188794-.7823072 2.8036372-.0243628l2.586 2.585 8.586-8.585c.5021489-.5199132 1.2457558-.7284252 1.9450146-.5453943.6992589.1830309 1.2453488.7291208 1.4283797 1.4283797.1830309.6992588-.0254811 1.4428657-.5453943 1.9450146l-10 10c-.374359.3760348-.883391.5869915-1.414.586z" fill="#ecf0f1" /><path id="Path" d="m58.0000352 24.91-.0000352 29.09c.0047904 1.1352797-.4798688 2.2175639-1.33 2.97l-18.86-14.66z" fill="#f0c419" /><path id="Path" d="m56.67 56.97c-.7317158.6621679-1.6831496 1.0292004-2.67 1.03h-50c-.98685044-.0007996-1.93828417-.3678321-2.67-1.03l18.86-14.66 7.57-5.88c.7283967-.5700405 1.7516033-.5700405 2.48 0l7.57 5.88z" fill="#f3d55b" /><path id="Path" d="m20.19 42.31-18.86 14.66c-.85013117-.7524361-1.33479044-1.8347203-1.33-2.97l-.00003518-29.09z" fill="#f0c419" /></g></g></svg>
                <span className='text-center'>Thanks! an E-mail confirmation has been sent to <span className='font-bold'>{email}</span>. Please click on the email link to verify your registratoin</span>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant='flat' onPress={selfClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default Confirmation

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";

export default function FAQs() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Link
        className="text-white cursor-pointer transition duration-300 ease-in-out hover:text-blue-gray-400 font-reemkufi"
        onPress={onOpen}
      >
        Contact Us
      </Link>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        isKeyboardDismissDisabled
        hideCloseButton
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <b className="flex justify-center m-3 font-reemkufi">Contact Us</b>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col justify-start ml-12 font-lato">
                  <p>Phone: +123 4546 2342</p>
                  <p>Email: xyz@jmail.com</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="text-black hover:text-danger font-reemkufi"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

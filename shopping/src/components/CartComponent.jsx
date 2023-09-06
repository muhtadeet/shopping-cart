import {Badge, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import {HeartIcon} from './HeartIcon';

export default function CartComponent() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <Badge content="1" color='danger'>
          <Button onPress={onOpen} isIconOnly color="transparent" className="text-black transition duration-300 ease-in-out hover:text-blue-gray-400">
            <HeartIcon />
          </Button> 
          <Modal 
        className="sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl"
        size="md"
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
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"><b className="flex justify-center m-3">Cart</b></ModalHeader>
              <ModalBody>
                <div className="flex flex-col justify-center">
                <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="image"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          lorem
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
        </a>
      </CardBody>
    </Card>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="text-black hover:text-danger" color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </Badge>
    </div>
  )
}

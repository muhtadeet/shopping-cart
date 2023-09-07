import {Badge, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip} from "@nextui-org/react";
import {HeartIcon} from './HeartIcon';
import { useCart } from "react-use-cart";
import { list } from "./Data";
import { Minus, Plus } from './Signs'

export default function CartComponent() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) {return (
    <>
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
      <div className="flex justify-center">
        <h1>Your Cart is Empty</h1>
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
</>
)}

  else{
  return (
    <div>
      <Badge content="" color='danger'>
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
                <h5>Cart ({totalUniqueItems} total items: ({totalItems}))</h5>
                <Table>
                <TableHeader>
                  <TableColumn>Item</TableColumn>
                  <TableColumn>Name</TableColumn>
                  <TableColumn>Price</TableColumn>
                  <TableColumn>Quantity</TableColumn>
                </TableHeader>
                  <TableBody>
                    {list.map((item, index) => {
                      return(
                      <TableRow key={index}>
                        <TableCell>
                          <img src={item.img} className="h-[6rem]"/>
                        </TableCell>
                        <TableCell>
                          {item.title}
                        </TableCell>
                        <TableCell>
                          ${item.price}
                        </TableCell>
                        <TableCell>
                        <Chip
                          startContent={<Button isIconOnly className="h-[40px] w-[40px] font-sans" color="transparent" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} ><Minus/></Button>}
                          className="p-5 px-0 bg-blue-gray-400"
                          variant="shadow"
                          endContent={<Button isIconOnly className="h-[40px] w-[40px] font-sans" color="transparent" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} ><Plus/></Button>}
                        >
                          <p className="p-1 mx-2 text-default-50">{item.quantity}</p>
                        </Chip>
                        <Button className="h-[40px] w-[40px] font-sans" color="transparent" onClick={() => removeItem(item.id)} >Remove Item</Button>
                        </TableCell>
                      </TableRow>
                    )})}
                  </TableBody>
                </Table>
                </div>
              </ModalBody>
              <ModalFooter>
                <h2>Total Price: ${cartTotal}</h2>
                <Button className="text-black hover:text-danger" color="danger" variant="light" onClick={() => emptyCart()}>
                  Clear Cart
                </Button>
                <Button className="text-black hover:text-danger" color="danger" variant="light">
                  Checkout
                </Button>
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
}}

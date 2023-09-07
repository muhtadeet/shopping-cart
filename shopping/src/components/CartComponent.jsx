import {Badge, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Image} from "@nextui-org/react";
import {HeartIcon} from './HeartIcon';
import { useCart } from "react-use-cart";
import { list } from "./Data";
import { Minus, Plus } from './Signs'
import { useState } from "react";
import { useParams } from "react-router";

export default function CartComponent() {
  const { id } = useParams();
  const item = list.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * list[0].price;
  };
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {
    isEmpty,
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
          <Button variant="shadow" className="h-[40px] w-[90px] font-sans ml-5 bg-red-500 text-white hover:text-red-500 hover:bg-transparent hover:border-red-500 hover:border-2" onPress={onClose}>
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
          scrollBehavior="inside" 
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
                <Table>
                <TableHeader>
                  <TableColumn className="flex justify-center pt-3 pb-0">Item</TableColumn>
                  <TableColumn className="justify-center">Name</TableColumn>
                  <TableColumn className="justify-center">Price</TableColumn>
                  <TableColumn className="flex justify-center pt-3 pb-0">Quantity</TableColumn>
                </TableHeader>
                  <TableBody>
                    {item.map((e, index) => {
                      return(
                      <TableRow key={index}>
                        <TableCell>
                          <Image src={e.img} alt="card-image" className="h-[6rem]"/>
                        </TableCell>
                        <TableCell>
                          {e.title}
                        </TableCell>
                        <TableCell>
                          ${e.price}
                        </TableCell>
                        <TableCell className="pl-6 pr-0">
                        <Chip
                          startContent={<Button isIconOnly className="h-[40px] w-[40px] font-sans" color="transparent"  onClick={decrease} ><Minus/></Button>}
                          className="p-5 px-0 flex justify-center bg-blue-gray-400"
                          variant="shadow"
                          endContent={<Button isIconOnly className="h-[40px] w-[40px] font-sans" color="transparent"  onClick={increase} ><Plus/></Button>}
                        >
                          <p className="p-1 mx-2 text-default-50">{quantity}</p>
                        </Chip>
                        <Button className="m-5 ml-2 h-[40px] w-[100px] flex justify-center font-sans" color="danger" onClick={() => removeItem(e.id)} >Remove Item</Button>
                        </TableCell>
                      </TableRow>
                    )})}
                  </TableBody>
                </Table>
                </div>
                <h2 className="flex mt-3 justify-center">Total Price: ${calcPrice(quantity)}</h2>
              
              
                <div className="flex flex-row justify-between m-5">
                <Button variant="bordered" className="h-[40px] w-[90px] font-sans text-amber-600 border-amber-600 border-2 hover:bg-amber-600 hover:text-white" onClick={() => emptyCart()}>
                  Clear Cart
                </Button>
                <Button className="ml-6 text-success border-2 border-success hover:text-white hover:bg-success" variant="bordered">
                  Checkout
                </Button>
                <Button variant="shadow" className="h-[40px] w-[90px] font-sans ml-5 bg-red-500 text-white hover:text-red-500 hover:bg-transparent hover:border-red-500 hover:border-2" onPress={onClose}>
                  Close
                </Button>
                </div>
                </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      </Badge>
    </div>
  )
}}

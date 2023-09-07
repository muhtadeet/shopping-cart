import { createContext, useState } from "react";
import { list } from "./Data";
import Navmenu from "./Navmenu";
import FooterComp from './FooterComp'
import './ProdPage.css'
import {
  Card,
  CardHeader,
  CardBody,
  Typography, Carousel} from "@material-tailwind/react";
import { useParams } from "react-router";
import { Button, Chip } from "@nextui-org/react";
import {Plus} from './Signs'
import {Minus} from './Signs'
import { useCart } from 'react-use-cart'

export const CartContext = createContext();

export default function ProdPage() {
  const { id } = useParams();
  const item = list.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [image] = useState(item[0].img);
  const [image2] = useState(item[0].img2);
  const [image3] = useState(item[0].img3);

  // const { addToCart } = useContext(CartContext);
  const { addItem } = useCart();

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
    return quantity * item[0].price;
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };
  return (
    <>
    <Navmenu />
    <div className="sm:min-h-[70vh]">
    <div className='p-5'>
        <div
          onAnimationEnd={() => setNotify(false)}
          className={`notify ${notify ? "slide-in" : ""}`}
        >
          <p>Item has been added to the cart &nbsp; 🛒</p>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Card className=" sm:w-[30rem] md:w-full max-w-4xl mx-5 flex-col sm:flex-row">
          <CardHeader
            shadow={true}
            floated={true}
            className="m-0 sm:w-2/5 shrink-0 md:block rounded-r-none"
          >
            <Carousel autoplay loop autoplayDelay={2000}
        className="rounded-lg w-lg max-w-4xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-3 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
              src={image}
              alt="card-image"
              className="h-full w-full object-cover"
            />
        <img
              src={image2}
              alt="card-image"
              className="h-full w-full object-cover"
            />
        <img
              src={image3}
              alt="card-image"
              className="h-full w-full object-cover"
            />
      </Carousel>
          </CardHeader>
          <CardBody className="sm:ml-16">
            <Typography variant="h2" color="blue-gray" className="mb-2 flex justify-center">
            {item[0].title}
            </Typography>
            <Typography className="flex justify-center m-5">
              {item[0].desc}
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-2 mt-10 flex justify-center">
                Quantity
            </Typography>
                <div className="flex flex-row justify-center">
                <Chip
                  startContent={<Button isIconOnly className="h-[40px] w-[40px] font-sans" color="transparent" onClick={decrease}><Minus/></Button>}
                  className="p-5 px-0 bg-blue-gray-400"
                  variant="shadow"
                  endContent={<Button isIconOnly className="h-[40px] w-[40px] font-sans" color="transparent" onClick={increase}><Plus/></Button>}
                >
                  <p className="p-1 mx-2 text-default-50">{quantity}</p>
                </Chip>
                </div>
                <Typography variant="h5" color="blue-gray" className=" p-7 flex justify-center my-5">
                Price: ${calcPrice(quantity)}
                </Typography>
                <div className="flex justify-center">
                <Button variant="bordered" className="h-[40px] w-[90px] font-sans text-amber-600 border-amber-600 border-2 hover:bg-amber-600 hover:text-white"
                  onClick={() => {
                    addItem(item[0]);
                    showNotify();
                  }}
                >
                  Add to Cart
                </Button>
                <Button variant="shadow" className="h-[40px] w-[90px] font-sans ml-5 bg-red-500 text-white hover:text-red-500 hover:bg-transparent hover:border-red-500 hover:border-2">Buy Now</Button>
                </div>
          </CardBody>
        </Card>
      </div>
      </div>
              
      <FooterComp />
    </>
  )
}


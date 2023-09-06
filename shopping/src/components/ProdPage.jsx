import { createContext, useContext, useState } from "react";
import { list } from "./Data";
import Navmenu from "./Navmenu";
import FooterComp from './FooterComp'
import './ProdPage.css'
import {
  Card,
  CardHeader,
  CardBody,
  Typography} from "@material-tailwind/react";
import { useParams } from "react-router";
import { Button } from "@nextui-org/react";

export const CartContext = createContext();

export default function ProdPage() {
  const { id } = useParams();
  const item = list.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [image] = useState(item[0].img);

  const { addToCart } = useContext(CartContext);

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
        <Card className=" w-[30rem] md:w-full max-w-4xl mx-5 flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 md:block rounded-r-none"
          >
            <img
              src={image}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
            {item[0].title}
            </Typography>
            <div className="">
            <Typography variant="h6" color="blue-gray" className="mb-2">
                Quantity
            </Typography>
                <div className="flex flex-row">
                  <Button isIconOnly className="h-[30px] w-[30px] font-sans" color="warning" onClick={decrease}>-</Button>
                  <p className="p-1 mx-3">{quantity}</p>
                  <Button isIconOnly className="h-[30px] w-[30px] font-sans" color="warning" onClick={increase}>+</Button>
                </div>
                <Typography variant="h5" color="blue-gray" className="my-5">
                ${calcPrice(quantity)}0
                </Typography>
              </div>
              <div className="">
                <Button className="h-[40px] w-[90px] font-sans text-white" color="success"
                  onClick={() => {
                    addToCart(item[0]);
                    showNotify();
                  }}
                >
                  Add to Cart
                </Button>
                <Button className="h-[40px] w-[90px] font-sans ml-5" color="danger">Buy Now</Button>
              </div>
          </CardBody>
        </Card>
      </div>
      </div>
              
      <FooterComp />
    </>
  )
}


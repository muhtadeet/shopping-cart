import Navmenu from "./Navmenu";
import Carousel from './Carouselcomp'
import BannerComp from './BannerComp'
import BannerComp2 from './BannerComp2'
import FooterComp from './FooterComp'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Home() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <div>
      <Navmenu />
      <b className="flex justify-center text-xl m-3">Trending now</b>

      <Carousel/>
      
      <b className="flex justify-center text-xl m-7">Popular Products</b>
      <div className="flex justify-center">
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-7 xl:gap-16">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="max-w-[200px] w-[170px] object-cover h-[180px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <BannerComp/>

        
      
      <BannerComp2/>
      
      <FooterComp/>
    </div>
  )
}

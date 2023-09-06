import Navmenu from "./Navmenu";
import Carousel from './Carouselcomp'
import BannerComp from './BannerComp'
import BannerComp2 from './BannerComp2'
import FooterComp from './FooterComp'
import { list } from "./Data";
import { list2 } from "./Data";
import { Link } from 'react-router-dom'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Home() {

  return (
    <div>
      <Navmenu />
      <b className="flex justify-center text-xl m-3">Trending now</b>

      <Carousel/>
      
      <b className="flex justify-center text-xl m-7">Popular Products</b>
      <div className="flex justify-center">
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-7 xl:gap-16">
          {list.map((item, index) => (
            <div key={index}>
            <Link
            onClick={() => window.top(0, 0)}
            to={`/product/${item.id}`}
          >
            <Card shadow="sm" isHoverable>
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
                <p className="text-default-500">${item.price}</p>
              </CardFooter>
            </Card>
            </Link>
            </div>
          ))}
        </div>
      </div>

      <BannerComp/>

      <b className="flex justify-center text-xl m-7">You might also like</b>
      <div className="flex justify-center">
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-7 xl:gap-16">
          {list2.map((item, index) => (
            <div key={index}>
            <Link
            onClick={() => window.top(0, 0)}
            to={`/product/${item.id}`}
          >
            <Card shadow="sm" isPressable isHoverable>
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
                <p className="text-default-500">${item.price}</p>
              </CardFooter>
            </Card>
            </Link>
            </div>
          ))}
        </div>
      </div>
      
      <BannerComp2/>
      
      <FooterComp/>
    </div>
  )
}

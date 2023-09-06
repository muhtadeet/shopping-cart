import {Tabs, Tab, Card, CardBody, Image, CardFooter} from "@nextui-org/react";
import Navmenu from "./Navmenu";
import FooterComp from './FooterComp'
import { list } from './Data'
import { listE } from './Data'
import { listS } from './Data'
import { Link } from 'react-router-dom'

export default function Categories() {

  return (
    <div>
      <Navmenu/>

      <b className="flex justify-center text-xl m-7">Categories</b>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl mx-5 flex-col sm:min-h-[58vh]">
          <Tabs>
            
              <Tab key="all" title="All">
                <div className="flex justify-center">
                  <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-7 xl:gap-16">
                    {list.map((item, index) => (
                      <div key={index}>
                      <Link
                      onClick={() => window.top(0, 0)}
                      to={`/product/${item.id}`}
                    >
                      <Card className="flex justify-start" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
              </Tab>
              <Tab key="electronics" title="Electronics">
                <div className="flex justify-center">
                  <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-7 xl:gap-16">
                    {listE.map((item, index) => (
                      <div key={index}>
                      <Link
                      onClick={() => window.top(0, 0)}
                      to={`/product/${item.id}`}
                    >
                      <Card className="flex justify-start" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
              </Tab>
              <Tab key="skinCare" title="Skin Care">
                <div className="flex justify-center">
                  <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-7 xl:gap-16">
                    {listS.map((item, index) => (
                      <div key={index}>
                      <Link
                      onClick={() => window.top(0, 0)}
                      to={`/product/${item.id}`}
                    >
                      <Card className="flex justify-start" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
              </Tab>

          </Tabs>
        </div>
      </div>
      <FooterComp/>
    </div>  
  );
}

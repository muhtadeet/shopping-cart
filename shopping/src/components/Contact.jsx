import Navmenu from './Navmenu'
import FooterComp from './FooterComp'
import {Accordion, AccordionItem, Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react"

export default function Contact() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div>
      <Navmenu/>
      <b className="flex justify-center text-xl m-7">FAQs</b>
        <div className='flex justify-center m-5 xl:mx-24  2xl:mx-80'>
            <Accordion
              variant="shadow"
              motionProps={{
                variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
                },
              }}
            >
              <AccordionItem key="1" aria-label="Accordion 1" title="Question 1">
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Question 2">
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 3" title="Question 3">
                {defaultContent}
              </AccordionItem>
            </Accordion>
        </div>
        <b className="flex justify-center text-xl mt-16 mb-7">Contact</b>
        <div className='flex justify-center m-5'>
        <Card className="max-w-[700px] px-10">
          <CardHeader className="flex gap-3">
          <Image
            alt="logo"
            height={40}
            radius="sm"
            src=""
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">A2Z</p>
            <p className="text-small text-default-500">a2z.org</p>
          </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>Phone: +123 213 4038</p>
          </CardBody>
          <Divider/>
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href=""
            >
              Email us
            </Link>
          </CardFooter>
        </Card>
        </div>
        <FooterComp/>
      </div>
  )
}

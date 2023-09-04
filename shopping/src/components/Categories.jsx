import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Navmenu from "./Navmenu";
import FooterComp from './FooterComp'

export default function Categories() {
  let tabs = [
    {
      id: "all",
      label: "All",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "electronics",
      label: "Electronics",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "skinCare",
      label: "Skin Care",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <div>
      <Navmenu/>
      <div className="flex justify-center h-[70vh]">
        <div className="w-full max-w-4xl mx-5 flex-col">
          <Tabs aria-label="Dynamic tabs" items={tabs}>
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <Card>
                  <CardBody>
                    {item.content}
                  </CardBody>
                </Card>  
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
      <FooterComp/>
    </div>  
  );
}

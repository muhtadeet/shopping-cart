import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, Link, Button} from "@nextui-org/react";

export default function App() {
  const menuItems = [
    "Products",
    "Categories",
  ];

  return (
    <Navbar shouldHideOnScroll className="p-3">
      <NavbarContent justify="start">
        <NavbarMenuToggle className="transition duration-300 ease-in-out hover:text-blue-gray-400"/>
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">A2Z</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">A2Z</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Cart
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="max-w-[40%] sm:max-w-sm z-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full pt-3 text-black transition duration-300 ease-in-out hover:text-blue-gray-400"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

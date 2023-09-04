import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, Link, Button} from "@nextui-org/react";

export default function Navmenu() {

  return (
    <Navbar isBordered shouldHideOnScroll className="p-3">
      <NavbarContent justify="start">
        <NavbarMenuToggle className="transition duration-300 ease-in-out hover:text-blue-gray-400"/>
      </NavbarContent>
      <NavbarContent className="pr:5 sm:pr-3 pb-3 gap-4" justify="center">
        <NavbarBrand>
        <Link
              className="w-full pt-3 text-black transition duration-300 ease-in-out hover:text-blue-gray-400"
              href="/home"
              size="lg"
            >
              <p className="font-bold text-inherit">A2Z</p>
            </Link>
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
          <NavbarMenuItem>
            <Link
              className="w-full pt-3 text-black transition duration-300 ease-in-out hover:text-blue-gray-400"
              href="/products"
              size="lg"
            >
              Products
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="w-full pt-3 text-black transition duration-300 ease-in-out hover:text-blue-gray-400"
              href="/categories"
              size="lg"
            >
              Categories
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="w-full pt-3 text-black transition duration-300 ease-in-out hover:text-blue-gray-400"
              href="/contact"
              size="lg"
            >
              Contact
            </Link>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import Cartmenu from "./CartComponent";

export default function Navmenu() {
  return (
    <Navbar isBordered shouldHideOnScroll className="p-3">
      <NavbarContent justify="start">
        <NavbarMenuToggle className="transition duration-300 ease-in-out hover:text-blue-gray-400" />
      </NavbarContent>
      <NavbarContent className="pr:5 sm:pr-0 pb-3 gap-4" justify="center">
        <NavbarBrand>
          <Link
            className="w-full pt-3 text-black transition duration-300 ease-in-out hover:text-blue-gray-400"
            href="/home"
            size="lg"
          >
            <p className="font-bold font-reemkufi text-inherit">BREEZE.</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Cartmenu />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="max-w-[40%] sm:max-w-sm z-10">
        <NavbarMenuItem className="mt-10">
          <Link
            className="w-full pt-3 font-reemkufi text-black transition duration-300 ease-in-out hover:text-blue-gray-400"
            href="/products"
            size="lg"
          >
            Products
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full pt-3 font-reemkufi mt-1 text-black transition duration-300 ease-in-out hover:text-blue-gray-400"
            href="/categories"
            size="lg"
          >
            Categories
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

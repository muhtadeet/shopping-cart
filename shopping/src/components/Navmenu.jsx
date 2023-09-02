import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarItem, NavbarMenuItem, NavbarMenu, Link} from "@nextui-org/react";
// import Logo from './Logo.jsx';

export default function Navmenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <Navbar isBordered isMenuOpen={isMenuOpen} 
              shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/home">
              {/* <Logo /> */}
              <p className="font-bold text-inherit">Name</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-3" justify="center">
          <NavbarItem>
            <Link href="/home" >
              <p className='font-abc p-10 text-[1.3rem] text-black transition ease-in-out delay-150 hover:text-gray-500 duration-300'>Home</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/photos">
              <p className='font-abc p-10 text-[1.3rem] text-black transition ease-in-out delay-150 hover:text-gray-500 duration-300'>Products</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/arts">
              <p className='font-abc p-10 text-[1.3rem] text-black transition ease-in-out delay-150 hover:text-gray-500 duration-300'>Arts</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact">
              <p className='font-abc p-10 text-[1.3rem] text-black transition ease-in-out delay-150 hover:text-gray-500 duration-300'>About</p>
            </Link>
          </NavbarItem>
        </NavbarContent>
  
        <NavbarMenu>
            <NavbarMenuItem>
              <Link href="/home" className='font-abc p-5 text-[1.3rem] text-black transition ease-in-out delay-150 hover:text-gray-500 duration-300'>
                Home
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/photos" className='font-abc p-5 text-[1.3rem] text-black transition ease-in-out delay-150 hover:text-gray-500 duration-300'>
                Photos
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/arts" className='font-abc p-5 text-[1.3rem] text-black transition ease-in-out delay-150 hover:text-gray-500 duration-300'>
                Arts
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/contact" className='font-abc p-5 text-[1.3rem] text-black transition ease-in-out delay-150 hover:text-gray-500 duration-300'>
              Contact
              </Link>
            </NavbarMenuItem>
        </NavbarMenu>
        
      </Navbar>
    )
}

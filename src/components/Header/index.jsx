import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Link } from "@nextui-org/react";
import React from 'react';


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar>
      <NavbarContent>
        {/* Render the NavbarMenuToggle only on smaller screens */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {/* Render the NavbarBrand */}
        <NavbarBrand>
          <p className="font-bold text-inherit">DevOpps</p>
        </NavbarBrand>
        {/* Render NavbarMenuToggle as the last item on larger screens */}
        <NavbarItem className="hidden sm:flex">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </NavbarItem>
        {/* Renders NavbarMenu only if menu is open */}
        {isMenuOpen ? (
          <NavbarContent>
            <NavbarItem>
              {/* You can render your menu items here */}
              {/* For example: */}
              <Link color="foreground" href="#">
                Test
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Test2
              </Link>
            </NavbarItem>
            {/* Add other menu items as needed */}
          </NavbarContent>
        ) : (
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                test1
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                test2
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                test3
              </Link>
            </NavbarItem>
          </NavbarContent>
        )}
      </NavbarContent>
    </Navbar>
  );
}

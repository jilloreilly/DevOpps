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
        <Link href="/" className="font-bold text-inherit">DevOpps</Link>
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
              <Link color="foreground" href="#">
                Test
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Test2
              </Link>
            </NavbarItem>
          </NavbarContent>
        ) : (
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="employer/search">
                Employer
              </Link>
            </NavbarItem>   
            <NavbarItem>
              <Link color="foreground" href="candidate">
                Candidate
              </Link>
            </NavbarItem>
          </NavbarContent>
        )}
      </NavbarContent>
    </Navbar>
  );
}

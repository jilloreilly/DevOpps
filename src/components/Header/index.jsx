import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { useState } from "react";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Job Search", link: "/job-results" },
    { name: "Employee Search", link: "/employer/search" },
    { name: "Create Profile", link: "/candidate/create-profile" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <div className="smhide md:block pr-3" justify="center">
        <NavbarBrand>
          {<Link href="/"><img className="h-28 w-auto" src='/images/logo.png' alt='devOpps' /><p className="font-bold text-foreground">devOpps</p></Link>}          
        </NavbarBrand>
      </div>

      <div className="md:hidden gap-4" justify="center">
        <NavbarBrand>
          {<Link href="/"><img className="h-20 w-auto" src='/images/logo.png' alt='devOpps' /><p className="font-bold text-foreground">devOpps</p></Link>}          
        </NavbarBrand>
      </div>

      <NavbarContent justify="end">
        <NavbarItem className="smhide md:flex" >
          <Link href="/employer/search" color="foreground">Employer</Link>
        </NavbarItem>
        <NavbarItem className="smhide md:flex">
          <Link href="/candidate/create-profile" color="foreground">Candidate</Link>
        </NavbarItem>
        <NavbarItem className="smhide md:flex">
          {<Link href="/job-results" color="foreground">Job Search</Link>}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "secondary" : index === menuItems.length - 1 ? "secondary" : "foreground"
              }
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

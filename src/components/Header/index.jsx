import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function MyHeader() {
  return (
    <>
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">DevOpps</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Test1
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Test2
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Test3
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Log In
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </>
  );
}

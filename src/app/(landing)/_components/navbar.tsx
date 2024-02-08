"use client";

import { Icons } from "@/components/icons";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Button,
  Link,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NextUINavbar
      className="fixed"
      position="static"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <NextLink href="/">
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">Roadmap</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex">
        <NextLink href="/">
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">Roadmap</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link href="/inicio" underline="hover">
            Aprende React
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white"
            as={Link}
            color="primary"
            href="#"
            variant="shadow"
            startContent={<Icons.loginOutline className="h-6 w-6" />}
            radius="full"
          >
            Inicia sesión
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="/inicio" size="lg">
            Aprende React
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            className="text-white"
            as={Link}
            color="primary"
            href="#"
            variant="shadow"
            startContent={<Icons.loginOutline className="h-6 w-6" />}
            radius="full"
          >
            Inicia sesión
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}

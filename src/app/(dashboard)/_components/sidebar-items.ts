import type { SidebarItem } from "./sidebar";

export const userItems: SidebarItem[] = [
  {
    key: "/inicio",
    href: "/inicio",
    icon: "solar:home-2-linear",
    title: "Inicio",
  },
  // {
  //   icon: Icons.telescopeOutline,
  //   name: "Explorar",
  //   path: "/explorar",
  // },
  {
    key: "/tutoriales",
    href: "/tutoriales",
    icon: "solar:play-circle-linear",
    title: "Tutoriales",
  },
  {
    key: "/temas",
    href: "/temas",
    icon: "solar:notebook-square-linear",
    title: "Temas",
  },
  // {
  //   icon: Icons.routeOutline,
  //   name: "Rutas",
  //   path: "/rutas",
  // },
];

export const adminItems: SidebarItem[] = [
  {
    key: "rutas",
    href: "/admin/rutas",
    icon: "solar:routing-linear",
    title: "Rutas",
  },
  {
    key: "tutoriales",
    href: "/admin/tutoriales",
    icon: "solar:play-circle-linear",
    title: "Tutoriales",
  },
  {
    key: "temas",
    href: "/admin/temas",
    icon: "solar:notebook-square-linear",
    title: "Temas",
  },
];

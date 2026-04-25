import { NextResponse } from "next/server";

const headerData = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    submenu: [
      { label: "Our Services", href: "/services/services-list/new" },
    ],
  },
 
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/contact" },
];

export const GET = async () => {
  return NextResponse.json({
    headerData
  });
};


import { NextResponse } from "next/server";

const headerData = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    submenu: [
      { label: "Our Services", href: "/properties/properties-list/modern-apartment" },
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


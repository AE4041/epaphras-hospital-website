
import { itemData } from "@/app/types/services/servicesData";
import { NextResponse } from "next/server";

const services: itemData[] = [
  {
    id: "1",
    item_img: "/images/avatar/lab.jpeg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "lab",
  },
  {
    id: "2",
    item_img: "/images/avatar/surgery.jpeg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "surgery",
  },
  {
    id: "3",
    item_img: "/images/avatar/lab2.jpeg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "lab2",
  },
  {
    id: "4",
    item_img: "/images/avatar/pharmacy.jpg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "pharmacy",
  },
  {
    id: "5",
    item_img: "/images/avatar/opd.jpg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "opd",
  },
  {
    id: "6",
    item_img: "/images/avatar/dental.jpeg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "dental",
  },
  {
    id: "7",
    item_img: "/images/avatar/scan.jpeg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "scan",
  },
  {
    id: "8",
    item_img: "/images/avatar/ipd2.jpeg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "ipd2",
  },
  {
    id: "9",
    item_img: "/images/avatar/staff.jpeg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "staff",
  },
  {
    id: "10",
    item_img: "/images/avatar/ward.jpeg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "ward",
  },
  {
    id: "11",
    item_img: "/images/avatar/ipd.jpeg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "ipd",
  },
  {
    id: "12",
    item_img: "/images/avatar/otuo&nurses.jpeg",
    // item_title: "Modern Appartment",
    // description: "Put some content in here to explain the card.............",
    slug: "staff2",
  },
];

export async function GET() {
  return NextResponse.json(services);
}

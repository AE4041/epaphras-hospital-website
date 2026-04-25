import Image from "next/image";
import React from "react";
import { itemData } from "@/app/types/services/servicesData";

interface itemCardProps {
  item: itemData;
  viewMode?: string;
}

const itemCard: React.FC<itemCardProps> = ({ item, viewMode }) => {

  return (
    <div>
      {item && item !== null ?
        <div
          key={item.id}
          className={`bg-white shadow-item dark:bg-darklight rounded-lg overflow-hidden`}
          data-aos="fade-up"
        >
          <div className={`group ${viewMode == "list" && 'flex'}`}>
            <div className={`relative ${viewMode == "list" && 'w-[30%]'}`}>
              <div className={`imageContainer h-[250px] w-full ${viewMode == "list" && 'h-full md:h-52'}`}>
                <Image
                  src={item?.item_img}
                  alt={`Image of ${item?.slug}`}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-125 duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        : <div></div>}
    </div>
  );
};

export default itemCard;

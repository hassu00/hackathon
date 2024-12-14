import React from "react";
import Image from "next/image";

export default function header() {
  return (
    <header className="grid grid-rows-1 h-[132px] p-4 w-screen items-center ">
      <div className="grid grid-rows-1  pb-4">
        <div className="flex justify-between items-center">
        <div className=" p-3">
          <Image
            width={16}
            height={16}
            alt="search icon"
            src="/images/Search.svg"
          />
        </div>
        <div className="font-normal text-[24px] leading-[29.52px]">Avion</div>
        <div className="flex justify-center items-center p-3">
        <Image
            width={16}
            height={16}
            alt="Shopping cart icon"
            src="/images/Shopping--cart.svg"
          />
          <Image
            width={16}
            height={16}
            alt="avater icon"
            src="/images/User--avatar.svg"
            className="ml-4"
            />
        </div>
            </div>
      </div>
      <div className="grid grid-rows-1 items-center border-t-[1px] border-[#0000001A] border-solid pt-[15px]">
        <div className="flex justify-center items-center w-full  gap-[44px]  ">
        <div className="font-normal text-[16] leading-[21.16px] text-[#726E8D]">Plant pots</div>
        <div className="font-normal text-[16] leading-[21.16px] text-[#726E8D]">Ceramics</div>
        <div className="font-normal text-[16] leading-[21.16px] text-[#726E8D]">Tables</div>
        <div className="font-normal text-[16] leading-[21.16px] text-[#726E8D]">Chairs</div>
        <div className="font-normal text-[16] leading-[21.16px] text-[#726E8D]">Crockery</div>
        <div className="font-normal text-[16] leading-[21.16px] text-[#726E8D]">Tableware</div>
        <div className="font-normal text-[16] leading-[21.16px] text-[#726E8D]">Cutlery</div>
        </div>
      </div>
    </header>
  );
}

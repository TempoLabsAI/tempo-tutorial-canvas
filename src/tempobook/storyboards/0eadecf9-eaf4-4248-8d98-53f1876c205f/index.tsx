import React from "react";
export default function TempoWelcome() {
  return (
    <div className="relative bg-[#F5F4FC] overflow-hidden w-[1440px] h-[1024px] flex flex-col justify-center items-start px-36 gap-y-10">
      {/* Tempo Logo */}
      <img
        src={"/images/tempo-image-20251121T190103971Z.png"}
        alt={"Pasted Image"}
        width={3336}
        height={2500}
        className={"w-full h-full absolute left-0"}
      />
      <div className="w-[200px] h-[200px] z-10">
        <img
          src={"/images/tempo-image-20251121T185016603Z.png"}
          alt={"Pasted Image"}
          width={383}
          height={383}
          className={"w-full h-full"}
        />
      </div>
      {/* Text Content */}
      <div className="flex flex-col static gap-4 gap-y-8 z-10">
        <h1 className="text-black font-brockmann font-semibold text-[140px]">
          Hi! Meet Tempo,
        </h1>
        <div className="flex flex-col gap-y-2 w-fit">
          <span className="text-black font-brockmann font-normal text-6xl">
            The best tool for design engineers.
          </span>
          <span className="text-black font-brockmann font-normal text-6xl">
            {" "}
            This canvas is yours to play with so please make it your own
          </span>
        </div>
      </div>
    </div>
  );
}

import { Play } from "lucide-react";
import React from "react";
import InfoCard from "@/components/InfoCard";
import ConversionRateCard from "@/components/ConversionRateCard";
import BalanceCard from "@/components/BalanceCard";
import PillA from "@/components/PillA";
import TutorialLink from "@/components/TutorialLink";
import SectionTitle from "@/components/SectionTitle";
import PageHeader from "@/components/PageHeader";
import SectionSubTitle from "@/components/SectionSubTitle";

const Storyboard1 = () => {
  return (
    <div className="w-[1440px] bg-[#F7F6FE] px-16 relative h-[3580px]">
      <PageHeader 
        title={<>Escape the constraints of code <br />(when needed)</>} 
        highlightedText="" 
      />
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="A" />
          <SectionTitle>
            Detach JSX” to remove complex code components
          </SectionTitle>
          <SectionSubTitle>
            Turns any set of elements into simple HTML
          </SectionSubTitle>
          <TutorialLink />
        </div>
        <div
          className={
            "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white w-full rounded-2xl border-dashed py-8 h-fit gap-y-16"
          }
        >
          <InfoCard />
          <div
            className={
              "self-stretch text-[#1a1a1a]/50 font-normal text-center text-2xl"
            }
          >
            Right click the element above and select “Detach JSX”
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="B" />
          <SectionTitle>
            Copy & paste clean react with static values
          </SectionTitle>
          <SectionSubTitle>
            Tempo preserves component structure but transforms variables <br />{" "}
            and props to static values
          </SectionSubTitle>
          <TutorialLink />
        </div>
        <div className="flex justify-start items-center gap-x-6 w-full">
          <div
            className={
              "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white w-full rounded-2xl border-dashed py-8 gap-y-16 h-[512px]"
            }
          >
            <div
              className={
                "self-stretch text-[#1a1a1a]/50 font-normal text-center text-3xl"
              }
            >
              Paste it here
            </div>
          </div>

          <div
            className={
              "flex flex-col justify-center items-center gap-[22px] w-full rounded-2xl border-dashed h-fit gap-y-2 py-0"
            }
          >
            <ConversionRateCard />

            <img
              src={"/images/tempo-image-20251112T163956149Z.png"}
              alt={"Pasted Image"}
              width={536}
              height={354}
              className={"h-full w-1/4"}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="C" />
          <SectionTitle>
            Control what gets checked into your codebase
          </SectionTitle>
          <SectionSubTitle>
            Drag, drop, and draw on the canvas in a flexible playground.
          </SectionSubTitle>
          <TutorialLink />
        </div>
        <div className="flex justify-start items-end gap-x-12">
          <div className=" h-[551px] w-[493px] flex flex-col items-end gap-y-8 justify-center">
            <img
              src={"/images/tempo-image-20251126T200500087Z.png"}
              alt={"Pasted Image"}
              width={366}
              height={440}
              className={" w-[214px] h-[239px]"}
            />
            <div
              className={
                "self-stretch text-[#1a1a1a]/50 font-normal text-2xl h-fit"
              }
            >
              Only “route” storyboards with this URL banner are guaranteed to be
              part of your codebase. The rest of the canvas is a playground that
              can reference your codebase but lives in isolation.
            </div>
          </div>
          <img
            src={"/images/tempo-image-20251126T200130230Z.png"}
            alt={"Pasted Image"}
            width={1788}
            height={1260}
            className={"h-full w-3/5"}
          />
        </div>
      </div>
      <img
        src={"/images/tempo-image-20251121T190753312Z.png"}
        alt={"Pasted Image"}
        width={1668}
        height={5536}
        className={"w-full h-full z-0 absolute top-0 left-0"}
      />
    </div>
  );
};

export default Storyboard1;

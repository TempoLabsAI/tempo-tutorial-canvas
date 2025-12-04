import { Play } from "lucide-react";
import React from "react";
import BalanceCard from "@/components/BalanceCard";
import PerformanceCard from "@/components/PerformanceCard";
import PillA from "@/components/PillA";
import TutorialLink from "@/components/TutorialLink";
import SectionTitle from "@/components/SectionTitle";
import PageHeader from "@/components/PageHeader";
import SectionSubTitle from "@/components/SectionSubTitle";

const Storyboard1 = () => {
  return (
    <div className="w-[1440px] bg-[#F7F6FE] px-16 h-[4703px] relative">
      <PageHeader title="Build & Maintain" highlightedText="Design Systems" />
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="A" />

          <SectionTitle>
            Right click any element to create a React component
          </SectionTitle>
          <SectionSubTitle>
            Right click the container below and select “Create React Component”
          </SectionSubTitle>
          <TutorialLink className="visibility: hidden" />
        </div>
        <div
          className={
            "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white w-full rounded-2xl border-dashed py-8 h-fit gap-y-16"
          }
        >
          <BalanceCard />

          <div
            className={
              "self-stretch text-[#1a1a1a]/50 font-normal text-center text-2xl"
            }
          >
            This creates a code component which may not be visually reusable
            like components in traditional design tools. Learn more.
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="B" />
          <SectionTitle>
            Right click any React component to create a Storybook story
          </SectionTitle>

          <SectionSubTitle>
            Right click the component below and select “Create Story”
          </SectionSubTitle>
          <TutorialLink className="visibility: hidden" />
        </div>
        <div
          className={
            "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white w-full rounded-2xl border-dashed py-8 h-fit gap-y-16"
          }
        >
          <PerformanceCard />
          <div
            className={
              "self-stretch text-[#1a1a1a]/50 font-normal text-center text-2xl"
            }
          >
            Storybook stories are visually reusable similar to components in
            traditional design tools. Learn more.
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="C" />

          <SectionTitle>
            Drag and Drop storybook stories from the assets tab
          </SectionTitle>
          <TutorialLink className="visibility: hidden" />
        </div>
        <div className="flex justify-start items-center gap-x-6 w-full">
          <div
            className={
              "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white rounded-2xl border-dashed h-[600px] py-8 gap-y-16 w-9/12"
            }
          >
            <div
              className={
                "self-stretch text-[#1a1a1a]/50 font-normal text-center text-3xl"
              }
            >
              Drop a storybook story into <br /> this container
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <div
              className={
                "flex justify-start w-[478px] z-10 gap-y-6 absolute flex-row items-end items-start left-[661px] top-[606px]"
              }
            >
              <img
                src={"/images/tempo-image-20251126T202501738Z.png"}
                alt={"Pasted Image"}
                width={317}
                height={1005}
                className={"h-full w-[120px]"}
              />
              <div>
                <div
                  className={
                    "self-stretch text-[#1a1a1a]/50 font-normal text-2xl h-fit w-full"
                  }
                >
                  Click the assets panel on the left side, and choose from your
                  library.
                </div>
              </div>
            </div>
            <img
              src={"/images/tempo-image-20251126T203300581Z.png"}
              alt={"Pasted Image"}
              width={1608}
              height={1228}
              className={" w-[735px] h-[599px]"}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="D" />
          <SectionTitle>
            Import any component from reactcomponents.com
          </SectionTitle>
          <TutorialLink className="visibility: hidden" />
        </div>

        <div className={"flex justify-start items-center gap-x-6"}>
          <div
            className={
              "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white rounded-2xl border-dashed h-[600px] py-8 gap-y-16 w-9/12"
            }
          >
            <div
              className={
                "self-stretch text-[#1a1a1a]/50 font-normal text-center text-3xl"
              }
            >
              Drop a component from reactcomponents.com into <br /> this
              container
            </div>
          </div>

          <div className={"flex flex-col h-full w-full"}>
            <div
              className={
                "flex justify-start w-[478px] z-10 gap-y-6 absolute flex-row items-end items-start left-[661px] top-[606px]"
              }
            >
              <img
                src={"/images/tempo-image-20251126T202501738Z.png"}
                alt={"Pasted Image"}
                width={317}
                height={1005}
                className={"h-full w-[120px]"}
              />
              <div>
                <div
                  className={
                    "self-stretch text-[#1a1a1a]/50 font-normal text-2xl h-fit w-full"
                  }
                >
                  Use any prebuilt component just by dragging it to the canvas
                </div>
              </div>
            </div>
            <img
              src={"/images/tempo-image-20251126T204133131Z.png"}
              alt={"Pasted Image"}
              width={1608}
              height={1228}
              className={"w-full h-full"}
            />
          </div>
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

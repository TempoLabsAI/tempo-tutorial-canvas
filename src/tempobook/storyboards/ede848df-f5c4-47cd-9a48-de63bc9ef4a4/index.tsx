import { Play, Bell } from "lucide-react";
import React from "react";
import NotificationCard from "@/components/NotificationCard";
import LoginUI from "@/components/LoginUI";
import PillA from "@/components/PillA";
import TutorialLink from "@/components/TutorialLink";
import SectionTitle from "@/components/SectionTitle";
import PageHeader from "@/components/PageHeader";
import SectionSubTitle from "@/components/SectionSubTitle";

const Storyboard1 = () => {
  return (
    <div className="w-[1440px] bg-[#F7F6FE] px-16 h-[4840px] relative">
      <PageHeader title="Vibe-code" highlightedText="anytime" />
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="A" />

          <SectionTitle>Generate something new with AI</SectionTitle>
          <SectionSubTitle>
            Right click the container below and select "Edit with AI"
          </SectionSubTitle>
          <TutorialLink className="visibility: hidden" />
        </div>
        <div
          className={
            "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white w-full rounded-2xl border-dashed py-8 gap-y-16 h-[600px]"
          }
        >
          <div
            className={
              "self-stretch text-[#1a1a1a]/50 font-normal text-center text-4xl"
            }
          >
            Generate Something Here. <br /> Need a prompt? Try "Login UI"
          </div>
          <div
            className={
              "self-stretch text-[#1a1a1a]/50 font-normal text-center text-2xl"
            }
          >
            Don't forget to switch back to "Design" mode in the bottom toolbar
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="B" />
          <SectionTitle>Provide visual context</SectionTitle>

          <SectionSubTitle>
            Right click the container below and select “Edit with AI”
          </SectionSubTitle>
          <TutorialLink className="visibility: hidden" />
        </div>
        <div>
          <img
            src={"/images/tempo-image-20251126T201748428Z.png"}
            alt={"Pasted Image"}
            width={3119}
            height={1530}
            className={"w-full h-full z-1"}
          />
          <div
            className={
              "flex gap-y-8 h-fit flex-row gap-x-4 justify-start items-end absolute left-[774px] top-[595px] w-2/5"
            }
          >
            <img
              src={"/images/tempo-image-20251126T201416805Z.png"}
              alt={"Pasted Image"}
              width={251}
              height={1327}
              className={"h-full w-[100px]"}
            />
            <div>
              <div
                className={
                  "self-stretch text-[#1a1a1a]/50 font-normal text-2xl h-fit"
                }
              >
                Selecting specific elements (highlighted in purple) is the best
                way to give AI context of what to change
              </div>
            </div>
          </div>
          <div className="flex justify-start w-[478px] absolute z-10 flex-col items-start left-[0px] top-[642px] gap-y-6">
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
                Access the AI chat anytime using the purple button on the left
                sidebar
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="C" />
          <SectionTitle>Inspect source code anytime</SectionTitle>
          <SectionSubTitle>
            Right click the container below and select “Edit with AI”
          </SectionSubTitle>
          <TutorialLink className="visibility: hidden" />
        </div>
        <div
          className={
            "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white w-full rounded-2xl border-dashed h-[600px] py-8 gap-y-16"
          }
        >
          <NotificationCard size={"large"} />
          <div
            className={
              "self-stretch text-[#1a1a1a]/50 text-center text-2xl font-normal"
            }
          >
            Right-click this element directly.
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="D" />
          <SectionTitle>
            Generate entire web or mobile applications
          </SectionTitle>
          <SectionSubTitle>
            Navigate to the project page and select vite, next.js, or expo
            (react-native) to get started
          </SectionSubTitle>
          <TutorialLink className="visibility: hidden" />
        </div>
        <img
          src={"/images/tempo-image-20251112T135859276Z.png"}
          alt={"Pasted Image"}
          width={3108}
          height={1536}
          className={"w-full h-full"}
        />
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

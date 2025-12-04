import { Play, Bell } from "lucide-react";
import React from "react";
import PillA from "@/components/PillA";
import TutorialLink from "@/components/TutorialLink";
import SectionTitle from "@/components/SectionTitle";
import PageHeader from "@/components/PageHeader";
import SectionSubTitle from "@/components/SectionSubTitle";

const Storyboard1 = () => {
  return (
    <div className="w-[1440px] bg-[#F7F6FE] px-16 relative h-[4181px]">
      <PageHeader
        title="Collaborate on any production"
        highlightedText="react codebase"
      />
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="A" />

          <SectionTitle>Import any React repo from Github</SectionTitle>
          <SectionSubTitle>
            Got an existing codebase? Import it.
          </SectionSubTitle>
          <TutorialLink />
        </div>
        <img
          src={"/images/tempo-image-20251112T171756583Z.png"}
          alt={"Pasted Image"}
          width={2936}
          height={976}
          className={"w-full h-full"}
        />
      </div>
      <div
        className={
          "w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10"
        }
      >
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="B" />
          <SectionTitle>Push, pull, and commit directly to Github</SectionTitle>
          <SectionSubTitle>
            ”Stay in sync and collaborate with your engineering team
          </SectionSubTitle>
          <TutorialLink />
        </div>
        <img
          src={"/images/tempo-image-20251112T171914930Z.png"}
          alt={"Pasted Image"}
          width={2936}
          height={1796}
          className={"w-full h-full"}
        />
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 relative z-10">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="C" />
          <SectionTitle>
            Each canvas is tied to a specific git branch
          </SectionTitle>
          <SectionSubTitle>
            Tempo generates a new branch off “main” for each canvas
          </SectionSubTitle>
          <TutorialLink />
        </div>

        <div className="flex">
          <img
            src={"/images/tempo-image-20251128T115910492Z.png"}
            alt={"Pasted Image"}
            width={1792}
            height={1330}
            className={"w-full h-full"}
          />
        </div>
        <SectionSubTitle>
          WARNING: Push to GitHub and merge to your main branch regularly to
          avoid stale code that cannot be merged
        </SectionSubTitle>
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

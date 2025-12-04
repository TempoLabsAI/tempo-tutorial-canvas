import { Play } from "lucide-react";
import React from "react";
import Userform from "@/components/Userform";
import TutorialButton from "@/components/TutorialButton";
import UsersForm from "@/components/UsersForm";
import PillA from "@/components/PillA";
import TutorialLink from "@/components/TutorialLink";
import SectionTitle from "@/components/SectionTitle";
import PageHeader from "@/components/PageHeader";
import SectionSubTitle from "@/components/SectionSubTitle";

const Storyboard1 = () => {
  return (
    <div className="w-[1440px] bg-[#F7F6FE] px-16 h-[4831px]">
      <img
        src={"/images/tempo-image-20251121T190753312Z.png"}
        alt={"Pasted Image"}
        width={1668}
        height={5536}
        className={"w-full h-full z-0 left-0 absolute"}
      />
      <PageHeader title="Edit code" highlightedText="Visually" />
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 z-10 relative">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="A" />

          <SectionTitle>
            First, learn to switch between "Design" and "Interact" modes.
          </SectionTitle>
          <SectionSubTitle>
            Every element in tempo is running code you can interact with.
          </SectionSubTitle>
          <TutorialLink />
        </div>
        <div
          className={
            "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white w-full rounded-2xl gap-y-0 border-dashed h-[600px]"
          }
        >
          <TutorialButton />
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 z-10 relative">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="B" />
          <SectionTitle>Let's edit the color of this button</SectionTitle>
          <SectionSubTitle>
            Every element in tempo is running code you can interact with.
          </SectionSubTitle>
          <TutorialLink className="visibility: hidden" />
        </div>
        <div
          className={
            "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white w-full rounded-2xl border-dashed py-8 h-fit gap-y-16"
          }
        >
          <UsersForm />
          <div
            className={
              "self-stretch text-[#1a1a1a]/50 font-normal text-center text-2xl"
            }
          >
            Don’t forget to switch back to “Design” mode in the bottom toolbar
          </div>
          <div
            className={
              "flex gap-y-8 flex-row gap-x-4 justify-start items-end absolute h-fit w-[401px] left-[872px] top-[796px]"
            }
          >
            <img
              src={"/images/tempo-image-20251127T141904491Z.png"}
              alt={"Pasted Image"}
              width={184}
              height={98}
              className={"h-full size-1/4"}
            />
            <div>
              <div
                className={
                  "self-stretch text-[#1a1a1a]/50 font-normal text-2xl h-fit"
                }
              >
                Hold Ctrl/Cmd to select nested elements like this directly.)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 z-10 relative">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="C" />
          <SectionTitle>Drag and drop to resize and re-arrange</SectionTitle>

          <TutorialLink className="visibility: hidden" />
        </div>
        <div
          className={
            "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white w-full rounded-2xl border-dashed h-[600px] py-8 gap-y-16"
          }
        >
          <div
            className={
              "h-[250px] relative overflow-hidden flex justify-center items-center bg-white bg-[url('https://storage.googleapis.com/tempo-image-previews/github%7C45309499-1762952683388-1Cpng')] bg-center bg-cover w-[fit] gap-x-24"
            }
          >
            <div
              className={
                "w-[250px] h-[250px] rounded-[32px] overflow-hidden relative"
              }
            >
              <img
                src={
                  "https://storage.googleapis.com/tempo-image-previews/figma-exports%2Fgithub%7C45309499-1762951599563-node-3458%3A37782-1762951598616.png"
                }
                alt={"Step 01 background"}
                className={"w-full h-full object-cover"}
              />
              <div
                className={
                  "absolute left-[88px] top-[84px] text-center text-white text-[64px] font-brockmann font-normal leading-[76.80px] tracking-[-0.03em]"
                }
              >
                01
              </div>
            </div>
            <div
              className={
                "w-[250px] h-[250px] rounded-[32px] overflow-hidden relative"
              }
            >
              <img
                src={
                  "https://storage.googleapis.com/tempo-image-previews/figma-exports%2Fgithub%7C45309499-1762951599510-node-3458%3A37785-1762951598617.png"
                }
                alt={"Step 02 background"}
                className={"w-full h-full object-cover"}
              />
              <div
                className={
                  "absolute left-[84px] top-[84px] text-center text-white text-[64px] font-brockmann font-normal leading-[76.80px] tracking-[-0.03em]"
                }
              >
                02
              </div>
            </div>

            <div
              className={
                "w-[250px] h-[250px] rounded-[32px] overflow-hidden relative"
              }
            >
              <img
                src={
                  "https://storage.googleapis.com/tempo-image-previews/figma-exports%2Fgithub%7C45309499-1762951599541-node-3458%3A37788-1762951598617.png"
                }
                alt={"Step 03 background"}
                className={"w-full h-full object-cover"}
              />
              <div
                className={
                  "absolute left-[84px] top-[84px] text-center text-white text-[64px] font-brockmann font-normal leading-[76.80px] tracking-[-0.03em]"
                }
              >
                03
              </div>
            </div>
          </div>
          <div
            className={
              "self-stretch text-[#1a1a1a]/50 font-normal text-center text-2xl"
            }
          >
            You can also use your arrow keys to nudge elements
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-x-16 flex-col gap-y-20 h-[fit] py-20 z-10 relative">
        <div className={"flex flex-col justify-center items-start gap-6"}>
          <PillA letter="D" />
          <SectionTitle>
            Add styles and effects like blur using Tailwind
          </SectionTitle>

          <TutorialLink className="visibility: hidden" />
        </div>
        <div
          className={
            "border-2 border-[#6448ef] flex flex-col justify-center items-center gap-[22px] bg-white w-full rounded-2xl border-dashed h-[600px] py-8 gap-y-10 px-12"
          }
        >
          <div
            className={
              "relative flex justify-center items-center w-full h-[400px] bg-white bg-[url('https://storage.googleapis.com/tempo-image-previews/github%7C45309499-1762953457409-1Dpng')] bg-center bg-cover rounded-2xl border border-[#f5f5f5] py-12 px-8 gap-x-16 overflow-visible"
            }
          >
            <div
              className={
                "w-[250px] rounded-[32px] overflow-hidden relative flex flex-col h-fit gap-y-8"
              }
            >
              <div
                className={
                  "self-stretch text-[#1a1a1a]/50 font-normal text-center text-3xl"
                }
              >
                blur-none
              </div>
              <img
                src={"/images/tempo-image-20251112T133509241Z.png"}
                alt={"Pasted Image"}
                width={784}
                height={816}
                className={"w-full h-full"}
              />
            </div>
            <div
              className={
                "w-[250px] rounded-[32px] relative flex flex-col h-fit gap-y-8 overflow-visible"
              }
            >
              <div
                className={
                  "self-stretch text-[#1a1a1a]/50 font-normal text-center text-3xl"
                }
              >
                blur-2xl
              </div>
              <img
                src={"/images/tempo-image-20251112T133509241Z.png"}
                alt={"Pasted Image"}
                width={784}
                height={816}
                className={"w-full h-full overflow-visible blur-[14.5px]"}
              />
            </div>
            <div
              className={
                "w-[250px] rounded-[32px] overflow-hidden relative flex flex-col h-fit gap-y-8"
              }
            >
              <div
                className={
                  "self-stretch text-[#1a1a1a]/50 font-normal text-center text-3xl"
                }
              >
                blur-sm
              </div>
              <img
                src={"/images/tempo-image-20251112T133509241Z.png"}
                alt={"Pasted Image"}
                width={784}
                height={816}
                className={"w-full h-full blur-sm"}
              />
            </div>

            <div
              className={
                "w-[250px] rounded-[32px] overflow-hidden relative flex flex-col h-fit gap-y-8"
              }
            >
              <div
                className={
                  "self-stretch text-[#1a1a1a]/50 font-normal text-center text-3xl"
                }
              >
                blur-lg
              </div>
              <img
                src={"/images/tempo-image-20251112T133509241Z.png"}
                alt={"Pasted Image"}
                width={784}
                height={816}
                className={"w-full h-full blur-[11.75px]"}
              />
            </div>
          </div>
          <div
            className={
              "self-stretch text-[#1a1a1a]/50 font-normal text-center text-2xl"
            }
          >
            Every style in Tempo is defined by tailwind. Learn more.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storyboard1;

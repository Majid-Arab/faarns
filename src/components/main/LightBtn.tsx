import React from "react";

const LightBtn = () => {
  const backgroundImage1 = `conic-gradient(from 90deg at 20% 20.00%, #241E43 0deg, #27233F 126deg, #161328 145deg, #161328 157deg, #161328 189deg, #161328 212deg, #161328 222deg, #000212 271deg, #000212 281deg, #000212 288deg, rgba(0,2,18,0.50) 317deg, rgba(0,2,18,0.63) 343deg, rgba(0,0,0,0.77) 360deg)`;
  const backgroundImage2 = `conic-gradient(from 90deg at 20% 20.00%, #241E43 0deg, #27233F 126deg, #161328 145deg, #161328 157deg, #161328 189deg, #161328 212deg, #161328 222deg, #000212 271deg, #000212 281deg, #000212 288deg, rgba(0,2,18,0.50) 317deg, rgba(0,2,18,0.63) 343deg, rgba(0,0,0,0.77) 360deg)`;
  return (
    <section className="relative w-full h-[700px] overflow-hidden flex">
      {/* Left Gradient */}
      <div className="relative w-1/2 z-0 h-full">
        <div
          style={{ backgroundImage: `${backgroundImage1}` }}
          className={`absolute inset-0 blur-[1px] origin-center`}
        ></div>
      </div>

      {/* Right Gradient */}
      <div className="relative w-1/2 z-0 h-full">
        <div
          style={{ backgroundImage: `${backgroundImage2}` }}
          className={`absolute -inset-1 scale-x-[-1] blur-[1px] origin-center`}
        ></div>
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full flex justify-center items-end h-[20%] bg-gradient-b-to from-black to-black backdrop-blur-[6px] z-10">
        <div className="w-[fit-content] relative bottom-[20px]">
          <img src="/img/logo.svg" alt="" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[80%] text-center  backdrop-blur-[6px] bg-gradient-to-b from-transparent to-black z-10">
        <div className="w-[100%] relative top-[70px]">
          <div className="w-[375px] h-fit mx-[auto] rounded-[30px] shadow-[1px_1px_2.700000047683716px_0px_rgba(255,255,255,0.55)] bg-white/20 h-[45px] py-[14px] px-[16px]">
            <span className="text-zinc-300 text-[20px]">
              Leading Marketing Agency
            </span>
          </div>
        </div>

        <div className="w-[100%]">
          <div className="w-[80%] mx-[auto]">
            <h1 className="text-[300px] bg-gradient-to-b from-[#EDEDED] to-[rgba(237,237,237,0.61)] bg-clip-text text-transparent">
              FAARNS
            </h1>
          </div>

          <div className="w-[70%] flex justify-between mx-[auto] relative -top-[100px]">
            <span className=" text-[white] block text-[18px] bg-gradient-to-b from-[#EDEDED] to-[rgba(237,237,237,0.61)] bg-clip-text text-transparent">
              WEBSITE
            </span>
            <span className="float text-[white] block text-[18px] bg-gradient-to-b from-[#EDEDED] to-[rgba(237,237,237,0.61)] bg-clip-text text-transparent">
              MARKETING
            </span>
            <span className="float text-[white] block text-[18px] bg-gradient-to-b from-[#EDEDED] to-[rgba(237,237,237,0.61)] bg-clip-text text-transparent">
              SAAS
            </span>
            <span className="float text-[white] block text-[18px] bg-gradient-to-b from-[#EDEDED] to-[rgba(237,237,237,0.61)] bg-clip-text text-transparent">
              SEO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightBtn;

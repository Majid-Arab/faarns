const LightBtn = () => {
  const backgroundImage1 = `conic-gradient(from 90deg at 79% 20.00%, #241E43 0deg, #27233F 126deg, #161328 145deg, #161328 157deg, #161328 189deg, #161328 212deg, #161328 222deg, #000212 271deg, #000212 281deg, #000212 288deg, rgba(0,2,18,0.50) 317deg, rgba(0,2,18,0.63) 343deg, rgba(0,0,0,0.77) 360deg)`;
  const backgroundImage2 = `conic-gradient(from 90deg at 79% 20.00%, #241E43 0deg, #27233F 126deg, #161328 145deg, #161328 157deg, #161328 189deg, #161328 212deg, #161328 222deg, #000212 271deg, #000212 281deg, #000212 288deg, rgba(0,2,18,0.50) 317deg, rgba(0,2,18,0.63) 343deg, rgba(0,0,0,0.77) 360deg)`;

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Left Gradient */}
        <div
          style={{ backgroundImage: backgroundImage1 }}
          className="absolute top-0 left-0 w-[1200px] h-[900px] blur-[120px] opacity-60"
        ></div>

        {/* Right Gradient */}
        <div
          style={{ backgroundImage: backgroundImage2 }}
          className="absolute top-0 right-0 w-[1200px] h-[900px] scale-x-[-1] blur-[120px] opacity-60"
        ></div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-20"></div>
      </div>
    </>
  );
};

export default LightBtn;

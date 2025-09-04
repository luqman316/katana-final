export default function Footer() {
  return (
    <>
      <div className="  relative  x">
        <div className=" bg-red-600 m-0 p-0">
          <div
            className="flex justify-center overflow-visible"
            style={{ height: "30px", marginTop: "-1px" }}
          >
            <div
              className="bg-red-600 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: "-30px",
                height: "auto",
                zIndex: 10,
                bottom: 0,
              }}
            >
              Copyright 2023 KATANA GAMES. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

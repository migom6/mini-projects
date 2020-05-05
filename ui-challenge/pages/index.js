import React from "react";
import InfoBar from "../components/instagram/InfoBar";
import InstaCards from "../components/instagram/InstaCards";

function Home() {
  return (
    <>
      {/* nav */}
      <nav className="sticky inset-0 flex items-center justify-center w-full border-b bg-white z-20">
        <div
          className="flex items-center justify-between w-full"
          style={{ maxWidth: "975px", height: "3.64em" }}
        >
          {/* logo  */}
          <div className="" style={{ width: "24em" }}>
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="logo"
            />
          </div>
          {/* search  */}
          <div
            className="flex-1 flex bg-ig-gray border items-center justify-center rounded-sm"
            style={{}}
          >
            <button className="pl-3">
              <i className="fas fa-search text-black text-opacity-25 text-xs"></i>
            </button>
            <input
              className=" bg-ig-gray text-ig-text pl-3 focus:outline-none"
              placeholder="search"
            />
          </div>
          {/* actions  */}
          <div className="flex justify-end" style={{ width: "24em" }}>
            <div>
              <i className="fas fa-home text-black text-2xl mr-5"></i>
            </div>
            <div>
              <i className="far fa-paper-plane text-black text-2xl mr-5"></i>
            </div>
            <div>
              <i className="far fa-compass text-black text-2xl mr-5"></i>
            </div>
            <div>
              <i className="far fa-heart text-black  text-2xl mr-5"></i>
            </div>
            <div>
              <img
                className="w-6 h-6 rounded-full"
                src="https://lh3.googleusercontent.com/a-/AOh14GheSWRwqeTZyhIXwO6YEDuGAd4VzscgJDyQh6ES6g=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="dp"
              />
            </div>
          </div>
        </div>
      </nav>
      <div className=" flex items-center justify-center w-full bg-ig-gray z-0">
        <div
          className="flex justify-center  w-full bg-ig-gray "
          style={{ maxWidth: "975px" }}
        >
          <div className="bg-ig-gray" style={{ width: "614px" }}>
            {/* card  */}
            <InstaCards />
          </div>
          {/* info bar  */}
          <div
            className="hidden flex-col mt-12 bg-ig-gray lg:flex"
            style={{ width: "293px", left: "62%" }}
          ></div>
          <div
            className="fixed hidden flex-col mt-12 bg-ig-gray lg:flex"
            style={{ width: "293px", left: "65%" }}
          >
            <InfoBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from "react";

function InstaCards() {
  const renderCards = [1, 2, 3, 4, 5].map(() => {
    return (
      <div className="mt-8 rounded border w-full bg-white flex flex-col">
        <div className="flex h-16 justify-between items-center px-5">
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-3"
              src="https://instagram.fdel11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82555616_613124256182988_9130789885030957056_n.jpg?_nc_ht=instagram.fdel11-1.fna.fbcdn.net&_nc_ohc=Yg0LFcWjQskAX8eeWS8&oh=7e14d47d2031497795eafb5afb70ae5a&oe=5EDB5472"
              alt="dp"
            />
            <span className="font-semibold text-sm">annie_punu</span>
          </div>
          <div className="font-bold text-lg tracking-widest">...</div>
        </div>
        <div>
          <img
            src="https://instagram.fdel11-1.fna.fbcdn.net/v/t51.2885-15/e35/93348531_236583291025650_1692219611427599783_n.jpg?_nc_ht=instagram.fdel11-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6edRxb6O7r8AX_L2sF6&oh=b5cb3b59fd3b572d3b38346d92801adc&oe=5EB42DE4"
            alt="monkey"
          />
        </div>
        <div className="mt-3 flex w-full justify-between px-4">
          <div className="flex ">
            <div>
              <i className="far fa-heart text-gray-800 text-2xl mr-4"></i>
            </div>
            <div>
              <i className="far fa-comment-dots text-gray-800  text-2xl mr-4"></i>
            </div>
            <div>
              <i className="far fa-paper-plane text-gray-800  text-2xl mr-4"></i>
            </div>
          </div>
          <div>
            <i className="far fa-bookmark text-gray-800 font-light text-2xl"></i>
          </div>
        </div>
        <div className="mt-2 px-4 font-semibold text-sm tracking-tight">
          13 views
        </div>
        <div className="mt-2 px-4">
          <Comments />
        </div>
        <div className="flex mt-2 border-t font-light h-12">
          <input
            className="font-normal text-sm  pl-4 h-full w-full focus:outline-none"
            placeholder="Add a comment ..."
          />
          <button className="pr-4 text-blue-600 text-opacity-50 hover:text-opacity-100">
            Post
          </button>
        </div>
      </div>
    );
  });
  return <>{renderCards}</>;
}

function Comments() {
  return (
    <>
      <div className="flex mb-1">
        <span className="font-semibold text-sm tracking-tight">annie_punu</span>
        <span className="ml-2 text-sm tracking-tight">Oh hello 🐒</span>
      </div>
      <div className="flex mb-1">
        <span className="font-semibold text-sm tracking-tight">
          _i_love_crossiant
        </span>
        <span className="ml-2 text-sm tracking-tight">tur putek ❤️</span>
      </div>
      <div className="flex mb-1">
        <span className="font-semibold text-sm tracking-tight">annie_punu</span>
        <span className="ml-2 text-sm tracking-tight">Oh hello 🐒</span>
      </div>
      <div className="flex mb-1">
        <span className="font-semibold text-sm tracking-tight">
          _i_love_crossiant
        </span>
        <span className="ml-2 text-sm tracking-tight">tur putek ❤️</span>
      </div>
      <div className="flex mb-1">
        <span className="text-xs text-gray-500 tracking-tight">17 APRIL</span>
      </div>
    </>
  );
}

export default InstaCards;

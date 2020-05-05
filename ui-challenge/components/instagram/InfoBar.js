import React from "react";

export default function InfoBar() {
  return (
    <>
      <div className="flex">
        <div className="mr-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://lh3.googleusercontent.com/a-/AOh14GheSWRwqeTZyhIXwO6YEDuGAd4VzscgJDyQh6ES6g=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="dp"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold">migom6</span>
          <span className="text-xs text-ig-light">Madhurjya Pegu</span>
        </div>
      </div>
      <div className="flex justify-between items-end mt-5">
        <span className="font-semibold text-ig-light text-sm">
          Suggestions For You
        </span>
        <span className="font-medium text-xs">See All</span>
      </div>
      <div className="flex flex-col mt-4">
        {/* card  */}
        {[1, 2, 3, 4, 5].map(() => {
          return (
            <div className="flex items-center w-full mb-3">
              <div className="mr-4">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://instagram.fdel11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75388614_554529221967771_4105815609139265536_n.jpg?_nc_ht=instagram.fdel11-1.fna.fbcdn.net&_nc_ohc=1TOBxujSpzIAX8ujFfV&oh=30a98fb13f848215b8bddf3b9ae5c646&oe=5EDC1FD1"
                  alt="dp"
                />
              </div>
              <div className="flex flex-col flex-1 ">
                <span className="-mb-1 font-semibold  text-sm">
                  himanshu.b16
                </span>
                <span className=" font-medium text-xs text-ig-light">
                  follows you
                </span>
              </div>
              <div className="font-medium text-xs text-ig-blue ">Follow</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

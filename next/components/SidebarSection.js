import React from "react";

function SidebarSection({ data, top, heading }) {
  return (
    <ul className="flex flex-col pt-2 pb-2 border-b border-opacity-25 border-yt-text">
      {heading && (
        <div className="pl-6 h-10 flex items-center tracking-tight font-semibold text-yt-text">
          {heading}
        </div>
      )}

      {data.map((item, index) => {
        const { icon, title, src } = item;

        return top && index === 0 ? (
          <li
            key={index}
            className="flex items-center  pl-6 h-10 bg-yt-lightest  text-white font-semibold cursor-pointer"
          >
            <div className="text-md mr-6 w-3">
              <i className={`fas fa-${icon}`}></i>
            </div>
            <h3 className="">{title}</h3>
          </li>
        ) : (
          <li
            key={index}
            className="flex items-center  pl-6 h-10 hover:bg-yt-lightest  text-white font-semibold cursor-pointer"
          >
            {!src ? (
              <div className="text-md mr-6 w-3 text-yt-text text-opacity-75">
                <i className={`fas fa-${icon}`}></i>
              </div>
            ) : (
              <div className="text-md mr-4  text-yt-text text-opacity-75">
                <img className="w-6 h-6 rounded-full" src={src} alt="dp" />
              </div>
            )}
            <h3 className="">{title}</h3>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarSection;

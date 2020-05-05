import SidebarSection from "../components/SidebarSection";

const list1 = [
  { icon: "home", title: "Home" },
  { icon: "fire", title: "Trending" },
  { icon: "photo-video", title: "Subscription" },
];

const list2 = [
  { icon: "file-video", title: "Library" },
  { icon: "history", title: "History" },
  { icon: "file-medical", title: "Your videos" },
  { icon: "globe", title: "World" },
];

const list3 = [
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJy3NbK9ylwMmt4O8vhinJ1Dgj8lLxjLeLlvnA=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Kitze",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJwhTZqqXXPwbiph5j5121PI9C6BWQDVF7K9Ow=s88-c-k-c0xffffffff-no-rj-mo",
    title: "stephnie",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJy3gTTvkKnNHLETwVUFTPostURCeh7UcIbOrA=s88-c-k-c0xffffffff-no-rj-mo",
    title: "RiceLive",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJxuUelc0HG5tHfF0mHr_zqOKc4RRhz4jjkq0w=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Ben Awad",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJxl6BRcZk_LGbRibMhX4wAIOjD9Sw8KvmABnw=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Brawadis",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJy3NbK9ylwMmt4O8vhinJ1Dgj8lLxjLeLlvnA=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Kitze",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJwhTZqqXXPwbiph5j5121PI9C6BWQDVF7K9Ow=s88-c-k-c0xffffffff-no-rj-mo",
    title: "stephnie",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJy3gTTvkKnNHLETwVUFTPostURCeh7UcIbOrA=s88-c-k-c0xffffffff-no-rj-mo",
    title: "RiceLive",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJxuUelc0HG5tHfF0mHr_zqOKc4RRhz4jjkq0w=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Ben Awad",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJxl6BRcZk_LGbRibMhX4wAIOjD9Sw8KvmABnw=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Brawadis",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJy3NbK9ylwMmt4O8vhinJ1Dgj8lLxjLeLlvnA=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Kitze",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJwhTZqqXXPwbiph5j5121PI9C6BWQDVF7K9Ow=s88-c-k-c0xffffffff-no-rj-mo",
    title: "stephnie",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJy3gTTvkKnNHLETwVUFTPostURCeh7UcIbOrA=s88-c-k-c0xffffffff-no-rj-mo",
    title: "RiceLive",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJxuUelc0HG5tHfF0mHr_zqOKc4RRhz4jjkq0w=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Ben Awad",
  },
  {
    src:
      "https://yt3.ggpht.com/a/AATXAJxl6BRcZk_LGbRibMhX4wAIOjD9Sw8KvmABnw=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Brawadis",
  },
];
export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      {/* nav */}
      <div className="flex items-center h-16 w-full bg-yt-nav">
        {/* logo */}
        <div className="w-56  flex items-center  ">
          {/* hamburger */}
          <div className="ml-6 text-lg text-white">
            <i className="fas fa-bars "></i>
          </div>
          {/* y-t icon */}
          <div className="relative ml-6 pr-1">
            <div
              className="absolute bg-white w-4 h-3 z-0"
              style={{ top: "0.5em", right: "0.4em" }}
            ></div>
            <i
              className="fab fa-youtube relative text-3xl z-10"
              style={{ color: "red" }}
            ></i>
          </div>
          {/* y-t text */}
          <div className="text-white tracking-tightest text-xl font-semibold ">
            YouTube
          </div>
        </div>
        {/* search bar and btn */}
        <div className="flex flex-1 justify-center  px-20">
          <div className="flex w-full h-8 justify-center items-center ">
            <input
              className=" w-full h-full max-w-lg rounded-sm px-3 bg-yt-input text-yt-text"
              placeholder="Search"
            />
            <button className="w-16 h-full rounded-sm text-yt-text bg-yt-lightest focus:outline-none">
              <i className=" fas fa-search"></i>
            </button>
          </div>
        </div>
        {/* yt action buttons */}
        <div className="w-64 flex justify-end">
          <div className="mr-8 text-lg text-white">
            <i className="fas fa-video"></i>
          </div>
          <div className="mr-8 text-lg text-white">
            <i className="fas fa-border-none "></i>
          </div>
          <div className="mr-8 text-lg text-white">
            <i className="fas fa-bell"></i>
          </div>
          <div className="mr-8 ">
            <img
              className="w-8 h-8 rounded-full"
              src="https://lh3.googleusercontent.com/a-/AOh14GheSWRwqeTZyhIXwO6YEDuGAd4VzscgJDyQh6ES6g=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="dp"
            />
          </div>
        </div>
      </div>
      {/* 2nd row  */}
      <div className="flex h-full ">
        {/* sidebar */}
        <div className="w-56 pb-56 bg-yt-nav overflow-y-auto" id="style-4">
          <SidebarSection data={list1} top={true} />
          <SidebarSection data={list2} />
          <SidebarSection data={list3} heading="SUBSCRIPTIONS" />
        </div>
        <div className="flex justify-center flex-1 bg-yt-feed text-5xl text-yt-text">
          main
        </div>
      </div>
    </div>
  );
}

import { MORE_INFO_BUTTON_LOGO, PLAY_BUTTON_LOGO } from "../utils/constants";

function VideoTitle({ title, overview }) {
  return (
    <div className="absolute -top-40 md:top-0 left-0 w-full h-full flex flex-col justify-center items-start px-12 pt-24 z-10 text-white bg-gradient-to-t from-black/60 via-transparent pointer-events-none">
      <h1 className="text-2xl md:text-6xl font-bold pointer-events-auto">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3 pointer-events-auto">
        {overview}
      </p>
      <div className="flex gap-6 pointer-events-auto">
        <button className="bg-white px-2 py-2 md:py-4 md:px-12 flex rounded-lg hover:bg-opacity-80">
          <img
            className="w-10 mix-blend-multiply"
            alt="play logo"
            src={PLAY_BUTTON_LOGO}
          />
          <span className="p-2 px-6 text-lg text-black">Play</span>
        </button>
        <button className="hidden bg-gray-500 p-4 px-12 md:flex rounded-lg bg-opacity-50 hover:bg-opacity-80">
          <img
            className="w-10 mix-blend-multiply"
            alt="play logo"
            src={MORE_INFO_BUTTON_LOGO}
          />
          <span className="p-2 px-6 text-lg">More Info</span>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;

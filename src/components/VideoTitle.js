import { MORE_INFO_BUTTON_LOGO, PLAY_BUTTON_LOGO } from "../utils/constants";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-24 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex gap-6">
        <button className="bg-gray-500 p-6 px-12 flex rounded-lg">
          <img
            className="w-10 mix-blend-multiply"
            alt="play logo"
            src={PLAY_BUTTON_LOGO}
          />
          <span className="p-2 px-6 text-lg">Play</span>
        </button>
        <button className="bg-gray-500 p-6 px-12 flex rounded-lg">
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

import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import useGptMovieSearch from "../hooks/useGptMovieSearch";

function GptSearchBar() {
  const languageKey = useSelector((store) => store.config.lang);
  const { searchText, handleGptSearchClick } = useGptMovieSearch();
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 outline-none"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;

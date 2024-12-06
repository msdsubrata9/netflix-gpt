import GptMovieSuggessitions from "./GptMovieSuggessitions";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_PAGE_BACKGROUND } from "../utils/constants";

function GptSearch() {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={LOGIN_PAGE_BACKGROUND}
          alt="login page background"
        />
      </div>
      <>
        <GptSearchBar />
        <GptMovieSuggessitions />
      </>
    </div>
  );
}

export default GptSearch;

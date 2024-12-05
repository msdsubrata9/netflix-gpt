import GptMovieSuggessitions from "./GptMovieSuggessitions";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_PAGE_BACKGROUND } from "../utils/constants";

function GptSearch() {
  return (
    <div>
      <div>
        <img
          className="absolute -z-10"
          src={LOGIN_PAGE_BACKGROUND}
          alt="login page background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggessitions />
    </div>
  );
}

export default GptSearch;

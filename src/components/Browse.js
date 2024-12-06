import { signOut } from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingOnTV from "../hooks/useTrendingOnTV";
import GptSearch from "./GptSearch";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

function Browse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingOnTV();

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  function handleGptSearchClick() {
    dispatch(toggleGptSearchView());
  }

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full">
        <div className="flex justify-between flex-col md:flex-row">
          <Header />
          <div className="flex justify-between md:block px-10 py-20 md:py-5 z-50">
            {showGptSearch && (
              <select
                className="bg-slate-50 rounded-full border-2 border-black p-1 m-1 px-2 font-bold outline-none focus:ring-0"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-slate-50 rounded-full border-2 border-black p-1 m-1 px-2 font-bold"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <button
              onClick={handleSignOut}
              className="bg-slate-50 rounded-full border-2 border-black p-1 px-2 font-bold"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;

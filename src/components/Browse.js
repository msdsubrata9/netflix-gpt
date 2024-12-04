import { signOut } from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  const navigate = useNavigate();
  useNowPlayingMovies();

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  return (
    <div>
      <div className="flex justify-between">
        <Header />
        <div className="px-10 py-5 z-50">
          <button
            onClick={handleSignOut}
            className="bg-slate-50 rounded-full border-2 border-black p-1 px-2 font-bold"
          >
            Sign Out
          </button>
        </div>
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;

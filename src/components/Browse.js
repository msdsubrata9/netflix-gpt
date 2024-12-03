import { signOut } from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Browse() {
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }

  return (
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
  );
}

export default Browse;

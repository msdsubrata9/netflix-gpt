import Header from "./Header";

function Login() {
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_medium.jpg"
          alt="login page background"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded bg-black bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p className="py-4 cursor-pointer">New to Netflix? Sign up now.</p>
      </form>
    </div>
  );
}

export default Login;

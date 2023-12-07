import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      <h1 className="text-3xl my-3 font-semibold text-center p-3">Sign Up</h1>
      <form className="flex  max-w-lg flex-col mx-auto gap-3">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 rounded-lg border-2 border-slate-500"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 rounded-lg border-2 border-slate-500"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 rounded-lg border-2 border-slate-500"
        />
        <button className="bg-slate-700 p-3 text-lg text-white font-semibold rounded-lg uppercase hover:opacity-70">
          Sign Up
        </button>
      </form>

      <div className="flex gap-1 mt-2 justify-center">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

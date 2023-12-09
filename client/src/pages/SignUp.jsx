import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [formData, setformData] = useState({});
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      } else {
        setLoading(false);
        setError(null);
        navigate('/sign-in');
      }
    } catch (Error) {
      setLoading(false);
      setError(Error.message);
    }
  };

  return (
    <div>
      <h1 className="text-3xl my-3 font-semibold text-center p-3">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex  max-w-lg flex-col mx-auto gap-3"
      >
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 rounded-lg border-2 border-slate-500"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 rounded-lg border-2 border-slate-500"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 rounded-lg border-2 border-slate-500"
          onChange={handleChange}
        />
        <button
          disabled={Loading}
          className="bg-slate-700 p-3 text-lg text-white font-semibold rounded-lg uppercase hover:opacity-70"
        >
          {Loading ? "Loading..." : "Sign Up"}
        </button>
      </form>

      <div className="flex gap-1 mt-2 justify-center">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
      {Error && <p className="text-red-500 mt-5">{Error}</p>}
    </div>
  );
};

export default SignUp;

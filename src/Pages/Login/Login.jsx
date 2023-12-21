import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import swal from "sweetalert";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import app from "../../firebase/firebase.config";
import { MdEmail } from "react-icons/md";

const Login = () => {
  const [setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        <Navigate to="/login"></Navigate>;

        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        swal("Login Successful", "EXPLORE THE PAGE", "success");
        console.error(error);
        return navigate(location?.state ? location.state : "/");
        // console.error(error)
      });
  };
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, form);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        swal("Login Successful", "EXPLORE THE PAGE", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        swal(error?.message);
        console.error(error);

        return;
      });
  };

    return (
      <>
        <div>
          <section>
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
              <form onSubmit={handleLogin} className="w-full max-w-md">
                <div className="normal-case font-bold text-center text-white">
                  <h1 className="lg:text-3xl pl-4 md:text-2xl sm:text-xl font-extrabold">
                    <span>
                      <span className="text-black">SSC Technovision Inc</span>
                    </span>
                  </h1>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <a className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-gray border-b-2 dark:text-black dark:border-black">
                    sign in
                  </a>

                  <Link
                    to="/register"
                    href="#"
                    className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b  dark:border-gray-400 border-gray-400 "
                  >
                    sign up
                  </Link>
                </div>

                <div className="relative flex items-center mt-6">
                  <div className="absolute">
                    <MdEmail className="w-6 h-6 mx-3 text-black" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                    placeholder="Email address"
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <div className="absolute">
                    <RiLockPasswordFill className="w-6 h-6 mx-3 text-black" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-6">
                  <button className="btn w-full bg-black text-white hover:bg-black">
                    Sign Up
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border- lg:w-1/5"></span>

                  <a
                    href="#"
                    className="text-xs text-center uppercase mb-2 hover:underline"
                  >
                    or login with Social Media
                  </a>

                  <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div className="flex">
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-ghost w-full mt-4 border-white hover:bg-black hover:text-white"
                  >
                    Sign In with Google{" "}
                    <FcGoogle className="text-2xl"></FcGoogle>{" "}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
        <div></div>
      </>
    );
};

export default Login;

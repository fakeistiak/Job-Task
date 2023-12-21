import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import swal from "sweetalert";
import app from "../../firebase/firebase.config";

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
    <div>
      <header className="bg-gray-900 pattern">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center py-6 lg:h-[42rem] sm:h-screen lg:flex-row">
            <div className="lg:w-1/2">
              <h3 className="mt-2 text-6xl font-bold text-gray-100">
                Hello <span className="text-pink-500">Guest</span>
                <br />
                <span className="text-pink-500">Login</span> Now
              </h3>

              <p className="mt-4 text-gray-100">
                Please Login to meet our team and know about us also you can
                connect with us
              </p>
            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
              <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
                <div className="px-6 py-8 text-center">
                  <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                    Login
                  </h2>

                  <form onSubmit={handleLogin} action="#">
                    <div className="mt-4 text-white">
                      <input
                        className="block w-full px-4 py-2 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        required
                        type="email"
                        name="email"
                        placeholder="Email"
                        aria-label="Email address"
                      />
                      <input
                        className="block w-full px-4 py-2 mt-4 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                        aria-label="Password"
                      />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <button className="btn btn-secondary text-white w-full">
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="flex items-center justify-between mt-4 pb-4">
                    <button
                      onClick={handleGoogleSignIn}
                      className="btn btn-secondary text-white w-full hover:bg-gray-600"
                    >
                      Sign in with Google
                    </button>
                  </div>
                  <p className="text-sm text-white">
                    Don't have an Account?{" "}
                    <Link to="/register" className="text-blue-600 pl-2">
                      {" "}
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Login;

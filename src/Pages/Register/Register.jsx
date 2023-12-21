import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const birth = form.get("birth");
    const password = form.get("password");
    console.log(email, password, name, photo, birth);

    // if (
    //   password.length < 6 ||
    //   !/[A-Z]/.test(password) ||
    //   !/[!@#$%^&*]/.test(password)
    // ) {
    //   toast.error(
    //     "Password must be at least 6 characters long, contain a capital letter, and a special character."
    //   );
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        updateUser({ name, photo }).then(
          console.log(result.user),
          toast.success("Sign up Successful"),
          navigate("/"),

          window.location.reload()
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <section>
          <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form onSubmit={handleRegister} className="w-full max-w-md">
              <div className="normal-case font-bold text-center text-white">
                <h1 className="lg:text-3xl pl-4 md:text-2xl sm:text-xl font-extrabold">
                  <span>
                    <span className="text-black">SSC Technovision Inc</span>
                  </span>
                </h1>
              </div>
              <div className="flex items-center justify-center mt-6">
                <Link
                  to="/login"
                  href="#"
                  className="w-1/3 pb-4 font-medium text-center text-gray-400 capitalize border-b  dark:border-gray-500 border-gray-400"
                >
                  sign in
                </Link>
                <a className="w-1/3 pb-4 font-medium text-center text-black capitalize border-gray border-b-2 dark:text-black dark:border-black">
                  Sign up
                </a>
              </div>

              <div className="relative flex items-center mt-6">
                <div className="absolute">
                  <FaUser className="w-6 h-6 mx-3 text-black" />
                </div>
                <input
                  type="text"
                  name="name"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                  placeholder="Your Name"
                />
              </div>
              <div className="relative flex items-center mt-6">
                <div className="absolute">
                  <BsFillCalendarDateFill className="w-6 h-6 mx-3 text-black" />
                </div>
                <input
                  type="date"
                  name="birth"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                  placeholder="Date of Birth"
                />
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
                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div></div>
    </>
  );
};

export default Register;

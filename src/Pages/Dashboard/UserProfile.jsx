import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserProfile = () => {
     const { user } = useContext(AuthContext);
  console.log("user in Dashboard", user);

    return (
      <div>
        <div className="flex flex-col items-center gap-2">
          <img
            className="lg:h-60 h-16 w-16 lg:w-60 rounded-full object-cover"
            src={user?.photoURL}
            alt=""
          />
          <h1 className="lg:text-lg text-sm font-semibold">
            Name : {user?.displayName}
          </h1>
          <h1 className="lg:text-lg text-sm font-semibold">
            Email : {user?.email}
          </h1>
        </div>
      </div>
    );
};

export default UserProfile;
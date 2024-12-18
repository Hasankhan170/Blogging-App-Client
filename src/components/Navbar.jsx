import { Link } from "react-router-dom";
import Logout from "../pages/Logout.jsx";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedImageUrl = localStorage.getItem("imageUrl");

    if (storedUserId && storedImageUrl) {
      setIsUserLoggedIn(true);
      setUserId(storedUserId);
      setImageUrl(storedImageUrl);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);

  return (
    <div className="navbar px-5 bg-info">
      <div className="flex-1">
        <a className="text-xl text-white">Blogging App</a>
      </div>

      <div className="flex justify-center flex-1"></div>

      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {imageUrl && (
                <img src={imageUrl} alt="User Avatar" className="w-10 h-10 rounded-full" />
              )}
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            {!isUserLoggedIn ? (
              <>
                <li>
                  <Link to="Login">Login</Link>
                </li>
                <li>
                  <Link to="Register">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li>
                  <Logout />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

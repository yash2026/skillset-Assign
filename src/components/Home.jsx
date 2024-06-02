import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSearchSkills = () => {
    navigate("/user-skills");
  };

  const handleHomeNavigation = () => {
    navigate("/home");
  };

  return (
    <div className="bg-[#f8f4f3] h-[100vh] flex flex-col">
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5" onClick={handleHomeNavigation}>
              <span className="sr-only">Skill Set</span>
              <img
                className="h-8 w-auto"
                src="https://tse1.mm.bing.net/th?id=OIP.GCjrdV75jo6t2WT-roGBLAG9CM&pid=Api&P=0&h=180"
                alt=""
              />
            </a>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={handleLogout}
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Log out <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      </header>
      <div className="flex-grow flex items-center justify-center">
        <div className="relative inline-flex group">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            onClick={handleSearchSkills}
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Search Your Skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

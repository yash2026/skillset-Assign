import React from "react";

const Home = () => {
  return (
    <div className="bg-[#f8f4f3] h-[100%]">
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Skill Set</span>
              <img
                className="h-8 w-auto"
                src="https://tse1.mm.bing.net/th?id=OIP.GCjrdV75jo6t2WT-roGBLAG9CM&pid=Api&P=0&h=180"
                alt=""
              />
            </a>
          </div>
          <div className=" lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Log out <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
      <div className="flex justify-center h-screen my-5">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <form className="mx-auto ">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-800 sr-only dark:text-white "
            >
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                <svg
                  className="w-4 h-4 text-gray-700 dark:text-gray-600 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Search skills to add..."
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

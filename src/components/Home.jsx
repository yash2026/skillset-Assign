import React from "react";

const Home = () => {
  return (
    <div>
      <header className="bg-white">
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
      <div>Search bar</div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserSkills = () => {
  const [query, setQuery] = useState("");
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    axios
      .get("https://staging-api.wonderfful.com/v1/tables/all-skills")
      .then((response) => {
        setSkills(response.data.data.skills);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSkillSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setQuery("");
    }
  };

  const handleSkillRemove = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  // Filter out selected skills from the available skills
  const filteredSkills = skills
    .filter((skill) =>
      skill.display_name.toLowerCase().includes(query.toLowerCase())
    )
    .filter((skill) => !selectedSkills.includes(skill.display_name));

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (filteredSkills.length > 0) {
      handleSkillSelect(filteredSkills[0].display_name);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (filteredSkills.length > 0) {
        handleSkillSelect(filteredSkills[0].display_name);
      }
    }
  };

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <div className="bg-[#f8f4f3] h-[100%]">
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5" onClick={handleLogoClick}>
              {/* <span className="sr-only">Skill Set</span> */}
              <img
                className="h-8 w-auto"
                src="https://tse1.mm.bing.net/th?id=OIP.GCjrdV75jo6t2WT-roGBLAG9CM&pid=Api&P=0&h=180"
                alt=""
              />
            </a>
          </div>
          <div className=" lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={handleLogout}
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Log out <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      </header>
      <div className="flex justify-center h-screen my-5">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <form className="mx-auto" onSubmit={handleSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-800 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search skills to add..."
                value={query}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                required
              />
              {query && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill._id}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSkillSelect(skill.display_name)}
                    >
                      {skill.display_name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="m-4">
              <div className="flex gap-2 flex-row flex-wrap">
                {selectedSkills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg px-2 py-1 border-gray-900 border-2 bg-white flex flex-row justify-around text-center items-center min-w-5 text-xl"
                  >
                    <div className="mx-4">{skill}</div>
                    <div className="mx-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/660/660252.png"
                        className="h-4 cursor-pointer"
                        alt="skill-icon"
                        onClick={() => handleSkillRemove(skill)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSkills;

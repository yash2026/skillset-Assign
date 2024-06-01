// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const togglePassword = () => {
//     const passwordInput = document.getElementById("password");
//     const toggleButton = document.getElementById("togglePassword");
//     if (passwordInput.type === "password") {
//       passwordInput.type = "text";
//       toggleButton.textContent = "👁️"; // Use an open eye icon
//     } else {
//       passwordInput.type = "password";
//       toggleButton.textContent = "🙈"; // Use a closed eye icon
//     }
//   };

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//     return regex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateEmail(email)) {
//       setEmailError("");
//       // Dispatch login action here
//       // dispatch(loginUser({ email, password }));
//     } else {
//       setEmailError("Please enter a valid email address.");
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
//         <div>
//           <h2 className="font-bold text-3xl">
//             Login{" "}
//             <span className="bg-[#f84525] text-white px-2 rounded-md">
//               Form
//             </span>
//           </h2>
//         </div>
//         <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
//           <form onSubmit={handleSubmit}>
//             <div className="py-8">
//               <center>
//                 <span className="text-2xl font-semibold">Log In</span>
//               </center>
//             </div>
//             <div>
//               <label
//                 className="block font-medium text-sm text-gray-700"
//                 for="email"
//                 value="Email"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {emailError && (
//                 <p className="text-red-500 text-xs mt-1">{emailError}</p>
//               )}
//             </div>
//             <div className="mt-4">
//               <label
//                 className="block font-medium text-sm text-gray-700"
//                 for="password"
//                 value="Password"
//               />
//               <div class="relative">
//                 <input
//                   id="password"
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   required
//                   autocomplete="current-password"
//                   className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />

//                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//                   <button
//                     type="button"
//                     id="togglePassword"
//                     className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600 text-base"
//                     onClick={togglePassword}
//                   >
//                     🙈
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center justify-center mt-4">
//               <button className=" inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
//                 Sign In
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../auth/authSlice"; // Ensure this path is correct

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const togglePassword = () => {
    const passwordInput = document.getElementById("password");
    const toggleButton = document.getElementById("togglePassword");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "👁️"; // Use an open eye icon
    } else {
      passwordInput.type = "password";
      toggleButton.textContent = "🙈"; // Use a closed eye icon
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const isValid = regex.test(email);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validateEmail(email);

    if (isValidEmail) {
      setEmailError("");
      dispatch(loginUser({ email, password }))
        .unwrap()
        .then(() => {
          navigate("/home");
        })
        .catch((err) => {
          console.error("Failed to login: ", err);
        });
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
      <div>
        <h2 className="font-bold text-3xl">
          Login{" "}
          <span className="bg-[#f84525] text-white px-2 rounded-md">Form</span>
        </h2>
      </div>
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="py-8">
            <center>
              <span className="text-2xl font-semibold">
                <img
                  className="h-8 w-auto"
                  src="https://tse1.mm.bing.net/th?id=OIP.GCjrdV75jo6t2WT-roGBLAG9CM&pid=Api&P=0&h=180"
                  alt=""
                />
              </span>
            </center>
          </div>
          <div>
            <label
              className="block font-medium text-sm text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )} */}
          </div>
          <div className="mt-4">
            <label
              className="block font-medium text-sm text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
                autoComplete="current-password"
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <button
                  type="button"
                  id="togglePassword"
                  className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600 text-base"
                  onClick={togglePassword}
                >
                  🙈
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

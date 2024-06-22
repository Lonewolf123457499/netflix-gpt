import { Link } from "react-router-dom"
import Header from "./Header"


const Signup = () => {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ... absolute ">
        <img
          className="backdrop-filter blur-sm  "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="nextflix background image"
        />
      </div>

      <div
        className="w-3/12 p-12 absolute my-36 mx-auto right-0 left-0  bg-black rounded-md bg-clip-padding backdrop-filter  bg-opacity-80  
"
      >
        <div className="m-2 p-2 py-2">
          <h1 className=" text-3xl font-bold">SignUp</h1>
        </div>
        <form action="">
          <div className="m-2">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow "
                placeholder="FullName"
              />
            </label>
          </div>
          <div className="m-2">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div className="m-2">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="password" />
            </label>

            <div className="py-4">
              <button className="btn btn-block bg-red-700">Register Now!</button>
            </div>
          </div>
          <div>
            <Link to={"/"} className="text-red-500 underline px-4">
              Already have account ?{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup
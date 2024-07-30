import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
export const SignUp = () => {
  return (
    <>
      <div className="logn flex flex-col  items-center  min-h-[70vh]">
        <h1 className=" text-[25px] font-bold m-1"> Welcome To videoSphere</h1>
        <form
          action=""
          className="flex flex-col  min-w-[350px] max-w-[500px] gap-3 p-5 rounded-lg bg-red-100  "
        >
          <h1 className=" text-[20px] font-bold text-center">Signup</h1>
          <div className=" w-full flex justify-center">
            <FaRegUserCircle className=" text-[100px] text-center  " />
          </div>

          <label htmlFor="Email" className=" text-[18px] font-semibold">
            Email
          </label>
          <input
            type="text"
            className="  outline-none border border-red-300 p-2 rounded-lg bg-transparent"
          />
          <label htmlFor="Password" className=" text-[18px] font-semibold">
            Password
          </label>
          <input
            type="Passaword"
            className=" outline-none border border-red-300 p-2 rounded-lg bg-transparent"
          />
          <div className=" flex items-center gap-4  cursor-pointer">
            <button className=" text-[17px] p-2 bg-blue-600 text-white  w-[100px]  rounded-md ">
              SignUp
            </button>
          </div>
          <div className=" flex gap-3">
            <p>Already Have an Account?</p>
            <p className=" text-blue-500">
              <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

// <div  ">

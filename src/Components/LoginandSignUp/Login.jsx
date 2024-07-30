import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <>
      <div className="logn flex flex-col  items-center  min-h-[70vh] ">
        <h1 className=" text-[25px] font-bold m-1"> Welcome To videoSphere</h1>
        <form
          action=""
          className="flex flex-col  min-w-[350px] max-w-[500px] gap-3 p-5 rounded-lg bg-red-100"
        >
          <h1 className=" text-[20px] font-bold text-center">Login</h1>

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
              Login
            </button>
            <p className=" text-blue-300"> Forget Password</p>
          </div>
        </form>
        <div className=" flex gap-3">
          <p>New User?</p>
          <p className=" text-blue-500">
            <Link to={"/signUp"}>SignUp</Link>
          </p>
        </div>
      </div>
    </>
  );
};

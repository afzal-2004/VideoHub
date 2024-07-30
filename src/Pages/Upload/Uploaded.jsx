import { FaCloudUploadAlt } from "react-icons/fa";
export const Uploaded = () => {
  return (
    <>
      <div className=" min-w-[100vw] min-h-[70vh]  flex flex-col  justify-center  items-center">
        <FaCloudUploadAlt className=" text-[40px]  opacity" />
        <input
          type="file"
          name=" upload"
          id=""
          className=" outline-none p-3  cursor-pointer"
        />
        <button className=" mt-[5vh] bg-blue-500 text-white p-3 rounded-md text-[18px] ">
          {" "}
          Upload
        </button>
      </div>
    </>
  );
};

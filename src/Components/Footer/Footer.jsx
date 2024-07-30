import { SiGoogledisplayandvideo360 } from "react-icons/si";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <footer className=" rounded-lg shadow footerNav m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <SiGoogledisplayandvideo360 className="h-8   text-white " />

              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                VidoSphere
              </span>
            </a>
            <ul className=" sm:flex  text-white">
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Licensing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              VidoSphere
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

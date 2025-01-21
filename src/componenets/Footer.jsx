import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse "
            >
              <img
                src="https://raw.githubusercontent.com/sharma62/ccr/refs/heads/main/public/android-chrome-192x192.png"
                className="h-8 rounded-xl"
                alt="CCR Logo"
              />
              <div class="relative group self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {/* <!-- Abbreviated Name (Initials or Short Name) --> */}
                <p class="text-center truncate">CCR</p>

                {/* <!-- Tooltip for Full Name --> */}
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-max bg-gray-800 text-white text-sm px-2 py-1 rounded">
                  comCommunityRoom
                </div>
              </div>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline">
              {props.app_name}
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";

const Sidebar: React.FC = () => {
  const isCollapsed = false; // Toggle this to see collapsed state
  const expandedSections = ["wardrobe"]; // Example of which sections are expanded

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-100 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } flex-shrink-0 hidden md:block`}
    >
      <div className="flex flex-col h-full">
        {/* Logo and Collapse Toggle Section */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          {!isCollapsed ? (
            <div className="flex-1 flex justify-center">
              <svg
                viewBox="0 0 200 50"
                className="h-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background shape */}
                <rect
                  x="5"
                  y="10"
                  width="40"
                  height="30"
                  rx="8"
                  fill="#1f2937"
                />

                {/* The "L" */}
                <path
                  d="M15 15 L15 35 L25 35"
                  stroke="white"
                  stroke-width="3"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                {/* The "Q" dot */}
                <circle cx="32" cy="30" r="3" fill="white" />

                {/* Text */}
                <text
                  x="55"
                  y="33"
                  font-family="Arial, sans-serif"
                  font-weight="bold"
                  font-size="20"
                  fill="#1f2937"
                >
                  LivQualiti
                </text>
              </svg>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <div className="w-8 h-8 rounded bg-[#1f2937] flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
            </div>
          )}

          {/* Collapse Toggle Button */}
          <button className="text-gray-500 hover:text-[#1f2937]">
            {isCollapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-2 overflow-y-auto">
          <ul className="space-y-1">
            {/* Dashboard */}
            <li>
              <a
                href="#"
                className={`flex items-center py-2 ${
                  isCollapsed ? "justify-center px-2" : "px-3"
                } rounded-md text-[#1f2937] font-medium hover:bg-gray-50 group`}
                title={isCollapsed ? "Overview" : ""}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    isCollapsed ? "" : "mr-3"
                  } text-gray-500 group-hover:text-[#1f2937]`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                {!isCollapsed && <span>Overview</span>}
              </a>
            </li>

            {/* My Wardrobe - Dropdown */}
            <li>
              <div
                className={`py-2 ${
                  isCollapsed ? "justify-center px-2" : "px-3"
                } rounded-md text-[#1f2937] font-medium cursor-pointer hover:bg-gray-50 flex items-center ${
                  isCollapsed ? "justify-center" : "justify-between"
                }`}
                title={isCollapsed ? "My Wardrobe" : ""}
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      isCollapsed ? "" : "mr-3"
                    } text-gray-500`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {!isCollapsed && <span>My Wardrobe</span>}
                </div>
                {!isCollapsed && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                      expandedSections.includes("wardrobe")
                        ? "transform rotate-180"
                        : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              {/* Submenu - Only show if not collapsed and section is expanded */}
              {!isCollapsed && expandedSections.includes("wardrobe") && (
                <ul className="ml-8 mt-1 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="block py-1.5 px-3 rounded-md text-gray-600 hover:text-[#1f2937] hover:bg-gray-50 text-sm"
                    >
                      All Items
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-1.5 px-3 rounded-md text-gray-600 hover:text-[#1f2937] hover:bg-gray-50 text-sm"
                    >
                      Add New Item
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-1.5 px-3 rounded-md text-gray-600 hover:text-[#1f2937] hover:bg-gray-50 text-sm"
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-1.5 px-3 rounded-md text-gray-600 hover:text-[#1f2937] hover:bg-gray-50 text-sm"
                    >
                      Seasons
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-1.5 px-3 rounded-md text-gray-600 hover:text-[#1f2937] hover:bg-gray-50 text-sm"
                    >
                      Colors
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Outfits - Dropdown */}
            <li>
              <div
                className={`py-2 ${
                  isCollapsed ? "justify-center px-2" : "px-3"
                } rounded-md text-[#1f2937] font-medium cursor-pointer hover:bg-gray-50 flex items-center ${
                  isCollapsed ? "justify-center" : "justify-between"
                }`}
                title={isCollapsed ? "Outfits" : ""}
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      isCollapsed ? "" : "mr-3"
                    } text-gray-500`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  {!isCollapsed && <span>Outfits</span>}
                </div>
                {!isCollapsed && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </li>

            {/* Recommendations */}
            <li>
              <div
                className={`py-2 ${
                  isCollapsed ? "justify-center px-2" : "px-3"
                } rounded-md text-[#1f2937] font-medium cursor-pointer hover:bg-gray-50 flex items-center ${
                  isCollapsed ? "justify-center" : "justify-between"
                }`}
                title={isCollapsed ? "Recommendations" : ""}
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      isCollapsed ? "" : "mr-3"
                    } text-gray-500`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {!isCollapsed && <span>Recommendations</span>}
                </div>
                {!isCollapsed && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </li>

            {/* Deals & Trends */}
            <li>
              <div
                className={`py-2 ${
                  isCollapsed ? "justify-center px-2" : "px-3"
                } rounded-md text-[#1f2937] font-medium cursor-pointer hover:bg-gray-50 flex items-center ${
                  isCollapsed ? "justify-center" : "justify-between"
                }`}
                title={isCollapsed ? "Deals & Trends" : ""}
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      isCollapsed ? "" : "mr-3"
                    } text-gray-500`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {!isCollapsed && <span>Deals & Trends</span>}
                </div>
                {!isCollapsed && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* User Profile - Bottom */}
        <div className="p-4 border-t border-gray-100">
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-[#1f2937] font-medium">
              US
            </div>
            {!isCollapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium text-[#1f2937]">User Name</p>
                <p className="text-xs text-gray-500">user@example.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

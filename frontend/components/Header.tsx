const Header = () => {
  return (
    <header className="py-6 px-4 border-b border-gray-100 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <nav className="flex justify-between items-center">
          <div className="h-10 cursor-pointer">
            <svg
              viewBox="0 0 200 50"
              className="h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background shape */}
              <rect x="5" y="10" width="40" height="30" rx="8" fill="#1f2937" />

              {/* The "L" */}
              <path
                d="M15 15 L15 35 L25 35"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* The "Q" dot */}
              <circle cx="32" cy="30" r="3" fill="white" />

              {/* Text */}
              <text
                x="55"
                y="33"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                fontSize="20"
                fill="#1f2937"
              >
                LivQualiti
              </text>

              {/* Stylish underline */}
              <path
                d="M55 38 L145 38"
                stroke="#1f2937"
                strokeWidth="1.5"
                strokeDasharray="1,3"
              />
            </svg>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            <li className="cursor-pointer font-medium text-gray-700 hover:text-gray-900 transition">
              Home
            </li>
            <li className="cursor-pointer font-medium text-gray-700 hover:text-gray-900 transition">
              About
            </li>
            <li className="cursor-pointer font-medium text-gray-700 hover:text-gray-900 transition">
              Services
            </li>
            <li className="cursor-pointer font-medium text-gray-700 hover:text-gray-900 transition">
              Contact
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900 font-medium transition cursor-pointer">
              Signup
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition w-fit cursor-pointer">
              Login
            </button>
          </div>

          {/* Mobile Menu Button (Hidden on desktop) */}
          <button className="md:hidden p-2 cursor-pointer text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

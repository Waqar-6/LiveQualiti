// DashboardStats.tsx
import React from "react";

const DashboardStats: React.FC = () => {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Items */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Items</p>
              <p className="text-3xl font-bold text-[#1f2937] mt-2">127</p>
              <p className="text-sm text-green-600 mt-1">
                <span className="inline-flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +8 this month
                </span>
              </p>
            </div>
            <div className="bg-gray-100 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#1f2937]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Outfits Created */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Outfits Created
              </p>
              <p className="text-3xl font-bold text-[#1f2937] mt-2">23</p>
              <p className="text-sm text-green-600 mt-1">
                <span className="inline-flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +5 this week
                </span>
              </p>
            </div>
            <div className="bg-gray-100 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#1f2937]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8 17.926 17.926 0 00-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Most Worn Category */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Most Worn</p>
              <p className="text-3xl font-bold text-[#1f2937] mt-2">Tops</p>
              <p className="text-sm text-gray-500 mt-1">
                <span className="inline-flex items-center">
                  65% of total wears
                </span>
              </p>
            </div>
            <div className="bg-gray-100 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#1f2937]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Wardrobe Value */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Wardrobe Value
              </p>
              <p className="text-3xl font-bold text-[#1f2937] mt-2">$2,847</p>
              <p className="text-sm text-gray-500 mt-1">
                <span className="inline-flex items-center">
                  Avg. $22 per item
                </span>
              </p>
            </div>
            <div className="bg-gray-100 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#1f2937]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Recent Activity - Spans 2 columns on larger screens */}
        <div className="sm:col-span-2 bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1f2937]">
              Recent Activity
            </h3>
            <span className="text-sm text-gray-500">Last 7 days</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Added Black Wool Coat
                  </p>
                  <p className="text-xs text-gray-500">Winter • Outerwear</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8 17.926 17.926 0 00-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Created "Business Casual" outfit
                  </p>
                  <p className="text-xs text-gray-500">
                    Navy blazer + White shirt + Khaki pants
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400">1 day ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Marked "Summer Dress" as worn
                  </p>
                  <p className="text-xs text-gray-500">Beach vacation outfit</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">3 days ago</span>
            </div>
          </div>
        </div>

        {/* Quick Stats - Spans 2 columns on larger screens */}
        <div className="sm:col-span-2 bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
            Wardrobe Breakdown
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1f2937]">34</div>
              <div className="text-sm text-gray-600">Tops</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1f2937]">28</div>
              <div className="text-sm text-gray-600">Bottoms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1f2937]">15</div>
              <div className="text-sm text-gray-600">Outerwear</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1f2937]">22</div>
              <div className="text-sm text-gray-600">Shoes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1f2937]">18</div>
              <div className="text-sm text-gray-600">Accessories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1f2937]">10</div>
              <div className="text-sm text-gray-600">Unworn Items</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;

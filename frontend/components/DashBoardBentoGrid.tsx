// DashboardBentoGrid.tsx
import React from "react";

const DashboardBentoGrid: React.FC = () => {
  return (
    <section className="p-6 pt-0">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Weather & Outfit Suggestion - Large Card */}
        <div className="md:col-span-4 bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-[#1f2937]">
                Today's Weather & Outfit
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                AI suggestion based on weather conditions
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#1f2937]">22°C</div>
              <div className="text-sm text-gray-600">Sunny, Light breeze</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-[#1f2937] mb-3">
                Suggested Outfit
              </h4>
              <div className="grid grid-cols-4 gap-3">
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500 text-center leading-tight">
                    White
                    <br />
                    T-shirt
                  </span>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500 text-center leading-tight">
                    Blue
                    <br />
                    Jeans
                  </span>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500 text-center leading-tight">
                    White
                    <br />
                    Sneakers
                  </span>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
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
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Perfect for today's sunny weather
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-[#1f2937] mb-3">
                This Week
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Tomorrow</span>
                  <span className="text-sm font-medium text-[#1f2937]">
                    25°C Sunny
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Wednesday</span>
                  <span className="text-sm font-medium text-[#1f2937]">
                    19°C Cloudy
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Thursday</span>
                  <span className="text-sm font-medium text-[#1f2937]">
                    16°C Rain
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions - Small Card */}
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-[#1f2937] hover:bg-gray-50 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
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
              <span className="text-sm font-medium text-[#1f2937]">
                Upload Item
              </span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-[#1f2937] hover:bg-gray-50 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
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
              <span className="text-sm font-medium text-[#1f2937]">
                Create Outfit
              </span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-[#1f2937] hover:bg-gray-50 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3a4 4 0 118 0v4m-8 0h8m-8 0H3a2 2 0 00-2 2v6a2 2 0 002 2h1m8-8h8a2 2 0 012 2v6a2 2 0 01-2 2h-1m-1-6H3m8 0v8"
                />
              </svg>
              <span className="text-sm font-medium text-[#1f2937]">
                Plan Week
              </span>
            </button>
          </div>
        </div>

        {/* Wardrobe Insights - Medium Card */}
        <div className="md:col-span-3 bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1f2937]">
              Wardrobe Insights
            </h3>
            <span className="text-sm text-gray-600">This month</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#1f2937]">127</div>
              <div className="text-sm text-gray-600">Total Items</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#1f2937]">23</div>
              <div className="text-sm text-gray-600">Outfits</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Most worn</span>
              <span className="text-sm font-medium text-[#1f2937]">
                Black Blazer
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Least worn</span>
              <span className="text-sm font-medium text-[#1f2937]">
                Yellow Cardigan
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Unworn items</span>
              <span className="text-sm font-medium text-[#1f2937]">
                12 items
              </span>
            </div>
          </div>
        </div>

        {/* Recent Activity - Medium Card */}
        <div className="md:col-span-3 bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1f2937]">
              Recent Activity
            </h3>
            <span className="text-sm text-gray-600">Last 7 days</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#1f2937] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1f2937]">
                  Added Black Wool Coat
                </p>
                <p className="text-xs text-gray-600">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#1f2937] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1f2937]">
                  Created "Office Chic" outfit
                </p>
                <p className="text-xs text-gray-600">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#1f2937] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1f2937]">
                  Marked Navy Blazer as worn
                </p>
                <p className="text-xs text-gray-600">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-[#1f2937] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1f2937]">
                  Added Red Scarf
                </p>
                <p className="text-xs text-gray-600">3 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Style Challenge - Small Card */}
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1f2937]">
              Style Challenge
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
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

          <div className="text-center">
            <div className="text-3xl font-bold text-[#1f2937] mb-2">7-Day</div>
            <div className="text-sm text-gray-600 mb-4">
              No-Repeat Challenge
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-[#1f2937]">3/7 days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#1f2937] h-2 rounded-full"
                  style={{ width: "43%" }}
                ></div>
              </div>
            </div>

            <button className="w-full bg-[#1f2937] text-white py-2 px-4 rounded-md text-sm hover:bg-gray-700 transition-colors">
              Continue Challenge
            </button>
          </div>
        </div>

        {/* Deals & Recommendations - Small Card */}
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1f2937]">
              Recommendations
            </h3>
            <span className="text-xs bg-[#1f2937] text-white px-2 py-1 rounded">
              NEW
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3 border border-gray-200 rounded-lg">
              <p className="text-sm font-medium text-[#1f2937]">
                Winter Coats - 40% off
              </p>
              <p className="text-xs text-gray-600">
                Perfect for your style at Zara
              </p>
            </div>
            <div className="p-3 border border-gray-200 rounded-lg">
              <p className="text-sm font-medium text-[#1f2937]">
                Add Red Accessories
              </p>
              <p className="text-xs text-gray-600">
                Missing from your wardrobe
              </p>
            </div>
            <div className="p-3 border border-gray-200 rounded-lg">
              <p className="text-sm font-medium text-[#1f2937]">
                Ankle Boots Trending
              </p>
              <p className="text-xs text-gray-600">Popular this season</p>
            </div>
          </div>

          <button className="w-full mt-4 border border-[#1f2937] text-[#1f2937] py-2 px-4 rounded-md text-sm hover:bg-[#1f2937] hover:text-white transition-colors">
            View All
          </button>
        </div>

        {/* Unworn Items - Small Card */}
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1f2937]">
              Unworn Items
            </h3>
            <div className="text-2xl font-bold text-[#1f2937]">12</div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Floral Dress</span>
              <span className="text-xs text-gray-500">2 weeks</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Denim Jacket</span>
              <span className="text-xs text-gray-500">1 month</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Red Cardigan</span>
              <span className="text-xs text-gray-500">6 weeks</span>
            </div>
          </div>

          <button className="w-full bg-[#1f2937] text-white py-2 px-4 rounded-md text-sm hover:bg-gray-700 transition-colors">
            Create Outfit
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardBentoGrid;

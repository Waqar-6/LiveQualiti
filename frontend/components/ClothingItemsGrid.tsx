"use client";
import React, { useState } from "react";

const ClothingItemsGrid: React.FC = () => {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");

  // Toggle functions for multi-select filters
  const toggleFilter = (
    value: string,
    currentArray: string[],
    setter: (arr: string[]) => void
  ) => {
    if (currentArray.includes(value)) {
      setter(currentArray.filter((item) => item !== value));
    } else {
      setter([...currentArray, value]);
    }
  };

  // Mock data for demonstration
  const clothingItems = [
    {
      id: 1,
      image: "/api/placeholder/300/400",
      name: "Black Wool Coat",
      category: "Outerwear",
      season: "Winter",
      color: "Black",
    },
    {
      id: 6,
      image: "/api/placeholder/300/400",
      name: "Black Wool Coat",
      category: "Outerwear",
      season: "Winter",
      color: "Black",
    },
    {
      id: 2,
      image: "/api/placeholder/300/400",
      name: "Black Wool Coat",
      category: "Outerwear",
      season: "Winter",
      color: "Black",
    },
    {
      id: 3,
      image: "/api/placeholder/300/400",
      name: "Black Wool Coat",
      category: "Outerwear",
      season: "Winter",
      color: "Black",
    },
    {
      id: 4,
      image: "/api/placeholder/300/400",
      name: "Black Wool Coat",
      category: "Outerwear",
      season: "Winter",
      color: "Black",
    },
    {
      id: 5,
      image: "/api/placeholder/300/400",
      name: "Black Wool Coat",
      category: "Outerwear",
      season: "Winter",
      color: "Black",
    },
  ];

  const totalItems = clothingItems.length;
  const filteredItems = totalItems; // This would be calculated based on actual filtering

  return (
    <section className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#1f2937]">My Wardrobe</h2>
      </div>

      {/* Filter and Sort Bar */}
      <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
        {/* Left Side - Item Count */}
        <div className="text-gray-600">
          Showing{" "}
          <span className="font-medium text-[#1f2937]">{filteredItems}</span> of{" "}
          <span className="font-medium text-[#1f2937]">{totalItems}</span> items
        </div>

        {/* Right Side - Filters and Sort */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937] w-48"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]">
              <span>Category</span>
              {selectedCategories.length > 0 && (
                <span className="bg-[#1f2937] text-white text-xs px-1.5 py-0.5 rounded-full">
                  {selectedCategories.length}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown would be implemented with state management */}
          </div>

          {/* Season Filter */}
          <div className="relative">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]">
              <span>Season</span>
              {selectedSeasons.length > 0 && (
                <span className="bg-[#1f2937] text-white text-xs px-1.5 py-0.5 rounded-full">
                  {selectedSeasons.length}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Color Filter */}
          <div className="relative">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]">
              <span>Color</span>
              {selectedColors.length > 0 && (
                <span className="bg-[#1f2937] text-white text-xs px-1.5 py-0.5 rounded-full">
                  {selectedColors.length}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* More Filters Button */}
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]">
            <span>More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-300"></div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937] bg-white"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="most-worn">Most Worn</option>
              <option value="least-worn">Least Worn</option>
              <option value="never-worn">Never Worn</option>
              <option value="recently-worn">Recently Worn</option>
              <option value="alphabetical">A-Z</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${
                viewMode === "grid"
                  ? "bg-[#1f2937] text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${
                viewMode === "list"
                  ? "bg-[#1f2937] text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Active Filters Row */}
      {(selectedCategories.length > 0 ||
        selectedSeasons.length > 0 ||
        selectedColors.length > 0 ||
        searchQuery) && (
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="text-sm text-gray-600">Active filters:</span>

          {/* Search Query */}
          {searchQuery && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-[#1f2937] text-sm rounded-md">
              Search: "{searchQuery}"
              <button
                onClick={() => setSearchQuery("")}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          )}

          {/* Category Filters */}
          {selectedCategories.map((category) => (
            <span
              key={category}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-[#1f2937] text-sm rounded-md"
            >
              {category}
              <button
                onClick={() =>
                  toggleFilter(
                    category,
                    selectedCategories,
                    setSelectedCategories
                  )
                }
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))}

          {/* Season Filters */}
          {selectedSeasons.map((season) => (
            <span
              key={season}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-[#1f2937] text-sm rounded-md"
            >
              {season}
              <button
                onClick={() =>
                  toggleFilter(season, selectedSeasons, setSelectedSeasons)
                }
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))}

          {/* Color Filters */}
          {selectedColors.map((color) => (
            <span
              key={color}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-[#1f2937] text-sm rounded-md"
            >
              {color}
              <button
                onClick={() =>
                  toggleFilter(color, selectedColors, setSelectedColors)
                }
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))}

          {/* Clear All Button */}
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategories([]);
              setSelectedSeasons([]);
              setSelectedColors([]);
            }}
            className="text-sm text-[#1f2937] hover:text-gray-700 underline"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Grid Component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {clothingItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Description Panel */}
              <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <h3 className="font-semibold text-[#1f2937] text-sm leading-tight">
                  {item.name}
                </h3>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Category</span>
                    <span className="text-[#1f2937] font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Season</span>
                    <span className="text-[#1f2937] font-medium">
                      {item.season}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Color</span>
                    <span className="text-[#1f2937] font-medium">
                      {item.color}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClothingItemsGrid;

// OutfitsGrid.tsx
import React from "react";

const OutfitsGrid: React.FC = () => {
  // Mock data for demonstration - outfits with multiple clothing items
  const outfits = [
    {
      id: 1,
      name: "Business Casual",
      images: [
        "/api/placeholder/150/200",
        "/api/placeholder/150/180",
        "/api/placeholder/150/220",
        "/api/placeholder/150/190",
      ],
      itemCount: 4,
      category: "Work",
      season: "All Season",
      occasion: "Business",
    },
    {
      id: 2,
      name: "Summer Chic",
      images: [
        "/api/placeholder/150/210",
        "/api/placeholder/150/180",
        "/api/placeholder/150/200",
      ],
      itemCount: 3,
      category: "Casual",
      season: "Summer",
      occasion: "Casual",
    },
    {
      id: 3,
      name: "Weekend Vibes",
      images: ["/api/placeholder/150/240", "/api/placeholder/150/160"],
      itemCount: 2,
      category: "Casual",
      season: "Spring",
      occasion: "Weekend",
    },
    {
      id: 4,
      name: "Date Night",
      images: [
        "/api/placeholder/150/220",
        "/api/placeholder/150/180",
        "/api/placeholder/150/200",
        "/api/placeholder/150/190",
        "/api/placeholder/150/210",
      ],
      itemCount: 5,
      category: "Formal",
      season: "All Season",
      occasion: "Date",
    },
    {
      id: 5,
      name: "Gym Session",
      images: [
        "/api/placeholder/150/180",
        "/api/placeholder/150/200",
        "/api/placeholder/150/190",
      ],
      itemCount: 3,
      category: "Sport",
      season: "All Season",
      occasion: "Workout",
    },
    {
      id: 6,
      name: "Office Meeting",
      images: [
        "/api/placeholder/150/200",
        "/api/placeholder/150/220",
        "/api/placeholder/150/180",
        "/api/placeholder/150/210",
      ],
      itemCount: 4,
      category: "Work",
      season: "All Season",
      occasion: "Meeting",
    },
  ];

  const totalOutfits = outfits.length;

  // Pinterest/Masonry style image layout
  const renderMasonryGrid = (images: string[], itemCount: number) => {
    const displayImages = images.slice(0, 4); // Show max 4 images
    const remainingCount = Math.max(0, itemCount - 4);

    if (displayImages.length === 1) {
      return (
        <div className="w-full h-full">
          <img
            src={displayImages[0]}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      );
    }

    if (displayImages.length === 2) {
      return (
        <div className="flex flex-col gap-2 h-full">
          <div className="h-3/5">
            <img
              src={displayImages[0]}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="h-2/5">
            <img
              src={displayImages[1]}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      );
    }

    if (displayImages.length === 3) {
      return (
        <div className="grid grid-cols-2 gap-2 h-full">
          <div className="flex flex-col gap-2">
            <div className="h-3/5">
              <img
                src={displayImages[0]}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="h-2/5">
              <img
                src={displayImages[1]}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="h-full">
            <img
              src={displayImages[2]}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      );
    }

    // 4 or more images - Complex masonry layout
    return (
      <div className="grid grid-cols-3 gap-2 h-full">
        {/* Left column - two images stacked */}
        <div className="flex flex-col gap-2">
          <div className="h-2/3">
            <img
              src={displayImages[0]}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="h-1/3">
            <img
              src={displayImages[1]}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Center column - single tall image */}
        <div className="h-full">
          <img
            src={displayImages[2]}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Right column - one image with potential overlay */}
        <div className="relative h-full">
          <img
            src={displayImages[3]}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
          {remainingCount > 0 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-md">
              <span className="text-white font-semibold text-sm">
                +{remainingCount}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#1f2937]">My Outfits</h2>
      </div>

      {/* Filter and Sort Bar */}
      <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
        {/* Left Side - Item Count */}
        <div className="text-gray-600">
          Showing{" "}
          <span className="font-medium text-[#1f2937]">{totalOutfits}</span> of{" "}
          <span className="font-medium text-[#1f2937]">{totalOutfits}</span>{" "}
          outfits
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
              placeholder="Search outfits..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937] w-48"
            />
          </div>

          {/* Category Filter */}
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]">
            <span>Category</span>
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

          {/* Occasion Filter */}
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]">
            <span>Occasion</span>
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

          {/* Season Filter */}
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]">
            <span>Season</span>
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
          <select className="pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937] bg-white">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="most-worn">Most Worn</option>
            <option value="least-worn">Least Worn</option>
            <option value="never-worn">Never Worn</option>
            <option value="alphabetical">A-Z</option>
          </select>

          {/* View Toggle */}
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button className="p-2 bg-[#1f2937] text-white">
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
            <button className="p-2 text-gray-600 hover:bg-gray-50">
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

      {/* Outfits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {outfits.map((outfit) => (
          <div
            key={outfit.id}
            className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden p-3">
              {/* Masonry/Pinterest Style Image Grid */}
              <div className="w-full h-full transition-transform duration-300 group-hover:scale-105">
                {renderMasonryGrid(outfit.images, outfit.itemCount)}
              </div>

              {/* Hover Description Panel */}
              <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <h3 className="font-semibold text-[#1f2937] text-sm leading-tight">
                  {outfit.name}
                </h3>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Items</span>
                    <span className="text-[#1f2937] font-medium">
                      {outfit.itemCount} pieces
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Occasion</span>
                    <span className="text-[#1f2937] font-medium">
                      {outfit.occasion}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Season</span>
                    <span className="text-[#1f2937] font-medium">
                      {outfit.season}
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

export default OutfitsGrid;

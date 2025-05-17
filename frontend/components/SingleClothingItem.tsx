// SingleClothingItem.tsx
import React from "react";

const SingleClothingItem: React.FC = () => {
  // Mock data for the clothing item
  const clothingItem = {
    id: 1,
    name: "Black Wool Coat",
    image: "/api/placeholder/600/800",
    category: "Outerwear",
    season: "Winter",
    color: "Black",
    material: "Wool",
    description:
      "Classic black wool coat perfect for winter weather. Elegant and timeless design.",
    purchaseInfo: {
      store: "Zara",
      price: 120,
      dateAdded: "2024-01-15",
    },
    wearCount: 12,
    lastWorn: "2024-11-20",
    costPerWear: 10,
    careInstructions: "Dry clean only. Store on padded hanger.",
    stylingNotes:
      "Pairs beautifully with both casual jeans and formal dresses. The classic cut makes it versatile for any occasion.",
    weatherCompatibility: 85,
  };

  // Mock data for outfits containing this item
  const outfitsWithItem = [
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
    },
    {
      id: 2,
      name: "Winter Chic",
      images: [
        "/api/placeholder/150/210",
        "/api/placeholder/150/180",
        "/api/placeholder/150/200",
      ],
      itemCount: 3,
    },
    {
      id: 3,
      name: "Date Night",
      images: [
        "/api/placeholder/150/220",
        "/api/placeholder/150/180",
        "/api/placeholder/150/200",
        "/api/placeholder/150/190",
        "/api/placeholder/150/210",
      ],
      itemCount: 5,
    },
  ];

  // Mock data for suggested items from retailers
  const suggestedItems = [
    {
      id: 1,
      name: "Cashmere Scarf",
      image: "/api/placeholder/150/200",
      price: 85,
      retailer: "H&M",
      category: "Accessories",
    },
    {
      id: 2,
      name: "Wool Turtleneck",
      image: "/api/placeholder/150/200",
      price: 45,
      retailer: "Uniqlo",
      category: "Tops",
    },
    {
      id: 3,
      name: "Leather Gloves",
      image: "/api/placeholder/150/200",
      price: 35,
      retailer: "Zara",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Ankle Boots",
      image: "/api/placeholder/150/200",
      price: 90,
      retailer: "Mango",
      category: "Shoes",
    },
  ];

  // Mock wear history data
  const wearHistory = [
    { date: "2024-11-20", occasion: "Work meeting" },
    { date: "2024-11-15", occasion: "Dinner out" },
    { date: "2024-11-10", occasion: "Shopping" },
    { date: "2024-11-05", occasion: "Work" },
  ];

  // Masonry grid function for outfit cards
  const renderMasonryGrid = (images: string[], itemCount: number) => {
    const displayImages = images.slice(0, 4);
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

    return (
      <div className="grid grid-cols-3 gap-2 h-full">
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
        <div className="h-full">
          <img
            src={displayImages[2]}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
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
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Back button */}
        <button className="flex items-center text-gray-600 hover:text-[#1f2937] mb-8 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Wardrobe
        </button>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Image and Info Card */}
          <div className="lg:col-span-8 bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Image - Takes 2/3 of the space */}
              <div className="md:col-span-2 aspect-[3/4] md:aspect-auto">
                <img
                  src={clothingItem.image}
                  alt={clothingItem.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Basic Info - Takes 1/3 of the space */}
              {/* Basic Info - Takes 1/3 of the space */}
              <div className="p-6">
                <h1 className="text-2xl font-bold text-[#1f2937] mb-4">
                  {clothingItem.name}
                </h1>
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-gray-600 text-sm">Category</span>
                    <p className="font-medium text-[#1f2937]">
                      {clothingItem.category}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Season</span>
                    <p className="font-medium text-[#1f2937]">
                      {clothingItem.season}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Color</span>
                    <p className="font-medium text-[#1f2937]">
                      {clothingItem.color}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Material</span>
                    <p className="font-medium text-[#1f2937]">
                      {clothingItem.material}
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-gray-600 text-sm">Description</span>
                  <p className="text-gray-800 text-sm mt-1">
                    {clothingItem.description}
                  </p>
                </div>

                {/* Action Buttons at bottom of details */}
                <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                  <button className="w-10 h-10 bg-[#1f2937] text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center group relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                    <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Add to Outfit
                    </div>
                  </button>
                  <button className="w-10 h-10 bg-white text-[#1f2937] border border-gray-200 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center group relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Edit Item
                    </div>
                  </button>
                  <button className="w-10 h-10 bg-white text-red-600 border border-gray-200 rounded-full hover:bg-red-50 transition-colors flex items-center justify-center group relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Delete Item
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Usage Stats Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
                Usage Statistics
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1f2937]">
                    {clothingItem.wearCount}
                  </div>
                  <div className="text-xs text-gray-600">Times Worn</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1f2937]">
                    ${clothingItem.costPerWear}
                  </div>
                  <div className="text-xs text-gray-600">Cost/Wear</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-[#1f2937]">
                    {clothingItem.lastWorn.split("-").slice(1).join("/")}
                  </div>
                  <div className="text-xs text-gray-600">Last Worn</div>
                </div>
              </div>
            </div>

            {/* Weather Compatibility Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
                Weather Compatibility
              </h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#1f2937] font-medium">
                  Today's Score
                </span>
                <span className="text-2xl font-bold text-[#1f2937]">
                  {clothingItem.weatherCompatibility}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-[#1f2937] h-2 rounded-full"
                  style={{ width: `${clothingItem.weatherCompatibility}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                Perfect for today's weather
              </p>
            </div>

            {/* Purchase Info Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
                Purchase Info
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Store</span>
                  <span className="font-medium text-[#1f2937]">
                    {clothingItem.purchaseInfo.store}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Price</span>
                  <span className="font-medium text-[#1f2937]">
                    ${clothingItem.purchaseInfo.price}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Added</span>
                  <span className="font-medium text-[#1f2937]">
                    {clothingItem.purchaseInfo.dateAdded}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Activity Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
                Recent Wears
              </h3>
              <div className="space-y-3">
                {wearHistory.slice(0, 4).map((wear, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-800 text-sm">
                      {wear.occasion}
                    </span>
                    <span className="text-xs text-gray-600">
                      {wear.date.split("-").slice(1).join("/")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Care Instructions Card */}
          <div className="lg:col-span-6 bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
              Care Instructions
            </h3>
            <p className="text-gray-800">{clothingItem.careInstructions}</p>
          </div>

          {/* Styling Notes Card */}
          <div className="lg:col-span-6 bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
              Styling Notes
            </h3>
            <p className="text-gray-800 mb-4">{clothingItem.stylingNotes}</p>
            <button className="text-[#1f2937] text-sm hover:underline">
              Edit notes
            </button>
          </div>

          {/* Outfits Carousel Card */}
          <div className="lg:col-span-12 bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[#1f2937] mb-6">
              Outfits with this Item
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {outfitsWithItem.map((outfit) => (
                <div
                  key={outfit.id}
                  className="flex-shrink-0 w-64 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden p-3">
                    <div className="w-full h-full">
                      {renderMasonryGrid(outfit.images, outfit.itemCount)}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-[#1f2937] mb-1">
                      {outfit.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {outfit.itemCount} items
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Items Carousel Card */}
          <div className="lg:col-span-12 bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
              Items that go well with this
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Curated suggestions from top retailers
            </p>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {suggestedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-48 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-medium text-[#1f2937] text-sm mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      {item.retailer} • {item.category}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-[#1f2937]">
                        ${item.price}
                      </span>
                      <button className="text-xs bg-[#1f2937] text-white px-2 py-1 rounded hover:bg-gray-700 transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default SingleClothingItem;

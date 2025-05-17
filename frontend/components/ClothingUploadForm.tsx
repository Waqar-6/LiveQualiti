// ClothingUploadForm.tsx
import React from "react";

// Enum types based on your backend
enum Category {
  TOPS = "TOPS",
  BOTTOMS = "BOTTOMS",
  OUTERWEAR = "OUTERWEAR",
  SHOES = "SHOES",
  ACCESSORIES = "ACCESSORIES",
}

enum Season {
  SPRING = "SPRING",
  SUMMER = "SUMMER",
  FALL = "FALL",
  WINTER = "WINTER",
  ALL_SEASON = "ALL_SEASON",
}

enum Color {
  BLACK = "BLACK",
  WHITE = "WHITE",
  GRAY = "GRAY",
  BROWN = "BROWN",
  BEIGE = "BEIGE",
  NAVY = "NAVY",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  PINK = "PINK",
  PURPLE = "PURPLE",
  YELLOW = "YELLOW",
  ORANGE = "ORANGE",
  MULTI = "MULTI",
}

const ClothingUploadForm: React.FC = () => {
  return (
    <div className="p-4 md:p-6 overflow-y-auto max-h-[80vh]">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-[#1f2937]">
          Add New Clothing Item
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-1">
          Upload a new item to your wardrobe
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4">
        {/* Image Upload - Moved to top */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image
          </label>
          <div className="mt-1 flex justify-center px-4 pt-4 pb-4 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-10 w-10 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col sm:flex-row justify-center text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-[#1f2937] hover:text-[#374151] focus-within:outline-none"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                  />
                </label>
                <p className="sm:pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]"
            placeholder="e.g. Black Cotton T-shirt"
            maxLength={50}
            required
          />
          <p className="text-xs text-gray-500 mt-1">Maximum 50 characters</p>
        </div>

        {/* Two columns for smaller fields on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Category Dropdown */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]"
              required
            >
              <option value="">Select category</option>
              {Object.values(Category).map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0) +
                    category.slice(1).toLowerCase().replace("_", " ")}
                </option>
              ))}
            </select>
          </div>

          {/* Season Dropdown */}
          <div>
            <label
              htmlFor="season"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Season <span className="text-red-500">*</span>
            </label>
            <select
              id="season"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]"
              required
            >
              <option value="">Select season</option>
              {Object.values(Season).map((season) => (
                <option key={season} value={season}>
                  {season.charAt(0) +
                    season.slice(1).toLowerCase().replace("_", " ")}
                </option>
              ))}
            </select>
          </div>

          {/* Color Dropdown */}
          <div className="sm:col-span-2">
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Color <span className="text-red-500">*</span>
            </label>
            <select
              id="color"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]"
              required
            >
              <option value="">Select color</option>
              {Object.values(Color).map((color) => (
                <option key={color} value={color}>
                  {color.charAt(0) +
                    color.slice(1).toLowerCase().replace("_", " ")}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Description Input */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            rows={3}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:border-[#1f2937]"
            placeholder="A brief description of your clothing item"
            maxLength={200}
            required
          />
          <p className="text-xs text-gray-500 mt-1">Maximum 200 characters</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1f2937] text-white py-2 px-4 text-sm md:text-base rounded-md hover:bg-[#374151] focus:outline-none focus:ring-2 focus:ring-[#1f2937] focus:ring-offset-2"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ClothingUploadForm;

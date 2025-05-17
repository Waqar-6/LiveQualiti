import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Live stylish. Live organized.
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Your smart wardrobe assistant that helps you plan outfits, track
            clothing, and stay ready—rain or shine.
          </p>
          <div className="space-y-3 pt-2">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition w-fit cursor-pointer">
              Get Started
            </button>
            <p className="text-sm text-gray-600">
              Join now and experience a new level of style and simplicity.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="h-full flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-md">
            <Image
              src="/heroclothingimg.png"
              alt="collection of dark clothing items"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

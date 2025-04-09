import { Button } from "@/components/ui/button";
import heroImage from "../../assets/heroimage.png";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-24 pb-6 px-4 sm:px-6 lg:px-8">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-8 relative">
        {/* star badge  */}
        <div className="flex items-center gap-2 bg-accent w-fit px-4 py-2 rounded-full transition-colors cursor-pointer group ">
          <span className="text-blue-600 group-hover:scale-110 transition-transform">
            ✨
          </span>
          <span className="text-sm font-medium">
            Live stylish, Live organized, LivQualiti.
          </span>
        </div>
        {/* star badge end */}

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          LivQualiti - Your Ultimate Digital Wardrobe.
        </h1>

        <p className="text-muted-foreground leading-tight text-md md:text-lg max-w-xl">
          LiveQualiti is a smart wardrobe management platform that helps users
          effortlessly organize their clothing, plan outfits, track accessories,
          and discover fashion deals from top retailers. Whether you're
          optimizing your wardrobe or hunting for the perfect style
          recommendation, LiveQualiti is your go-to fashion companion.
        </p>

        <div className="flex flex-col md:flex md:flex-row items-center gap-8">
          <Button className={"cursor-pointer text-center px-8"}>
            Try LivQualiti
          </Button>
          <span>or</span>
          <Button
            variant={"outline"}
            className={"cursor-pointer text-center px-8"}
          >
            Login
          </Button>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 shadow-md">
        <div className="relative">
          <img
            src={heroImage}
            alt="image of a beautiful lady standing with a clean tshirt in a hanger"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import cleaning from "@/assets/cleaner.jpeg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center w-full h-screen px-24 py-8 gap-x-12">
      <div className="w-full  flex flex-col start space-y-5">
        <p className="font-passionOne font-bold text-6xl">
          Find Trusted Cleaning Help, Fast.
        </p>
        <p>
          Whether it’s a quick tidy-up or a deep clean, connect instantly with
          skilled taskers ready to make your space shine.
        </p>
        <div className="flex items-center space-x-2.5">
          <button className="btn btn-primary">
            Get Started
          </button>
          <button className="btn btn-text">
            How it works
          </button>
        </div>
      </div>
      <div className="relative w-full max-h-[600px] h-full rounded-3xl overflow-hidden">
        <Image src={cleaning} alt="cleaning" fill className="object-cover" />
      </div>
    </section>
  );
};

export default Hero;

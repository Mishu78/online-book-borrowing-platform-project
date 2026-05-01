import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
  style={{ backgroundImage: "url('/banner.jpg')" }}
  className="h-[80vh] w-full bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center text-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Next Read
          </h1>

            
            <Link href="/">
              <Button variant="outline" className="text-white font-bold pl-5 pr-5 pt-4 pb-4 mt-5 bg-red-600">
             Browse Now
              </Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
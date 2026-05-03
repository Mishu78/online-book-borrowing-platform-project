import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import NewArrivalsPage from "@/components/NewArrivals";
import TopBookBorrow from "@/components/TopBookBorrow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner />
       <div className="mt-6">
        <NewArrivalsPage />
      </div>
     <TopBookBorrow/>
    </div>
  );
}

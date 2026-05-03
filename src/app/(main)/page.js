import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import TopBookBorrow from "@/components/TopBookBorrow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner />
     <TopBookBorrow/>
    </div>
  );
}

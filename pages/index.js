import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./componets/header";
import Slider from "./componets/slider";
const inter = Inter({ subsets: ["latin"] });
import connectDB from "./connectDb";
export default function Home() {
  console.log(connectDB);
  return (
    <>
      <Header/>
      <Slider/>
    </>
    
  );
}

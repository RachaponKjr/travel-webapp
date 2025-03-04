import Navbar from "@/components/navbar";
import TravelProductSwipers from "./_components/travel-product-swiper";

export default function Home() {
  return (
    <div className="space-y-8">
      <Navbar />
      <TravelProductSwipers headerTitle="For you"/>
      <TravelProductSwipers headerTitle="Recommended"/>
    </div>
  )
}

import NewArrivals from "@/components/HomePage/NewArrivals";
import FeatheredBackpaks from "../components/HomePage/FeatheredBackpaks";
import HeroSection from "../components/HomePage/HeroSection";
import VideoSection from "../components/HomePage/VideoSection";
import PricingSection from "@/components/HomePage/PricingSection";
import LatestBlogs from "@/components/HomePage/LatestBlogs";
import EarnRewards from "@/components/HomePage/EarnRewards";
import AskAiSection from "@/components/HomePage/AskAiSection";
import PreOrderSection from "@/components/HomePage/PreOrderSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <PreOrderSection />
      <FeatheredBackpaks />
      <VideoSection />
      <AskAiSection />
      {/* <NewArrivals /> */}
      <PricingSection />
      <LatestBlogs />
      <EarnRewards />
    </>
  );
}

export default HomePage;

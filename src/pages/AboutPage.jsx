import Commitment from "@/components/About/Commitment";
import HeroSection from "@/components/About/HeroSection";
import MissionStatement from "@/components/About/MissionStatement";

function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Commitment />
      <MissionStatement />
    </div>
  );
}

export default AboutPage;

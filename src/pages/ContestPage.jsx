import FaqSection from "@/components/Contest/FaqSection";
import HeroSection from "@/components/Contest/HeroSection";
import StepProcess from "@/components/Contest/StepProcess";

function ContestPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StepProcess />
      <FaqSection />
    </div>
  );
}

export default ContestPage;

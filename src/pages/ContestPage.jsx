import FaqSection from '@/components/Contest/FaqSection';
import GalleryInfoSection from '@/components/Contest/GalleryInfoSection';
import HeroSection from '@/components/Contest/HeroSection';
import StepProcess from '@/components/Contest/StepProcess';

function ContestPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StepProcess />
      <GalleryInfoSection />
      <FaqSection />
    </div>
  );
}

export default ContestPage;

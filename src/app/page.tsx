import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { AdvantagesSection } from '@/components/landing/advantages-section';
import { SecondVideoSection } from '@/components/landing/second-video-section';
import { BenefitsSection } from '@/components/landing/benefits-section';
import { PremiumCreatorsSection } from '@/components/landing/premium-creators-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { CreatorsCarousel } from '@/components/landing/creators-carousel';
import { PricingSection } from '@/components/landing/pricing-section';
import { StepsSection } from '@/components/landing/steps-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AdvantagesSection />
        <CreatorsCarousel />
        <SecondVideoSection />
        <PricingSection />
        <StepsSection />
        <PremiumCreatorsSection />
        <BenefitsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

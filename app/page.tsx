import { Hero } from '@/components/landing/hero';
import { SocialProof } from '@/components/landing/social-proof';
import { HowItWorks } from '@/components/landing/how-it-works';
import { SavingsPreview } from '@/components/landing/savings-preview';
import { FAQ } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <main className="flex-1 w-full">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <SavingsPreview />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

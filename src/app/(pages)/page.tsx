import HeroSection from "@/components/blocks/Hero";
import FaqSection from "@/components/blocks/faq";
import Features from "@/components/features-1";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<Features />
			<Testimonials />
			<FaqSection />
		</div>
	);
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkflowChange from "@/components/WorkflowChange";
import WhyAdvyu from "@/components/WhyAdvyu";
import FeaturesAndTour from "@/components/FeaturesAndTour";
import IndustryAndCalculator from "@/components/IndustryAndCalculator";
import TestimonialsAndFAQ from "@/components/TestimonialsAndFAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const OG_IMAGE =
  "https://vibe.filesafe.space/1788071300877144500/assets/f0ab4e55-1587-4426-8fb9-d34ba258c664.png";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Advyu",
  url: "https://advyu.com/",
  description:
    "All-in-one marketing AI growth suite. Capture leads across every channel, nurture them with AI, and book appointments 24/7 via the Meta-Verified WhatsApp API.",
  logo: OG_IMAGE,
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Advyu — Automate Your Business, Scale Without Limits"
        description="Advyu is an all-in-one marketing AI growth suite for Indian businesses. Capture leads across every channel, nurture them with AI, and book appointments 24/7 via the Meta-Verified WhatsApp API."
        canonical="/"
        ogImage={OG_IMAGE}
        schemaJson={schemaJson}
      />
      <Navbar />
      <main>
        <Hero />
        <WorkflowChange />
        <WhyAdvyu />
        <FeaturesAndTour />
        <IndustryAndCalculator />
        <TestimonialsAndFAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

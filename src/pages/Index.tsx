import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SetupSection from "@/components/SetupSection";
import ForumSection from "@/components/ForumSection";
import DocsSection from "@/components/DocsSection";
import CommunitySection from "@/components/CommunitySection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SetupSection />
      <ForumSection />
      <DocsSection />
      <CommunitySection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;

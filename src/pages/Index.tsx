import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WorkflowShowcase } from "@/components/WorkflowShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WorkflowShowcase />
    </div>
  );
};

export default Index;

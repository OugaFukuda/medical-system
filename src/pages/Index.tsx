import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import MethodSection from "@/components/MethodSection";
import CourseSection from "@/components/CourseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <MethodSection />
        <CourseSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

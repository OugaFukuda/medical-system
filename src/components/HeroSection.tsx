import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, TrendingUp, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical-student.jpg";

const slides = [
  {
    id: 1,
    title: "一人ひとりを合格に導く",
    subtitle: "代官山メソッド",
    description: "25年の実績と経験に基づく独自の指導法で、医学部合格への最短ルートをご提案します。",
    icon: BookOpen,
    buttonText: "メソッドを詳しく見る",
    buttonVariant: "hero" as const,
  },
  {
    id: 2,
    title: "渋谷1校舎からの",
    subtitle: "圧倒的合格実績",
    description: "医学部累計進学者935名。2024年度も多数の合格者を輩出しています。",
    icon: Award,
    stats: "935名",
    buttonText: "合格実績を見る",
    buttonVariant: "gold" as const,
  },
  {
    id: 3,
    title: "逆転合格を叶える",
    subtitle: "多彩なコース",
    description: "高卒生から高校生まで、一人ひとりのレベルと目標に合わせたコース設計。",
    icon: TrendingUp,
    buttonText: "コース案内を見る",
    buttonVariant: "medical" as const,
  },
  {
    id: 4,
    title: "医学部入試に特化した",
    subtitle: "60名超のプロ講師陣",
    description: "経験豊富な講師とチューターが、合格まで手厚くサポートします。",
    icon: Users,
    buttonText: "講師紹介を見る",
    buttonVariant: "outline" as const,
  },
  {
    id: 5,
    title: "最新入試情報を",
    subtitle: "お届け",
    description: "私立・国立医学部の最新入試情報を常に更新し、戦略的な受験をサポート。",
    icon: Star,
    buttonText: "入試情報を見る",
    buttonVariant: "default" as const,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="代官山MEDICAL 医学部予備校" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="animate-fade-up">
              <div className="flex items-center gap-4 mb-4">
                {React.createElement(slides[currentSlide].icon, {
                  className: "w-12 h-12 text-accent-gold"
                })}
                {slides[currentSlide].stats && (
                  <div className="text-accent-gold text-4xl font-bold">
                    {slides[currentSlide].stats}
                  </div>
                )}
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
                {slides[currentSlide].title}
                <br />
                <span className="text-accent-gold">{slides[currentSlide].subtitle}</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex gap-4">
                <Button 
                  variant={slides[currentSlide].buttonVariant} 
                  size="xl"
                  className="animate-scale-in"
                >
                  {slides[currentSlide].buttonText}
                </Button>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                  資料請求
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-elegant"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-elegant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-elegant ${
              index === currentSlide ? 'bg-accent-gold' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
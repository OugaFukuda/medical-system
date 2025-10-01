import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-elegant sticky top-0 z-50">
      {/* Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>03-3780-3073</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@daikanyama1999.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>受付時間：9:00-18:00</span>
            </div>
          </div>
          <Button variant="consultation" size="sm">
            資料請求・お問い合わせ
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              代官山<span className="text-accent-gold">MEDICAL</span>
            </h1>
            <p className="ml-4 text-sm text-muted-foreground">医学部予備校</p>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover-gold font-medium">代官山MEDICALとは</a>
            <a href="#method" className="text-foreground hover-gold font-medium">合格メソッド</a>
            <a href="#results" className="text-foreground hover-gold font-medium">合格実績</a>
            <a href="#courses" className="text-foreground hover-gold font-medium">コース案内</a>
            <a href="#teachers" className="text-foreground hover-gold font-medium">講師紹介</a>
            <a href="#info" className="text-foreground hover-gold font-medium">入試情報</a>
          </nav>

          <Button variant="hero" size="lg" className="hidden md:flex">
            個別入学説明会
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
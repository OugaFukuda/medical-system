import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">
                代官山<span className="text-accent-gold">MEDICAL</span>
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                25年の実績を持つ医学部専門予備校として、一人ひとりの夢の実現をサポートしています。
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent-gold transition-elegant">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent-gold transition-elegant">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent-gold transition-elegant">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">代官山MEDICALとは</a></li>
                <li><a href="/method" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">合格メソッド</a></li>
                <li><a href="#results" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">合格実績</a></li>
                <li><a href="#courses" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">コース案内</a></li>
                <li><a href="#teachers" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">講師紹介</a></li>
                <li><a href="#info" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">入試情報</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">サポート</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">よくあるご質問</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">資料請求</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">個別相談</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">体験授業</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">校舎見学</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">03-3780-3073</p>
                    <p className="text-sm text-primary-foreground/80">お電話受付時間</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">平日 9:00-18:00</p>
                    <p className="text-sm">土日 9:00-17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">info@daikanyama1999.com</p>
                    <p className="text-sm text-primary-foreground/80">メールでのお問い合わせ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">東京都渋谷区代官山町</p>
                    <p className="text-sm text-primary-foreground/80">代官山駅徒歩3分</p>
                  </div>
                </div>
              </div>

              <Button variant="gold" className="w-full mt-6">
                お問い合わせフォーム
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2024 代官山MEDICAL. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">
                プライバシーポリシー
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">
                利用規約
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent-gold transition-elegant">
                サイトマップ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
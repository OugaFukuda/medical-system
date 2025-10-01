import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Target, Lightbulb, Calendar, Brain, BookOpen, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical-student.jpg";
import successImage from "@/assets/medical-success.jpg";

const methodSteps = [
  {
    step: "01",
    title: "現状分析・目標設定",
    description: "詳細な学力診断テストと面談により、現在の学力と志望校との差を正確に把握します。",
    icon: Target,
    details: [
      "入学時学力診断テスト",
      "志望校分析レポート作成",
      "個別面談による目標設定",
      "学習スタイル診断"
    ]
  },
  {
    step: "02", 
    title: "個別カリキュラム設計",
    description: "一人ひとりの学力・志望校・性格に合わせて、最適化された学習プランを作成します。",
    icon: Brain,
    details: [
      "オーダーメイド学習計画",
      "弱点克服プログラム",
      "志望校別対策カリキュラム",
      "進捗管理システム"
    ]
  },
  {
    step: "03",
    title: "少人数制指導",
    description: "最大9名の少人数クラスで、講師が一人ひとりの理解度を把握しながら指導します。",
    icon: Users,
    details: [
      "1クラス最大9名編成",
      "習熟度別クラス分け",
      "個別質問対応時間",
      "クラス内競争促進"
    ]
  },
  {
    step: "04",
    title: "定期テスト・分析",
    description: "定期的なテストと詳細な分析により、学習の成果と課題を明確にします。",
    icon: TrendingUp,
    details: [
      "週次確認テスト",
      "月次総合模試",
      "詳細成績分析レポート",
      "学習方法改善提案"
    ]
  },
  {
    step: "05",
    title: "面接・小論文対策",
    description: "医学部入試で重要な面接と小論文について、専門的な指導を行います。",
    icon: BookOpen,
    details: [
      "模擬面接実践",
      "小論文添削指導",
      "医療時事問題対策",
      "志望理由書作成支援"
    ]
  },
  {
    step: "06",
    title: "合格まで徹底サポート",
    description: "入試当日まで、学習面・精神面の両方から生徒をサポートし続けます。",
    icon: Award,
    details: [
      "24時間質問受付体制",
      "メンタルケアサポート",
      "保護者との定期面談",
      "入試直前特別対策"
    ]
  }
];

const features = [
  {
    title: "医学部入試専門講師",
    description: "医学部入試に精通した60名超のプロ講師陣",
    image: "👨‍🏫"
  },
  {
    title: "25年の指導実績",
    description: "1999年開校以来、935名の医学部進学実績",
    image: "📚"
  },
  {
    title: "最新入試情報",
    description: "各医学部の最新入試動向を常に分析・更新",
    image: "📊"
  },
  {
    title: "個別フォロー体制",
    description: "チューター制度による学習・生活面のサポート",
    image: "🤝"
  }
];

const Method = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="代官山MEDICAL 合格メソッド" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up">
                代官山<span className="text-accent-gold">メソッド</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
                25年間で培った独自の指導法で、一人ひとりを医学部合格へと導く6つのステップ
              </p>
              <Button variant="gold" size="xl" className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                メソッド体験授業を申し込む
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Method Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                6つの<span className="text-accent-gold">ステップ</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                一人ひとりの現状から合格まで、計画的かつ効率的に導く代官山MEDICALの指導プロセス
              </p>
            </div>

            <div className="space-y-16">
              {methodSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-up ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-6xl font-bold text-accent-gold/20">
                        {step.step}
                      </div>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold/10 rounded-2xl">
                        <step.icon className="w-8 h-8 text-accent-gold" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-primary mb-4">{step.title}</h3>
                    <p className="text-lg text-muted-foreground mb-8">{step.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="bg-gradient-to-br from-secondary to-accent-light/30 rounded-2xl p-12 text-center shadow-elegant">
                      <div className="text-8xl mb-4">
                        {React.createElement(step.icon, { className: "w-24 h-24 text-accent-gold mx-auto" })}
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">
                        STEP {step.step}
                      </div>
                      <div className="text-xl font-semibold text-accent-gold">
                        {step.title.split('・')[0]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-br from-secondary to-accent-light/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                代官山MEDICALの<span className="text-accent-gold">強み</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                他にはない独自の強みで、医学部合格への確実な道筋をお示しします。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-elegant hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-6xl mb-4">{feature.image}</div>
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  代官山メソッドを<br />
                  <span className="text-accent-gold">体験してみませんか？</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  無料体験授業で、代官山MEDICALの指導力を実感してください。一人ひとりに最適化された指導法を体験いただけます。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl">
                    無料体験授業に申し込む
                  </Button>
                  <Button variant="outline" size="xl">
                    詳細資料をダウンロード
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-deep">
                  <img 
                    src={successImage} 
                    alt="代官山MEDICAL 体験授業" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">無料体験授業実施中</h3>
                  <p className="text-white/90">
                    代官山メソッドの効果を実際に体験してください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Method;
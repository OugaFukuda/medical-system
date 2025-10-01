import { CheckCircle, Users, Target, Lightbulb, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const methods = [
  {
    icon: Target,
    title: "個別カリキュラム設計",
    description: "一人ひとりの学力と志望校に応じて、最適な学習プランを作成します。",
    features: ["現状分析", "目標設定", "学習計画立案"],
  },
  {
    icon: Users,
    title: "少人数制指導",
    description: "1クラス最大9名の少人数制で、きめ細かな指導を実現しています。",
    features: ["質問しやすい環境", "個別フォロー", "競争意識の向上"],
  },
  {
    icon: Lightbulb,
    title: "プロ講師による指導",
    description: "医学部入試に精通した経験豊富な講師陣が、合格まで導きます。",
    features: ["入試問題分析", "解法テクニック", "学習方法指導"],
  },
  {
    icon: Calendar,
    title: "年間スケジュール管理",
    description: "入試までの時間を逆算し、計画的な学習スケジュールを管理します。",
    features: ["模試対策", "志望校対策", "直前期サポート"],
  },
];

const MethodSection = () => {
  return (
    <section id="method" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            代官山<span className="text-accent-gold">メソッド</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            25年間で培った独自の指導法で、医学部合格への最短距離を提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-secondary p-8 rounded-2xl shadow-elegant hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold/10 rounded-2xl mb-6">
                <method.icon className="w-8 h-8 text-accent-gold" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">{method.title}</h3>
              <p className="text-muted-foreground mb-6">{method.description}</p>
              
              <ul className="space-y-2">
                {method.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-12 text-center text-white shadow-deep">
          <h3 className="text-3xl font-bold mb-4">
            代官山メソッドを体験してみませんか？
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            無料体験授業で、代官山MEDICALの指導力を実感してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl">
              無料体験授業に申し込む
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              詳細資料をダウンロード
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
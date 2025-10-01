import { GraduationCap, Clock, Users2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "高卒生コース",
    subtitle: "浪人生向け集中指導",
    description: "医学部合格に特化した1年間の集中プログラム",
    features: [
      "朝9時から夜9時まで",
      "最大9名の少人数制",
      "個別カリキュラム",
      "面接・小論文対策"
    ],
    price: "年間授業料",
    duration: "12ヶ月",
    icon: GraduationCap,
    color: "primary",
    recommended: true,
  },
  {
    title: "高3生コース",
    subtitle: "現役合格を目指す",
    description: "学校との両立を図りながら医学部現役合格を目指す",
    features: [
      "平日夜間・土日集中",
      "部活動との両立可能",
      "推薦入試対策",
      "定期テスト対策"
    ],
    price: "月額授業料",
    duration: "8ヶ月",
    icon: Clock,
    color: "accent-gold",
    recommended: false,
  },
  {
    title: "高2生コース",
    subtitle: "早期スタート",
    description: "医学部受験の基礎を固める早期対策コース",
    features: [
      "基礎学力強化",
      "学習習慣の確立",
      "進路相談・指導",
      "模試対策"
    ],
    price: "月額授業料",
    duration: "20ヶ月",
    icon: Users2,
    color: "secondary",
    recommended: false,
  },
];

const CourseSection = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-secondary to-accent-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            <span className="text-accent-gold">コース</span>案内
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            一人ひとりの現状と目標に合わせて選べる、3つのコースをご用意しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-elegant hover-lift overflow-hidden animate-fade-up ${
                course.recommended ? 'ring-2 ring-accent-gold' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {course.recommended && (
                <div className="absolute top-0 left-0 right-0 gradient-gold text-center py-2">
                  <span className="text-primary font-bold text-sm flex items-center justify-center gap-1">
                    <Star className="w-4 h-4" />
                    人気No.1
                  </span>
                </div>
              )}

              <div className={`p-8 ${course.recommended ? 'pt-16' : ''}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                  course.color === 'primary' ? 'bg-primary/10' :
                  course.color === 'accent-gold' ? 'bg-accent-gold/10' :
                  'bg-secondary'
                }`}>
                  <course.icon className={`w-8 h-8 ${
                    course.color === 'primary' ? 'text-primary' :
                    course.color === 'accent-gold' ? 'text-accent-gold' :
                    'text-muted-foreground'
                  }`} />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-2">{course.title}</h3>
                <p className="text-accent-gold font-semibold mb-4">{course.subtitle}</p>
                <p className="text-muted-foreground mb-6">{course.description}</p>

                <div className="space-y-3 mb-8">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-gold rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-6 py-4 border-y border-border">
                  <div>
                    <div className="text-sm text-muted-foreground">{course.price}</div>
                    <div className="text-sm text-muted-foreground">期間: {course.duration}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    variant={course.recommended ? "hero" : "default"} 
                    className="w-full"
                    size="lg"
                  >
                    詳細を見る
                  </Button>
                  <Button variant="outline" className="w-full">
                    資料請求
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              どのコースが良いかわからない方へ
            </h3>
            <p className="text-muted-foreground mb-6">
              個別カウンセリングで、あなたに最適なコースをご提案いたします。
            </p>
            <Button variant="gold" size="xl">
              無料個別相談を予約する
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
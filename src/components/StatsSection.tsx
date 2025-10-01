import { TrendingUp, Users, BookOpen, Award } from "lucide-react";
import successImage from "@/assets/medical-success.jpg";

const stats = [
  {
    icon: Award,
    number: "935",
    unit: "名",
    label: "医学部累計進学者",
    description: "25年間の確かな実績",
  },
  {
    icon: TrendingUp,
    number: "95",
    unit: "%",
    label: "面接通過率",
    description: "独自の面接対策",
  },
  {
    icon: Users,
    number: "60",
    unit: "名",
    label: "プロ講師陣",
    description: "医学部入試のエキスパート",
  },
  {
    icon: BookOpen,
    number: "25",
    unit: "年",
    label: "指導実績",
    description: "代官山MEDICALの伝統",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary to-accent-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            数字で見る<span className="text-accent-gold">代官山MEDICAL</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            25年間、医学部合格にこだわり続けてきた代官山MEDICALの実績をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-elegant hover-lift text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold/10 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-accent-gold" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                  <span className="text-2xl ml-1">{stat.unit}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-deep">
              <img 
                src={successImage} 
                alt="医学部合格の成功イメージ" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold mb-2">合格への確かな道筋</h3>
              <p className="text-white/90">
                一人ひとりの夢を現実にする、代官山MEDICALの指導力。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
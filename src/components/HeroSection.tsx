import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aurora-purple/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-aurora-cyan/20 rounded-full blur-[100px] animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aurora-pink/10 rounded-full blur-[150px] animate-pulse-glow" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(240_15%_5%)_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-white/70">Бот активен и защищает данные</span>
          </div>
        </div>

        <h1 className="animate-fade-up-delay-1 font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-6">
          <span className="gradient-text">Aurora</span>
          <br />
          <span className="text-white/90">VK Bot</span>
        </h1>

        <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          Умный бот для защиты данных, управления токенами и безопасного использования ВКонтакте.
          Надёжность на первом месте.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector("#setup")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 rounded-xl gradient-aurora text-white font-heading font-semibold text-base hover-glow flex items-center justify-center gap-2"
          >
            Подключить бота
            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-xl glass-card text-white/80 font-heading font-semibold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Icon name="Play" size={18} />
            Узнать больше
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up-delay-3">
          {[
            { value: "50K+", label: "Пользователей" },
            { value: "99.9%", label: "Аптайм" },
            { value: "24/7", label: "Защита" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-2xl sm:text-3xl gradient-text">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/30" />
      </div>
    </section>
  );
};

export default HeroSection;

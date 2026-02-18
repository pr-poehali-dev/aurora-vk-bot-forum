import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Shield",
    title: "Защита данных",
    desc: "Шифрование токенов и персональных данных пользователей по стандартам безопасности",
    gradient: "from-aurora-purple to-aurora-blue",
  },
  {
    icon: "Key",
    title: "Управление токенами",
    desc: "Безопасное хранение и автоматическая ротация токенов доступа к API ВКонтакте",
    gradient: "from-aurora-cyan to-aurora-blue",
  },
  {
    icon: "Lock",
    title: "Безопасное использование",
    desc: "Двухфакторная авторизация, журналы доступа и контроль всех действий бота",
    gradient: "from-aurora-pink to-aurora-purple",
  },
  {
    icon: "Zap",
    title: "Мгновенные ответы",
    desc: "Высокоскоростная обработка команд с задержкой менее 100мс для вашего сообщества",
    gradient: "from-aurora-blue to-aurora-cyan",
  },
  {
    icon: "BarChart3",
    title: "Аналитика",
    desc: "Детальная статистика использования, активности пользователей и мониторинг безопасности",
    gradient: "from-aurora-purple to-aurora-pink",
  },
  {
    icon: "Users",
    title: "Модерация",
    desc: "Автоматическая модерация контента, антиспам и защита от нежелательных действий",
    gradient: "from-aurora-cyan to-aurora-purple",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-aurora-purple/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs text-aurora-cyan font-medium uppercase tracking-wider mb-4">
            О боте
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Почему <span className="gradient-text">Aurora</span>?
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Безопасность и производительность для вашего сообщества ВКонтакте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group glass-card rounded-2xl p-6 hover-glow cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={f.icon} size={22} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import Icon from "@/components/ui/icon";

const stats = [
  { icon: "Users", value: "50,000+", label: "Участников" },
  { icon: "MessageSquare", value: "12,000+", label: "Сообщений в день" },
  { icon: "Heart", value: "98%", label: "Довольных" },
  { icon: "Globe", value: "150+", label: "Городов" },
];

const socials = [
  { icon: "MessageCircle", label: "VK Сообщество", desc: "Главная площадка Aurora", href: "https://vk.com", color: "aurora-blue" },
  { icon: "Send", label: "Telegram", desc: "Новости и обновления", href: "https://t.me", color: "aurora-cyan" },
  { icon: "Youtube", label: "YouTube", desc: "Обучающие видео и кейсы", href: "https://youtube.com", color: "aurora-pink" },
];

const CommunitySection = () => {
  return (
    <section id="community" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-aurora-purple/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs text-aurora-cyan font-medium uppercase tracking-wider mb-4">
            Сообщество
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Присоединяйтесь к <span className="gradient-text">Aurora</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Станьте частью активного сообщества разработчиков и администраторов
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6 text-center hover-glow">
              <div className="w-10 h-10 rounded-xl bg-aurora-purple/20 flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon} size={20} className="text-aurora-purple" />
              </div>
              <div className="font-heading font-bold text-2xl gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl p-6 hover-glow block"
            >
              <div className={`w-12 h-12 rounded-xl bg-${s.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={s.icon} size={22} className={`text-${s.color}`} />
              </div>
              <h3 className="font-heading font-semibold text-white mb-1">{s.label}</h3>
              <p className="text-sm text-white/40">{s.desc}</p>
              <span className={`mt-4 inline-flex items-center gap-1 text-xs text-${s.color}`}>
                Перейти
                <Icon name="ExternalLink" size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

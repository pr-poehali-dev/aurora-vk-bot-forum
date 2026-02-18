import Icon from "@/components/ui/icon";

const contacts = [
  {
    icon: "Mail",
    title: "Email",
    value: "support@aurora-bot.ru",
    desc: "Ответ в течение 24 часов",
    gradient: "from-aurora-purple to-aurora-blue",
  },
  {
    icon: "MessageCircle",
    title: "VK",
    value: "vk.com/aurora_bot",
    desc: "Оперативная поддержка",
    gradient: "from-aurora-cyan to-aurora-blue",
  },
  {
    icon: "Send",
    title: "Telegram",
    value: "@aurora_support",
    desc: "Техническая поддержка",
    gradient: "from-aurora-pink to-aurora-purple",
  },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-aurora-cyan/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs text-aurora-purple font-medium uppercase tracking-wider mb-4">
            Контакты
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Свяжитесь с <span className="gradient-text-pink">нами</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Мы всегда на связи и готовы помочь
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contacts.map((c) => (
            <div key={c.title} className="group glass-card rounded-2xl p-6 hover-glow text-center">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={c.icon} size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-1">{c.title}</h3>
              <p className="text-aurora-cyan font-medium text-sm mb-1">{c.value}</p>
              <p className="text-xs text-white/30">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8">
          <h3 className="font-heading font-semibold text-xl text-white mb-6 text-center">Напишите нам</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-aurora-purple/50 focus:ring-1 focus:ring-aurora-purple/30 transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-aurora-purple/50 focus:ring-1 focus:ring-aurora-purple/30 transition-all text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Тема"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-aurora-purple/50 focus:ring-1 focus:ring-aurora-purple/30 transition-all text-sm"
            />
            <textarea
              rows={4}
              placeholder="Ваше сообщение..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-aurora-purple/50 focus:ring-1 focus:ring-aurora-purple/30 transition-all text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl gradient-aurora text-white font-heading font-semibold hover-glow flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={16} />
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;

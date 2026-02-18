import Icon from "@/components/ui/icon";

const steps = [
  {
    num: "01",
    icon: "UserPlus",
    title: "Добавьте бота",
    desc: "Перейдите в настройки сообщества ВК и добавьте Aurora как администратора",
    color: "aurora-purple",
  },
  {
    num: "02",
    icon: "Key",
    title: "Настройте токен",
    desc: "Сгенерируйте API-токен с нужными правами и введите его в панель управления",
    color: "aurora-cyan",
  },
  {
    num: "03",
    icon: "Settings",
    title: "Выберите функции",
    desc: "Активируйте нужные модули: защита, модерация, аналитика, автоответчик",
    color: "aurora-pink",
  },
  {
    num: "04",
    icon: "Rocket",
    title: "Запускайте!",
    desc: "Бот начнёт работать мгновенно — защита и управление сообществом включены",
    color: "aurora-blue",
  },
];

const SetupSection = () => {
  return (
    <section id="setup" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-aurora-cyan/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs text-aurora-purple font-medium uppercase tracking-wider mb-4">
            Подключение
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Быстрый <span className="gradient-text-pink">старт</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Подключение занимает всего 5 минут — следуйте инструкции
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}
              <div className="glass-card rounded-2xl p-6 hover-glow relative z-10 h-full">
                <span className={`font-heading font-black text-4xl text-${step.color}/20`}>{step.num}</span>
                <div className={`w-10 h-10 rounded-lg bg-${step.color}/20 flex items-center justify-center mt-3 mb-4`}>
                  <Icon name={step.icon} size={20} className={`text-${step.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://vk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-aurora text-white font-heading font-semibold hover-glow"
          >
            <Icon name="ExternalLink" size={18} />
            Подключить Aurora
          </a>
        </div>
      </div>
    </section>
  );
};

export default SetupSection;

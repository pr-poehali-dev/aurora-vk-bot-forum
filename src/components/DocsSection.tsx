import Icon from "@/components/ui/icon";

const docs = [
  {
    icon: "BookOpen",
    title: "Быстрый старт",
    desc: "Первые шаги по настройке и запуску Aurora в вашем сообществе",
    gradient: "from-aurora-purple to-aurora-blue",
  },
  {
    icon: "Shield",
    title: "Безопасность",
    desc: "Настройка защиты данных, шифрование токенов и журналы доступа",
    gradient: "from-aurora-cyan to-aurora-blue",
  },
  {
    icon: "Terminal",
    title: "API документация",
    desc: "Полная документация по API Aurora для продвинутых пользователей",
    gradient: "from-aurora-pink to-aurora-purple",
  },
  {
    icon: "Puzzle",
    title: "Плагины",
    desc: "Расширяйте функционал через модульную систему плагинов",
    gradient: "from-aurora-blue to-aurora-cyan",
  },
  {
    icon: "FileText",
    title: "Команды бота",
    desc: "Полный справочник команд для управления ботом и настройками",
    gradient: "from-aurora-purple to-aurora-pink",
  },
  {
    icon: "HelpCircle",
    title: "FAQ",
    desc: "Ответы на популярные вопросы по настройке и использованию Aurora",
    gradient: "from-aurora-cyan to-aurora-purple",
  },
];

const DocsSection = () => {
  return (
    <section id="docs" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-aurora-blue/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs text-aurora-blue font-medium uppercase tracking-wider mb-4">
            Документация
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Всё <span className="gradient-text">понятно</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Подробные гайды и инструкции для работы с Aurora
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((doc) => (
            <div
              key={doc.title}
              className="group glass-card rounded-2xl p-6 hover-glow cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${doc.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={doc.icon} size={22} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-aurora-cyan transition-colors">
                {doc.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-4">{doc.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs text-aurora-purple group-hover:text-aurora-cyan transition-colors">
                Читать
                <Icon name="ArrowRight" size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocsSection;

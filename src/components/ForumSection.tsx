import { useState } from "react";
import Icon from "@/components/ui/icon";

const categories = [
  { id: "all", label: "Все", icon: "LayoutGrid" },
  { id: "help", label: "Помощь", icon: "HelpCircle" },
  { id: "ideas", label: "Идеи", icon: "Lightbulb" },
  { id: "bugs", label: "Баги", icon: "Bug" },
  { id: "showcase", label: "Кейсы", icon: "Star" },
];

const topics = [
  {
    id: 1,
    cat: "help",
    title: "Как настроить автоматическую модерацию в большом сообществе?",
    author: "Алексей М.",
    avatar: "A",
    replies: 24,
    views: 342,
    time: "2 часа назад",
    hot: true,
    tags: ["модерация", "настройка"],
  },
  {
    id: 2,
    cat: "ideas",
    title: "Предложение: интеграция с Telegram для уведомлений",
    author: "Мария К.",
    avatar: "М",
    replies: 18,
    views: 256,
    time: "5 часов назад",
    hot: true,
    tags: ["интеграция", "telegram"],
  },
  {
    id: 3,
    cat: "bugs",
    title: "Задержка ответов бота после обновления API VK",
    author: "Дмитрий В.",
    avatar: "Д",
    replies: 12,
    views: 189,
    time: "8 часов назад",
    hot: false,
    tags: ["баг", "api"],
  },
  {
    id: 4,
    cat: "showcase",
    title: "Кейс: как мы защитили сообщество на 100К подписчиков",
    author: "Елена С.",
    avatar: "Е",
    replies: 45,
    views: 1203,
    time: "1 день назад",
    hot: true,
    tags: ["кейс", "защита"],
  },
  {
    id: 5,
    cat: "help",
    title: "Безопасное хранение токенов: лучшие практики",
    author: "Игорь Л.",
    avatar: "И",
    replies: 31,
    views: 567,
    time: "1 день назад",
    hot: false,
    tags: ["токены", "безопасность"],
  },
  {
    id: 6,
    cat: "ideas",
    title: "Голосование за новый функционал: рассылки или опросы?",
    author: "Наталья Р.",
    avatar: "Н",
    replies: 67,
    views: 890,
    time: "2 дня назад",
    hot: true,
    tags: ["голосование", "функционал"],
  },
];

const avatarColors = [
  "from-aurora-purple to-aurora-blue",
  "from-aurora-cyan to-aurora-blue",
  "from-aurora-pink to-aurora-purple",
  "from-aurora-blue to-aurora-cyan",
  "from-aurora-purple to-aurora-pink",
  "from-aurora-cyan to-aurora-purple",
];

const ForumSection = () => {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? topics : topics.filter((t) => t.cat === active);

  return (
    <section id="forum" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-aurora-pink/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs text-aurora-pink font-medium uppercase tracking-wider mb-4">
            Форум
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Обсуждения <span className="gradient-text-pink">сообщества</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Задавайте вопросы, делитесь идеями и опытом использования Aurora
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === cat.id
                  ? "gradient-aurora text-white glow-purple"
                  : "glass-card text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon name={cat.icon} size={16} />
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((topic, i) => (
            <div
              key={topic.id}
              className="glass-card rounded-2xl p-5 hover-glow cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-heading font-bold text-sm">{topic.avatar}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {topic.hot && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-aurora-pink/20 text-aurora-pink text-[10px] font-semibold uppercase">
                        <Icon name="Flame" size={10} />
                        hot
                      </span>
                    )}
                    <span className="text-[11px] text-white/30">{topic.time}</span>
                  </div>

                  <h3 className="font-heading font-semibold text-white group-hover:text-aurora-cyan transition-colors mb-2 truncate">
                    {topic.title}
                  </h3>

                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-xs text-white/40">{topic.author}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-white/30">
                        <Icon name="MessageCircle" size={12} />
                        {topic.replies}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/30">
                        <Icon name="Eye" size={12} />
                        {topic.views}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      {topic.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-white/30">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center">
                  <Icon name="ChevronRight" size={18} className="text-white/20 group-hover:text-aurora-purple group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-white/60 hover:text-white hover:bg-white/10 transition-all font-medium text-sm">
            <Icon name="Plus" size={16} />
            Создать тему
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;

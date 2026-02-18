import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-aurora flex items-center justify-center">
              <Icon name="Sparkles" size={14} className="text-white" />
            </div>
            <span className="font-heading font-bold gradient-text">Aurora</span>
          </div>

          <div className="flex items-center gap-6">
            {["VK", "Telegram", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-white/30 hover:text-white/70 transition-colors"
              >
                {s}
              </a>
            ))}
          </div>

          <p className="text-xs text-white/20">
            © 2024–2026 Aurora Bot. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

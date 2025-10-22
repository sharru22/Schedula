import { Search, Calendar, FileText, User } from "lucide-react";

export const BottomNav = () => {
  const navItems = [
    { icon: Search, label: "Find a Doctor", active: true },
    { icon: Calendar, label: "Appoint.", active: false },
    { icon: FileText, label: "Records", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 py-3 px-4 transition-colors ${
                item.active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

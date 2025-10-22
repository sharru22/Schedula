import { MapPin, Bell } from "lucide-react";

interface HeaderProps {
  userName: string;
  location: string;
}

export const Header = ({ userName, location }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {userName.charAt(0)}
          </span>
        </div>
        <div>
          <h1 className="text-base font-semibold text-foreground">
            Hello, {userName}
          </h1>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      <button className="p-2 rounded-full hover:bg-muted transition-colors relative">
        <Bell className="w-5 h-5 text-destructive" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
      </button>
    </header>
  );
};

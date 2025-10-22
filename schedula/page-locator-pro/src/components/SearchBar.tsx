import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="px-4 pb-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search Doctors"
          className="pl-10 bg-card"
        />
      </div>
    </div>
  );
};

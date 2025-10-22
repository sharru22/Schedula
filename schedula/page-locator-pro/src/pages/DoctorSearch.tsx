import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { DoctorCard } from "@/components/DoctorCard";
import { BottomNav } from "@/components/BottomNav";

const DoctorSearch = () => {
  const doctors = [
    {
      name: "Dr.Prakash das",
      specialty: "Sr. Psychologist",
      description: "AI Psychologist for dos practice about 7+ years...",
      availability: "Available today",
      timing: "09:30 AM - 07:00 PM",
    },
    {
      name: "Dr.Prakash das",
      specialty: "Sr. Psychologist",
      description: "AI Psychologist for dos practice about 7+ years...",
      availability: "Available today",
      timing: "09:30 AM - 07:00 PM",
    },
    {
      name: "Dr.Prakash das",
      specialty: "Sr. Psychologist",
      description: "AI Psychologist for dos practice about 7+ years...",
      availability: "Available today",
      timing: "09:30 AM - 07:00 PM",
    },
    {
      name: "Dr.Prakash das",
      specialty: "Sr. Psychologist",
      description: "AI Psychologist for dos practice about 7+ years...",
      availability: "Available today",
      timing: "09:30 AM - 07:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <Header userName="Priya" location="Goregaon, Mumbai" />
        <SearchBar />
        
        <main className="px-4 space-y-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </main>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default DoctorSearch;

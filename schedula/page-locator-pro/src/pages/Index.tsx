import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Welcome</h1>
        <p className="text-xl text-muted-foreground mb-8">Get started with your account</p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => navigate("/login")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            Login
          </Button>
          <Button 
            onClick={() => navigate("/signup")}
            variant="outline"
            className="border-border hover:bg-secondary px-8"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

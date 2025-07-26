import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Target, 
  Search, 
  Activity, 
  AlertTriangle, 
  FileText,
  Send,
  Globe,
  Lock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  const [prompt, setPrompt] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle AI workflow creation
    console.log("Creating pentesting workflow:", prompt);
  };

  return (
    <div className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 bg-[length:60px_60px]" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-background/20 backdrop-blur-sm border-white/20">
              <Shield className="h-4 w-4 mr-2" />
              Powered by Advanced AI & LLM Technology
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Automate Network
            <br />
            <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
              Penetration Testing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Create intelligent pentesting workflows that automate reconnaissance, 
            vulnerability analysis, and reporting using cutting-edge LLM technology
          </p>

          {/* AI Workflow Creator */}
          <Card className="max-w-3xl mx-auto p-8 bg-background/10 backdrop-blur-md border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your pentesting workflow... e.g., 'Create a comprehensive network scan and vulnerability assessment for web applications'"
                  className="h-16 text-lg bg-background/50 border-white/30 text-white placeholder:text-white/60 pr-16"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-2 top-2 h-12 w-12 p-0"
                  disabled={!prompt.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  variant={isPublic ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setIsPublic(!isPublic)}
                  className="bg-background/20 hover:bg-background/30 border-white/20"
                >
                  {isPublic ? <Globe className="h-4 w-4 mr-2" /> : <Lock className="h-4 w-4 mr-2" />}
                  {isPublic ? "Public" : "Private"}
                </Button>
                
                <div className="text-sm text-white/60">
                  Powered by AI-driven security analysis
                </div>
              </div>
            </form>
          </Card>
        </div>

        {/* Workflow Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            {
              icon: Search,
              title: "Reconnaissance",
              description: "Automated discovery and enumeration",
              color: "from-cyber-blue to-cyber-purple"
            },
            {
              icon: Target,
              title: "Vulnerability Scanning",
              description: "AI-powered vulnerability detection",
              color: "from-cyber-red to-cyber-purple"
            },
            {
              icon: Activity,
              title: "Exploitation",
              description: "Intelligent exploit automation",
              color: "from-cyber-purple to-cyber-blue"
            },
            {
              icon: FileText,
              title: "Reporting",
              description: "LLM-generated security reports",
              color: "from-cyber-blue to-cyber-red"
            }
          ].map((category, index) => (
            <Card key={index} className="p-6 bg-background/10 backdrop-blur-sm border-white/20 hover:bg-background/20 transition-all duration-300 group cursor-pointer">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
              <p className="text-white/70 text-sm">{category.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
          {[
            { number: "50K+", label: "Security Tests Automated" },
            { number: "99.9%", label: "Accuracy Rate" },
            { number: "10x", label: "Faster Than Manual Testing" }
          ].map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-cyber bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import Link from "next/link";
import { Layers, Clock, ArrowRight, Zap, Rocket, BookOpen, Code, Database, Brain } from "lucide-react";
import { stacks, getCategories, getStacksByCategory } from "@/data/stacks";

function getDifficultyColor(difficulty: string): string {
  const colors: Record<string, string> = {
    "Beginner": "bg-gray-100 text-gray-700",
    "Intermediate": "bg-gray-100 text-gray-700",
    "Advanced": "bg-gray-100 text-gray-700",
  };
  return colors[difficulty] || "bg-gray-100 text-gray-700";
}

function getCategoryIcon(category: string) {
  const icons: Record<string, any> = {
    "AI Application": Zap,
    "Automation": Rocket,
    "Development": Code,
    "No-Code": Layers,
    "RAG": Database,
  };
  const Icon = icons[category] || BookOpen;
  return <Icon className="w-5 h-5" />;
}

export default function StacksPage() {
  const categories = getCategories();

  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <Layers className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Complete Project Tutorials</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Project <span className="text-gray-900">Stacks</span>
          </h1>
          <p className="text-base text-gray-500 max-w-3xl mx-auto">
            Step-by-step tutorials to build real AI products from scratch.
            Learn by building actual applications.
          </p>
        </div>

        {/* Stacks by Category */}
        {categories.map((category) => {
          const categoryStacks = getStacksByCategory(category);
          
          return (
            <div key={category} className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  {getCategoryIcon(category)}
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {category} <span className="text-sm font-normal text-gray-500">({categoryStacks.length} tutorials)</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryStacks.map((stack) => (
                  <Link key={stack.id} href={`/stacks/${stack.slug}`}>
                    <div className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all overflow-hidden h-full flex flex-col cursor-pointer">
                      <div className="p-4 flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                            {stack.iconEmoji}
                          </div>
                        </div>
                        
                        <h3 className="text-sm font-semibold mb-1 text-gray-900 group-hover:text-gray-600 transition line-clamp-1">
                          {stack.title}
                        </h3>
                        <p className="text-gray-500 text-xs line-clamp-2 mb-2">
                          {stack.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${getDifficultyColor(stack.difficulty)}`}>
                            {stack.difficulty}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            {stack.timeToBuild}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {stack.toolsUsed.slice(0, 3).map((tool) => (
                            <span key={tool} className="text-[10px] text-gray-400">
                              #{tool.split(' ')[0]}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="px-4 pb-3 pt-2 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">View Tutorial</span>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

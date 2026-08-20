"use client";
import Link from "next/link";
import { MessageSquare, ArrowRight, FileText, Mail, Share2, Code, Briefcase, Image, Video, CheckSquare, PenTool } from "lucide-react";
import { getCategories, getCategoryPromptCount, getSubcategories } from "@/data/prompts";

function getCategoryIcon(category: string) {
  const icons: Record<string, any> = {
    "Writing": FileText,
    "Marketing": Share2,
    "Development": Code,
    "Design": Image,
    "Business": Briefcase,
    "Productivity": CheckSquare,
  };
  const Icon = icons[category] || MessageSquare;
  return <Icon className="w-5 h-5" />;
}

function getCategoryAccent(category: string): string {
  const accents: Record<string, string> = {
    "Writing": "text-purple-600",
    "Marketing": "text-pink-600",
    "Development": "text-blue-600",
    "Design": "text-green-600",
    "Business": "text-orange-600",
    "Productivity": "text-cyan-600",
  };
  return accents[category] || "text-gray-600";
}

function getCategoryBg(category: string): string {
  const bgs: Record<string, string> = {
    "Writing": "bg-purple-50",
    "Marketing": "bg-pink-50",
    "Development": "bg-blue-50",
    "Design": "bg-green-50",
    "Business": "bg-orange-50",
    "Productivity": "bg-cyan-50",
  };
  return bgs[category] || "bg-gray-50";
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    "Writing": "Email writing, blog posts, articles, social media captions, and copywriting prompts.",
    "Marketing": "SEO, email marketing, landing pages, social media strategy, and sales copy.",
    "Development": "Code assistance, debugging, API docs, database queries, testing, and scaffolding.",
    "Design": "UI/UX design, photo editing, video editing, and visual content creation.",
    "Business": "Business plans, pitch decks, competitive analysis, customer research, and sales scripts.",
    "Productivity": "Task management, meeting agendas, automation, and workflow optimization.",
  };
  return descriptions[category] || "Curated prompts for this category.";
}

export default function PromptsPage() {
  const categories = getCategories();

  return (
    <div className="min-h-screen py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-3">
            <MessageSquare className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Prompt Library</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            AI Prompts <span className="text-gray-900">Library</span>
          </h1>
          <p className="text-base text-gray-500 max-w-3xl mx-auto">
            Explore curated prompts organized by category. 
            Click any category to browse prompts, fill placeholders, edit, copy, or run directly in ChatGPT, Claude, Gemini, or Grok.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {categories.map((category) => {
            const count = getCategoryPromptCount(category);
            const subcategories = getSubcategories(category);
            const accent = getCategoryAccent(category);
            const bg = getCategoryBg(category);

            return (
              <Link key={category} href={`/prompts/category/${encodeURIComponent(category.toLowerCase())}`}>
                <div className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all overflow-hidden h-full flex flex-col cursor-pointer">
                  <div className="p-4 flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <div className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center ${accent} transition-colors group-hover:bg-opacity-80`}>
                        {getCategoryIcon(category)}
                      </div>
                      <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-gray-200 transition-colors">
                        {count} prompts
                      </span>
                    </div>
                    
                    <h3 className="text-base font-semibold mb-1 text-gray-900 line-clamp-1 group-hover:text-purple-600 transition-colors">
                      {category}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-2">
                      {getCategoryDescription(category)}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {subcategories.slice(0, 4).map((sub) => (
                        <span key={sub} className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600 group-hover:bg-gray-50 transition-colors">
                          {sub}
                        </span>
                      ))}
                      {subcategories.length > 4 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500 group-hover:bg-gray-50 transition-colors">
                          +{subcategories.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 group-hover:text-gray-700 transition-colors">Browse prompts</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

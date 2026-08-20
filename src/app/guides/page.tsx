import Link from "next/link";
import { BookOpen, Clock, User, Calendar, Tag, ArrowRight, Eye, MessageCircle, TrendingUp, Send } from "lucide-react";
import { guides, getCategories, getGuidesByCategory } from "@/data/guides";

const AUTHOR_NAME = "Rakibul";

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "Beginner": "bg-gray-100 text-gray-700",
    "Intermediate": "bg-gray-100 text-gray-700",
    "Advanced": "bg-gray-100 text-gray-700",
    "Expert": "bg-gray-100 text-gray-700",
  };
  return colors[category] || "bg-gray-100 text-gray-700";
}

function getCategoryBadge(category: string): string {
  const badges: Record<string, string> = {
    "Beginner": "Beginner Friendly",
    "Intermediate": "Intermediate",
    "Advanced": "Advanced",
    "Expert": "Expert Level",
  };
  return badges[category] || category;
}

export default function GuidesPage() {
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Tutorials & Guides</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Master AI Development
          </h1>
          <p className="text-base text-gray-500 max-w-3xl mx-auto">
            In-depth tutorials, best practices, and advanced techniques from industry experts.
            Learn by building real-world applications.
          </p>
        </div>

        {/* Featured Guide */}
        <div className="mb-12">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition-all">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(guides[0].category)}`}>
                    {getCategoryBadge(guides[0].category)}
                  </span>
                  <span className="text-xs text-gray-500">Featured</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
                  <Link href={`/guides/${guides[0].slug}`}>
                    {guides[0].title}
                  </Link>
                </h2>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {guides[0].description}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-5">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {AUTHOR_NAME}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {guides[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {guides[0].readTime}
                  </span>
                </div>
                <Link href={`/guides/${guides[0].slug}`}>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
                    Read Guide →
                  </button>
                </Link>
              </div>
              <div className="bg-gray-50 p-6 md:p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">{guides[0].iconEmoji}</div>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {guides[0].tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-white border border-gray-200 rounded-full text-gray-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guides Grid by Category */}
        {categories.map((category) => {
          const categoryGuides = getGuidesByCategory(category);
          
          return (
            <div key={category} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {category} Guides
                  </h2>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {categoryGuides.length} tutorials
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryGuides.map((guide) => (
                  <Link key={guide.id} href={`/guides/${guide.slug}`}>
                    <div className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all overflow-hidden h-full flex flex-col cursor-pointer">
                      <div className="p-4 flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                            {guide.iconEmoji}
                          </div>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${getCategoryColor(guide.category)}`}>
                            {guide.category}
                          </span>
                        </div>
                        
                        <h3 className="text-sm font-semibold mb-1 text-gray-900 group-hover:text-gray-600 transition line-clamp-2">
                          {guide.title}
                        </h3>
                        <p className="text-gray-500 text-xs line-clamp-2 mb-2">
                          {guide.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {guide.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-gray-100 rounded-full text-gray-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-[11px] text-gray-500">
                          <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {guide.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" /> {AUTHOR_NAME.split(' ')[0]}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-4 pb-3 pt-2 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Read Tutorial</span>
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

        {/* Telegram Channel Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 text-center mt-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Send className="w-6 h-6 text-gray-700" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
            Join Our Telegram Channel
          </h2>
          <p className="text-gray-500 text-sm mb-5 max-w-md mx-auto">
            Get the latest guides, tutorials, and AI updates delivered directly to your Telegram.
          </p>
          <a
            href="https://t.me/indievibestack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
          >
            <Send className="w-4 h-4" />
            Join on Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
